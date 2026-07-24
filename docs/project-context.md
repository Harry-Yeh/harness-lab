# Harness-Lab Project Context

## Project

Harness-Lab

Personal AI Agent Engineering and Skill Harness Engineering Laboratory.

---

## Core Belief

Agent = LLM (2%) + Harness (98%)

---

## North Star

Enable an AI Agent to:

1. Read Daily Log
2. Analyze Tasks
3. Generate Structured Output
4. Update Notion Database
5. Verify Results
6. Learn from Execution

Workflow:

Observe
→ Reason
→ Act
→ Verify
→ Learn

---

## MVP Goal

Build a Notion Task Management Agent.

Expected Flow:

Daily Log
→ Analysis
→ Task Generation
→ Notion Update
→ Verification

---

## Current Capabilities

Completed:

SPR-01 ✅
SPR-02 ✅

Completed PBIs:

PBI-01 ~ PBI-12

Current Agent Workflow:

Daily Log
→ Collect Log
→ Summarize Log
→ Suggest Tasks
→ Output

Current Status:
Preparing SPR-03

---

## Tech Stack

Runtime

- Node.js 24.18.0
- npm 11.16.0
- nvm 0.40.6

Language

- TypeScript 5.9.3

Frameworks

- LangGraph

LLM Gateway

- OpenRouter

Utilities

- dotenv

Editor

- VS Code

---

## Reliability Strategy

Implemented:

- Retry Strategy
- Model Failover

Reason:

Free models frequently encounter:

- Rate Limits
- Temporary Failures