import 'dotenv/config';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const MODELS = process.env.OPENROUTER_MODELS?.split(',') ?? [];

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 3000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function askLLM(prompt: string): Promise<string> {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is missing');
  }

  if (MODELS.length === 0) {
    throw new Error('OPENROUTER_MODELS is missing');
  }

  for (const model of MODELS) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`Trying model: ${model} (${attempt}/${MAX_RETRIES})`);

        const response = await fetch(
          'https://openrouter.ai/api/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${OPENROUTER_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model,
              messages: [
                {
                  role: 'user',
                  content: prompt,
                },
              ],
            }),
          },
        );

        if (!response.ok) {
          const errorText = await response.text();

          console.error(`Model failed: ${model}`);
          console.error(errorText);

          if (attempt < MAX_RETRIES) {
            console.log(`Retrying in ${RETRY_DELAY_MS / 1000}s...`);

            await sleep(RETRY_DELAY_MS);

            continue;
          }

          break;
        }

        const data = await response.json();

        console.log(`Model success: ${model}`);

        return data.choices[0].message.content;
      } catch (error) {
        console.error(`Model exception: ${model}`);
        console.error(error);

        if (attempt < MAX_RETRIES) {
          console.log(`Retrying in ${RETRY_DELAY_MS / 1000}s...`);

          await sleep(RETRY_DELAY_MS);

          continue;
        }

        break;
      }
    }
  }

  throw new Error('All configured models failed');
}
