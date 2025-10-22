# ShiftGo.site - Projekt osobisty (2025)

## 📋 Overview

**URL**: https://shiftgo.site
**Status**: MVP / Work in Progress (zawieszone z braku czasu)
**Cel biznesowy**: Potencjalny SaaS dla automatyzacji grafików pracy
**Development approach**: AI-assisted development z Claude Code

---

## 🎯 Problem Statement

**Business Problem**:
Tworzenie grafików pracy 3-zmianowej dla firm zatrudniających 10-100 pracowników to:
- Czasochłonny proces (manualny)
- Podatny na błędy (konflikty, nierówne obciążenie)
- Wymaga uwzględnienia wielu constraints (dostępność, preferencje, przepisy BHP)

**Solution**:
Silnik optymalizacyjny automatyzujący proces tworzenia grafików z wykorzystaniem algorytmów constraint optimization.

---

## 🛠️ Tech Stack

### Backend
- **Python** - główny język
- **OR-Tools** (Google's Optimization Tools) - silnik optymalizacji
  - Constraint Programming (CP-SAT Solver)
  - Mixed Integer Programming capabilities
- **Flask** - web framework

### Frontend
- **HTML** - UI (basic MVP)
- (Potencjalnie: React/Vue w przyszłości dla SaaS)

### Deployment
- (Status MVP - local development)

---

## 🧮 Algorytmiczne wyzwania

### Constraints do uwzględnienia:
1. **Hard constraints** (must satisfy):
   - Minimalna/maksymalna liczba pracowników na zmianę
   - Maksymalna liczba godzin na pracownika/tydzień
   - Wymagane przerwy między zmianami
   - Dni wolne

2. **Soft constraints** (optimize):
   - Równomierne rozłożenie obciążenia
   - Preferencje pracowników (ulubione zmiany)
   - Minimalizacja zmian nocnych dla jednej osoby
   - Sprawiedliwy rozkład weekendów

### Approach:
- **OR-Tools CP-SAT Solver** - constraint programming
- Variables: shift assignments (worker × day × shift)
- Objective function: minimize cost (based on soft constraint violations)

---

## 💡 Wartość projektu (dla CV)

### Technical Skills:
1. **Optimization algorithms** - OR-Tools, constraint programming
2. **Python development** - backend logic, algorithms
3. **Problem-solving** - complex business problem → technical solution
4. **AI-assisted development** - leveraging Claude Code for rapid prototyping

### Business Acumen:
1. **SaaS thinking** - identified market need (shift scheduling)
2. **Scalability** - designed for 10-100 employees (SME market)
3. **MVP approach** - built minimum viable product first

### Soft Skills:
1. **Self-directed learning** - Python (hobby), OR-Tools (new tech)
2. **Side project execution** - despite full-time job
3. **Pragmatic approach** - paused when time constraints appeared (not abandoned)

---

## 🎓 Connection to Background

### Reinforces existing strengths:
- **Optimization algorithms**: Graph algorithms (Proximity in work) → Constraint optimization (shiftgo)
- **Complex problem-solving**: AML risk propagation → Shift scheduling
- **Algorithm design**: Neo4j Cypher queries → OR-Tools constraints

### Demonstrates breadth:
- **Multi-language**: Java (work) → Python (hobby)
- **Multi-domain**: Blockchain/Finance → Operations/HR tech
- **Continuous learning**: Always exploring new technologies

---

## 📊 Metrics & Achievements

### Current Status:
- [x] MVP engine functional (constraint solver working)
- [x] Basic Flask API
- [x] HTML interface (basic)
- [ ] Production deployment
- [ ] Customer validation
- [ ] SaaS monetization

### Potential metrics (if developed further):
- Reduction in scheduling time (e.g., "5 hours → 5 minutes")
- Constraint satisfaction rate (e.g., "99% of hard constraints satisfied")
- User satisfaction vs. manual scheduling

---

## 🚀 How to position in CV

### For different job types:

**Optimization/Algorithms roles**:
- Lead with OR-Tools + constraint programming
- Highlight: "Built shift scheduling optimizer using Google OR-Tools (Python)"
- Emphasize: Complex constraint satisfaction, objective function optimization

**Backend/Full-stack roles**:
- Focus: Python + Flask + algorithm design
- Highlight: "End-to-end MVP with optimization backend"
- Emphasize: Multi-language proficiency (Java in work, Python in hobby)

**AI/ML roles**:
- Lead with AI-assisted development (Claude Code)
- Highlight: "Rapid prototyping using AI tools - full MVP in X weeks"
- Emphasize: Modern development workflows, AI tool adoption

**Product/Startup roles**:
- Focus: SaaS vision, market need identification
- Highlight: "Identified SME pain point and built solution"
- Emphasize: MVP approach, business thinking, entrepreneurial mindset

**General Software Engineer**:
- Balanced view: "Personal project demonstrating optimization algorithms, Python, and AI-assisted development"
- Shows: Continuous learning, side project execution, diverse tech stack

---

## ⚠️ How to address "project paused"

**Positive framing**:
- ✅ "MVP completed, project paused due to prioritization" (not abandoned!)
- ✅ "Proof of concept successful, evaluating market fit"
- ✅ "Side project - balancing with full-time work and continuous learning"

**Avoid**:
- ❌ "Unfinished project"
- ❌ "Gave up on it"
- ❌ Don't over-promise future plans if unsure

---

## 🔗 Links to include in CV

Depending on state of website:
- If live: ✅ Include URL (https://shiftgo.site)
- If down: ❌ Skip URL, just describe project
- If GitHub public: ✅ Include repo link
- If private: Describe as "personal project, code available upon request"

---

## 🎯 One-liner for CV

**Option 1 (Technical):**
> "ShiftGo: Shift scheduling optimization engine using Python, OR-Tools (Google), and constraint programming for 3-shift workforce planning (10-100 employees)"

**Option 2 (Business):**
> "Built MVP SaaS for automated shift scheduling using OR-Tools constraint solver, reducing manual planning time from hours to minutes"

**Option 3 (AI focus):**
> "Developed shift scheduling optimizer with Claude Code AI assistance, demonstrating rapid prototyping capabilities with Python + OR-Tools"

**Option 4 (Balanced):**
> "Personal project: 3-shift scheduling optimization engine (Python, OR-Tools, Flask) for SME workforce planning, built with AI-assisted development"