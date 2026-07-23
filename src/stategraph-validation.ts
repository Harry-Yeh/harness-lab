import { Annotation, END, START, StateGraph } from '@langchain/langgraph';

const StateAnnotation = Annotation.Root({
  input: Annotation<string>,
  analysis: Annotation<string>,
  output: Annotation<string>,
});

function inputNode() {
  console.log('[Input Node]');

  return {
    input: 'Today I completed PBI-07',
  };
}

function analyzeNode(state: typeof StateAnnotation.State) {
  console.log('[Analyze Node]');
  console.log('input =', state.input);

  return {
    analysis: `Analyzing: ${state.input}`,
  };
}

function outputNode(state: typeof StateAnnotation.State) {
  console.log('[Output Node]');
  console.log('analysis =', state.analysis);

  return {
    output: `Result: ${state.analysis}`,
  };
}

const graph = new StateGraph(StateAnnotation)
  .addNode('collectInput', inputNode)
  .addNode('analyzeInput', analyzeNode)
  .addNode('generateOutput', outputNode)
  .addEdge(START, 'collectInput')
  .addEdge('collectInput', 'analyzeInput')
  .addEdge('analyzeInput', 'generateOutput')
  .addEdge('generateOutput', END)
  .compile();

async function main(): Promise<void> {
  const result = await graph.invoke({
    input: '',
    analysis: '',
    output: '',
  });

  console.log('\n=== Final State ===');
  console.log(result);
}

main().catch(console.error);
``