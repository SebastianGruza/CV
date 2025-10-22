# Sebastian Gruza - Professional CV & Portfolio

This repository contains my professional CV, career knowledge graph, and portfolio materials.

## 📁 Repository Structure

```
CV/
├── README.md                          # This file
├── docs/                              # CV documentation and research
│   ├── 01_informacje_bazowe.md       # Base information (Polish)
│   ├── 02_selling_points.md          # Career positioning strategies
│   ├── 03_project_shiftgo.md         # ShiftGo project details
│   ├── 04_project_tsp_solver.md      # TspSolver project details
│   ├── 05_aws_migration.md           # AWS migration experience
│   └── CV_Graph_Database_Engineer_PL.md  # Tailored CV for Graph DB Engineer role
├── cv-html/                           # Interactive HTML CV
│   ├── cv_bilingual.html             # Main CV (PL/EN with language switcher)
│   ├── cv.html                        # Simple HTML CV (deprecated)
│   └── assets/
│       └── SebastianGruza.jpg        # Profile photo
├── career-graph/                      # Interactive Career Knowledge Graph
│   ├── README.md                      # Career Graph documentation
│   ├── data/
│   │   ├── career_graph.cypher       # Neo4j Cypher script (data model)
│   │   └── career_graph.json         # Exported JSON for visualization
│   ├── frontend/                      # Interactive 3D visualization
│   │   ├── index.html                # Main visualization page
│   │   ├── js/
│   │   │   ├── graph-viz.js          # Three.js graph visualization
│   │   │   └── modes.js              # Interactive modes (Career Path, etc.)
│   │   └── css/
│   │       └── styles.css            # Styling
│   └── scripts/                       # Utility scripts
│       ├── export_json.py            # Export Neo4j → JSON
│       └── generate_graph.py         # Generate graph from data
└── archive/                           # Deprecated/experimental files
    └── generate_cv_pdf.py            # Old PDF generator (deprecated)
```

## 🎯 Featured Projects

### 1. Interactive Career Knowledge Graph
A 3D interactive visualization of my career as a graph database - showing skills, projects, technologies, and their relationships.

**Features:**
- 5 interactive modes (Career Path, Role Requirements, Technology Evolution, etc.)
- Real Neo4j data model
- 50+ nodes, 80+ relationships
- Live Cypher queries displayed in UI

**Tech Stack:** Neo4j, Cypher, Three.js, D3.js

👉 [View Demo](https://sebastiangruza.com/career-graph) | [Documentation](./career-graph/README.md)

### 2. Bilingual Interactive CV
A professional HTML CV with Polish/English language switcher, QR code, and graph-themed visual elements.

**Features:**
- Language switcher (PL/EN)
- QR code to personal website
- Print-optimized (2-page layout)
- Graph decorations (nodes & edges in header)

👉 [View CV](https://sebastiangruza.com/cv) | [Source](./cv-html/cv_bilingual.html)

## 🔗 Links

- **Website:** [sebastiangruza.com](https://sebastiangruza.com)
- **LinkedIn:** [sebastian-gruza-03a43162](https://www.linkedin.com/in/sebastian-gruza-03a43162/)
- **GitHub:** [SebastianGruza](https://github.com/SebastianGruza)
- **Email:** sebastian.gruza@gmail.com

## 📝 About

**Graph Database Engineer | Neo4j Expert | Java Backend Developer**

9 years of experience in blockchain analytics, with expertise in:
- Graph databases (Neo4j, Cypher - 3+ years production)
- Backend development (Java, Spring Framework - 11+ years)
- Cloud platforms (AWS: S3, DynamoDB, Iceberg)
- Graph algorithms & optimization (TSP, VRP-TW, Node2Vec)

### Career Highlights

- 🔹 **Founding Engineer** of Neo4j-based blockchain analytics platform (2016-2019)
- 🔹 **3 Major Technology Migrations:** Neo4j → MaprDB → AWS Cloud
- 🔹 **Open Source:** [TspSolver](https://github.com/SebastianGruza/TspSolver) - GPU-accelerated TSP solver (0.0% deviation on 50+ instances)
- 🔹 **Education:** MSc Computer Science (5.0 GPA, Deep Learning thesis)

## 🚀 Quick Start

### View CV
```bash
# Open bilingual CV in browser
open cv-html/cv_bilingual.html
```

### Run Career Graph (requires Neo4j)
```bash
# 1. Install Neo4j Desktop (https://neo4j.com/download/)
# 2. Create new database
# 3. Import data model
cat career-graph/data/career_graph.cypher | cypher-shell

# 4. Open visualization
open career-graph/frontend/index.html
```

## 📄 License

- **CV content:** Private (not for reproduction)
- **Code (career-graph, scripts):** MIT License
- **Documentation:** CC BY 4.0

---

*Last updated: 2025*
