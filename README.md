# 🚀 Harness-Lab

> Agent = LLM (2%) + Harness (98%)

Harness-Lab 是一個專注於 Agent Engineering 與 Skill Harness Engineering 的個人實驗室。

本專案的目標並非打造單純的聊天機器人，而是建構具備：

- State Machine
- Tool Calling
- Browser Automation
- Error Recovery
- Memory System
- Self-Improvement Loop

能力的 AI Agent 基座工程（Skill Harness）。

---

# 🎯 Vision

我相信：

> Prompt Engineering 只是起點。
>
> 真正的 Agent 能力來自 Harness。

Agent 的價值主要來自：

- 工作流程管理
- 狀態控制
- 記憶體架構
- 工具調用能力
- 錯誤恢復機制
- 行為優化閉環

而非單純依靠大型語言模型本身。

---

# 🧪 MVP Project

## Notion Autonomous Board Manager

第一個驗證場景為：

**Notion 全自動化看板管家**

目標讓 AI Agent 能夠：

1. 讀取每日輸入資料
2. 分析待辦事項
3. 自主登入 Notion
4. 建立任務
5. 更新任務狀態
6. 驗證執行結果
7. 累積經驗並持續優化

最終形成：

Observe → Reason → Act → Verify → Learn

的完整閉環。

---

# 🏗 Architecture Philosophy

```text
Agent
├── LLM (2%)
└── Harness (98%)

Harness
├── State Machine
├── Tool Calling
├── Browser Layer
├── Memory System
├── Error Recovery
├── Observability
└── Self Evolution
```

---

# 🛠 Tech Stack

## Foundation

- Ubuntu 24.04 LTS
- Node.js 24 LTS
- TypeScript 5

## Agent Framework

- LangGraph

## Browser Automation

- Puppeteer
- Browser Use
- Stagehand
- Browserbase

## Database

- MongoDB Atlas

## Monitoring

- Sentry
- Datadog

## Project Management

- Notion

---

# 📁 Project Structure

```text
harness-lab/
│
├── src/
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Additional documentation, architecture records and sprint planning are currently maintained in Notion.
```

---

# 📅 Roadmap

## Sprint 1 - Foundation Setup

- [x] WSL2 / Ubuntu 開發環境建置
- [x] Node.js 24 安裝與版本管理
- [x] TypeScript 專案初始化
- [ ] Strict Mode 與 ESLint
- [ ] Git Repository 建置
- [ ] Async/Await Demo

---

## Sprint 2 - Agent Foundation

- [ ] LangGraph Hello World
- [ ] State Graph Concept Validation
- [ ] Tool Calling
- [ ] Retry Mechanism
- [ ] Structured Output

---

## Sprint 3 - Browser Automation

- [ ] Puppeteer Hello World
- [ ] Browser Use Evaluation
- [ ] Stagehand Evaluation
- [ ] Browserbase Integration

---

## Sprint 4 - Notion Integration

- [ ] Notion API Authentication
- [ ] Read Database
- [ ] Create Task
- [ ] Update Task Status
- [ ] Board Synchronization

---

## Sprint 5 - Workflow Engine

- [ ] Raw Data Parser
- [ ] Task Planning Agent
- [ ] Execution Agent
- [ ] Feedback Agent

---

## Sprint 6+ - Evolution

- [ ] Working Memory
- [ ] Long-Term Memory
- [ ] Verbalized Feedback
- [ ] ADR Generator
- [ ] Skill Self-Evolution

---

# 📊 Current Progress

## Current Sprint

SPR-01

## Current Goal

建立可開發的 TypeScript Agent 專案基座。

## Completed

- ✅ PBI-01 WSL2 / Ubuntu 開發環境建置
- ✅ PBI-02 Node.js 24 安裝與版本管理
- ✅ PBI-03 TypeScript 專案初始化

## Current PBI

- 🎯 PBI-04 Strict Mode 與 ESLint

---

# 📚 Documentation

重要技術決策與架構說明透過以下文件管理：

- Architecture Decision Records (ADR)
- Architecture Wiki
- Sprint Planning
- Development Logs
- Lessons Learned

---

# 📝 Development Principles

## WIP = 1

任何時間僅允許一項工作處於開發狀態。

避免多工與上下文切換造成的效率損失。

---

## Definition of Done

每個 PBI 完成時必須達成：

- 功能正常運作
- 無阻塞性錯誤
- Git Commit 完成
- ADR 更新（如適用）
- 文件同步更新

---

## MVP First

優先完成可運作的 MVP。

避免過早投入：

- 過度抽象化
- 過度優化
- 複雜自我進化機制

---

# 🤝 Why This Project?

Harness-Lab 同時是一個：

- AI Agent Engineering 學習計畫
- Skill Harness Engineering 實驗室
- 軟體工程實戰作品集
- 長期開源研究專案

透過實際開發驗證：

> 如何讓 AI 從單純的模型，
> 進化成真正能夠工作的 Agent。

---

# 📄 License

MIT License
