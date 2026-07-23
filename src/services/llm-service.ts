import 'dotenv/config';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL =
  process.env.OPENROUTER_MODEL ??
  'google/gemma-4-31b-it:free';

export async function askLLM(
  prompt: string,
): Promise<string> {
  if (!OPENROUTER_API_KEY) {
    throw new Error(
      'OPENROUTER_API_KEY is missing',
    );
  }

  const response = await fetch(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
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

    console.error(errorText);

    throw new Error(
        `OpenRouter Error: ${response.status}`,
    );
}

  const data = await response.json();

  return data.choices[0].message.content;
}