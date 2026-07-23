import { askLLM } from './services/llm-service.js';

async function main(): Promise<void> {
  const answer = await askLLM(
    'What is the meaning of life?',
  );

  console.log(answer);
}

main().catch(console.error);