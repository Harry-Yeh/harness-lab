# Repository Structure

Current Structure

src/
├── agents/
├── services/
├── llm-test.ts
└── ...

dist/
├── agents/
├── services/
└── ...

---

## agents/

Contains LangGraph workflows and Agent implementations.

Examples

- task-analysis-agent.ts
- task-analysis-agent-mvp.ts

---

## services/

Shared infrastructure services.

Examples

- llm-service.ts

Responsibilities

- OpenRouter integration
- Retry strategy
- Model failover

---

## Future Folders

src/
├── agents/
├── services/
├── tools/
├── memory/
├── workflows/
└── tests/

These folders are planned and may not yet exist.