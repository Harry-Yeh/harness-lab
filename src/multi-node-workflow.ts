import { Annotation, END, START, StateGraph } from '@langchain/langgraph';

const StateAnnotation = Annotation.Root({
  input: Annotation<string>,
  action: Annotation<string>,
  output: Annotation<string>,
});

function collectInput() {
  console.log('[Collect Input]');

  return {
    input: 'Completed PBI-08',
  };
}

function decideAction(
  state: typeof StateAnnotation.State,
) {
  console.log('[Decide Action]');
  console.log('input =', state.input);

  const action = state.input.includes('Completed')
    ? 'create'
    : 'skip';

  return {
    action,
  };
}

function createTask(
  state: typeof StateAnnotation.State,
) {
  console.log('[Create Task]');
  console.log('action =', state.action);

  return {
    output: 'Create Task',
  };
}

function skipTask(
  state: typeof StateAnnotation.State,
) {
  console.log('[Skip Task]');
  console.log('action =', state.action);

  return {
    output: 'Skip Task',
  };
}

function routeAction(
  state: typeof StateAnnotation.State,
) {
  if (state.action === 'create') {
    return 'createTask';
  }

  return 'skipTask';
}

const graph = new StateGraph(StateAnnotation)
  .addNode('collectInput', collectInput)
  .addNode('decideAction', decideAction)
  .addNode('createTask', createTask)
  .addNode('skipTask', skipTask)

  .addEdge(START, 'collectInput')
  .addEdge('collectInput', 'decideAction')

  .addConditionalEdges(
    'decideAction',
    routeAction,
    {
      createTask: 'createTask',
      skipTask: 'skipTask',
    },
  )

  .addEdge('createTask', END)
  .addEdge('skipTask', END)

  .compile();

async function main(): Promise<void> {
  const result = await graph.invoke({
    input: '',
    action: '',
    output: '',
  });

  console.log('\n=== Final State ===');
  console.log(result);
}

main().catch((error) => {
  console.error(error);
});