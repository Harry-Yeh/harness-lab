# 🚀 Harness-Lab

> Agent = LLM (2%) + Harness (98%)

Harness-Lab is a personal AI Agent Engineering and Skill Harness Engineering laboratory.

The goal of this project is not to build a chatbot, but to develop a practical Agent Engineering foundation focused on:

- State Management
- Workflow Orchestration
- Tool Calling
- Error Recovery
- Reliability Engineering
- Memory Systems
- Agent Evolution

---

# 🎯 Vision

I believe:

> Prompt Engineering is only the starting point.
>
> Real Agent capability comes from the Harness.

Most of an Agent's value comes from:

- Workflow Design
- State Control
- Tool Integration
- Memory Architecture
- Error Recovery
- Feedback Loops

rather than the language model itself.

---

# 🧪 MVP Project

## Notion Autonomous Board Manager

The first validation project is:

**Notion Autonomous Board Manager**

The goal is to enable an AI Agent to:

1. Read Daily Logs
2. Analyze Tasks
3. Generate Structured Output
4. Create Tasks in Notion
5. Update Task Status
6. Verify Execution Results
7. Learn from Past Actions

Ultimately forming the loop:

```text
Observe → Reason → Act → Verify → Learn
```

---

# ✅ Current Status

## Completed Sprints

- ✅ SPR-01 Foundation Setup
- ✅ SPR-02 Agent Foundation

## Completed PBIs

- ✅ PBI-01 ~ PBI-12

## Current Focus

Preparing SPR-03:

- Structured Output
- Notion Integration
- Tool Calling
- Task Creation Agent

---

# 🤖 Current Agent Capability

Current implemented workflow:

```text
Daily Log
↓
Collect Log
↓
Summarize Log
↓
Suggest Tasks
↓
Output
```

Implemented capabilities:

- LangGraph Workflow
- OpenRouter Integration
- Task Analysis Agent
- Agent Workflow MVP
- Retry Strategy
- Model Failover

---

# 🏗 Architecture Philosophy

```text
Agent
├── LLM (2%)
└── Harness (98%)

Harness
├── State Management
├── Workflow Engine
├── Tool Calling
├── Memory System
├── Error Recovery
├── Reliability
└── Self Evolution
```

---

# 🛠 Tech Stack

## Foundation

- Ubuntu 24.04 LTS
- Node.js 24 LTS
- TypeScript 5.9

## Agent Framework

- LangGraph

## LLM Gateway

- OpenRouter

## Utilities

- dotenv

## Project Management

- Notion

---

# 📁 Project Structure

```text
harness-lab/
│
├── src/
│   ├── agents/
│   └── services/
│
├── docs/
│   ├── 01-development-skill.md
│   ├── 02-project-context.md
│   ├── 03-product-backlog.md
│   ├── 04-notion-schema.md
│   ├── 05-repository-structure.md
│   └── 06-handoff.md
│
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

---

# 📅 Roadmap

## ✅ Completed

### SPR-01 Foundation Setup

- WSL2 / Ubuntu Environment
- Node.js Setup
- TypeScript Project Initialization
- ESLint Configuration
- Git Workflow
- Async/Await Validation

### SPR-02 Agent Foundation

- LangGraph Introduction
- StateGraph Validation
- Multi-Node Workflow
- LLM Integration
- Task Analysis Agent
- Agent Workflow MVP

---

## 🚧 Upcoming

### SPR-03 Notion Agent Foundation

- PBI-13 Structured Output
- PBI-14 Notion API Authentication
- PBI-15 Read Notion Database

### Future

- Create Task in Notion
- Update Task Status
- Tool Calling
- Task Creation Agent
- Workflow Engine
- Memory System
- Self Evolution

---

# 📚 Documentation

Project documentation is maintained in:

```text
docs/
├── Development Skill
├── Project Context
├── Product Backlog
├── Notion Schema
├── Repository Structure
└── Handoff
```

Additional project management artifacts are maintained in Notion:

- Product Backlog
- Sprint Backlog
- ADR Database
- Architecture Wiki
- Daily Log
- Lessons Learned

---

# 📝 Development Principles

## WIP = 1

Only one PBI may be actively developed at a time.

Avoid context switching and parallel feature development.

---

## Definition of Done

A PBI is considered complete only when:

- TypeScript compiles successfully
- Feature runs successfully
- Expected output is verified
- Code is committed
- Documentation is updated when needed

---

## MVP First

Prioritize:

```text
Working
↓
Validated
↓
Improved
```

Avoid:

- Premature Optimization
- Over Engineering
- Unnecessary Abstractions

---

# 🤝 Why This Project?

Harness-Lab is simultaneously:

- An AI Agent Engineering learning journey
- A Skill Harness Engineering laboratory
- A software engineering portfolio project
- A long-term experimental platform

The objective is to answer:

> How do we evolve AI from a language model into a reliable working Agent?

---

# 📄 License

MIT License