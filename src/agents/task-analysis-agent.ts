import { Annotation, END, START, StateGraph } from '@langchain/langgraph';

const StateAnnotation = Annotation.Root({
  dailyLog: Annotation<string>,
  analysis: Annotation<string>,
});

function collectLog() {
  console.log('[Collect Log]');

  return {
    dailyLog:
      'Today I completed PBI-10. I integrated OpenRouter and configured dotenv.',
  };
}

async function analyzeTasks(state: typeof StateAnnotation.State) {
  console.log('[Analyze Tasks]');

  return {
    analysis: '',
  };
}

const graph = new StateGraph(StateAnnotation)
  .addNode('collectLog', collectLog)
  .addNode('analyzeTasks', analyzeTasks)

  .addEdge(START, 'collectLog')
  .addEdge('collectLog', 'analyzeTasks')
  .addEdge('analyzeTasks', END)

  .compile();

async function main(): Promise<void> {
  const result = await graph.invoke({
    dailyLog: '',
    analysis: '',
  });

  console.log('\n=== Final State ===');
  console.log(result);
}

main().catch((error) => {
  console.error(error);
});
