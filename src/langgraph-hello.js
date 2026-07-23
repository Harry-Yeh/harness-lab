import { Annotation, END, START, StateGraph } from '@langchain/langgraph';
const StateAnnotation = Annotation.Root({
    message: (Annotation),
});
const graph = new StateGraph(StateAnnotation)
    .addNode('hello', () => {
    return {
        message: 'Hello LangGraph',
    };
})
    .addEdge(START, 'hello')
    .addEdge('hello', END)
    .compile();
async function main() {
    const result = await graph.invoke({
        message: '',
    });
    console.log(result);
}
main().catch((error) => {
    console.error(error);
});
//# sourceMappingURL=langgraph-hello.js.map