import { Annotation, END, START, StateGraph } from '@langchain/langgraph';
import { askLLM } from '../services/llm-service.js';

const StateAnnotation = Annotation.Root({
  dailyLog: Annotation<string>,
  summary: Annotation<string>,
  analysis: Annotation<string>,
});

function collectLog() {
  console.log('[Collect Log]');

  return {
    dailyLog:
      'Today I completed PBI-10. I integrated OpenRouter and configured dotenv.',
  };
}

async function summarizeLog(state: typeof StateAnnotation.State) {
  console.log('[Summarize Log]');

  const summary = await askLLM(`
    Summarize the following daily log in one short paragraph.

    Daily Log:
    ${state.dailyLog}
    `);

  return {
    summary,
  };
}

async function suggestTasks(state: typeof StateAnnotation.State) {
  console.log('[Suggest Tasks]');

  const analysis = await askLLM(`
    You are a project assistant.

    Based on the following summary,
    suggest 3 next tasks.

    Summary:
    ${state.summary}
    `);

  return {
    analysis,
  };
}

const graph = new StateGraph(StateAnnotation)
  .addNode('collectLog', collectLog)
  .addNode('summarizeLog', summarizeLog)
  .addNode('suggestTasks', suggestTasks)

  .addEdge(START, 'collectLog')
  .addEdge('collectLog', 'summarizeLog')
  .addEdge('summarizeLog', 'suggestTasks')
  .addEdge('suggestTasks', END)

  .compile();

async function main(): Promise<void> {
  const result = await graph.invoke({
    dailyLog: '',
    summary: '',
    analysis: '',
  });

  console.log('\n=== Final State ===');
  console.log(result);
}

main().catch((error) => {
  console.error(error);
});
