# Career Knowledge Graph

**An interactive 3D visualization of my professional journey as a graph database**

## 🎯 Concept

This project represents my career, skills, projects, and expertise as a **Neo4j knowledge graph** with an interactive 3D visualization. It's both a portfolio piece and a meta-demonstration of graph database expertise.

> *"A CV about graph databases... represented as a graph database"* 🤯

## 📊 Graph Model

### Node Types (7 categories, ~41 nodes)

1. **`:Education`** - Academic degrees and courses (3 nodes)
   - Bachelor's in CS & Econometrics (5.0 GPA)
   - Master's in CS - Deep Learning (5.0 GPA)
   - Graph Theory course

2. **`:Skill`** - Technical skills (15 nodes)
   - Graph databases: Neo4j, Cypher
   - Backend: Java, Spring Framework
   - Cloud: AWS, S3, DynamoDB, Iceberg
   - NoSQL: MaprDB
   - Theory: Graph Theory, Graph Algorithms
   - Other: Python, ML, GPU Programming, Optimization

3. **`:Technology`** - Specific tools/frameworks (4 nodes)
   - Spring Boot, Aparapi, OR-Tools, Docker

4. **`:Project`** - Major projects (7 nodes)
   - Proximity Algorithm v1 (Neo4j, 2016-2019)
   - Proximity Algorithm v2 (MaprDB, 2019-2024)
   - Proximity Algorithm v3 (AWS, 2024-2025)
   - TspSolver (Open Source, 2024)
   - VRP-TW Solver (2013-2014)
   - ShiftGo (2024)
   - Master Thesis (Deep Learning, 2022)

5. **`:Domain`** - Business/technical domains (4 nodes)
   - Blockchain Analytics
   - AML/KYC Compliance
   - Graph Optimization
   - Data Engineering

6. **`:Role`** - Target professional roles (4 nodes)
   - Graph Database Engineer (100% match)
   - Backend Engineer (95% match)
   - Data Engineer (80% match)
   - Cloud Engineer (75% match)

7. **`:Achievement`** - Notable accomplishments (4 nodes)
   - TspSolver: 0.0% deviation on 50+ instances
   - 3 major database migrations
   - Founding engineer of Neo4j platform
   - Perfect GPA (twice)

### Relationship Types (9 types, ~80 edges)

1. **`TAUGHT`** - Education → Skill
2. **`EVOLVED_TO`** - Skill → Skill (technology evolution)
   - Example: `Neo4j -[EVOLVED_TO {year: 2019, reason: "Scalability"}]-> MaprDB`
3. **`SYNERGY_WITH`** - Skill ↔ Skill (complementary skills)
   - Example: `Neo4j -[SYNERGY_WITH {strength: 0.95}]- Cypher`
4. **`USED_IN`** - Skill → Project (skill applied in project)
5. **`LED_TO`** - Project → Project (project evolution)
   - Example: `Proximity v1 -[LED_TO {reason: "Scalability needs"}]-> Proximity v2`
6. **`ADDRESSES`** - Project → Domain
7. **`QUALIFIES_FOR`** - Skill → Role (skill qualifies for role)
8. **`RESULTED_IN`** - Project → Achievement
9. **`PART_OF`** - Technology → Skill

## 🚀 Interactive Features (5 Modes)

### 1. **Career Path Mode**
Chronological journey through my career:
- 2012: Graph Theory Course
- 2013: VRP-TW (first commercial graph project)
- 2016: Neo4j + Proximity v1 (founding engineer)
- 2019: Neo4j → MaprDB migration
- 2024: MaprDB → AWS migration
- 2024: TspSolver (research-grade hobby project)

**Visualization:** Nodes pulse in chronological order, edges animate with flow effect.

### 2. **Role Requirements Mode**
Select a target role (e.g., "Graph Database Engineer") to see:
- Which skills qualify you for the role
- Match score (weighted average)
- Skills highlighted by qualification strength

**Example Query:**
```cypher
MATCH (role:Role {name: "Graph Database Engineer"})
MATCH (skill:Skill)-[q:QUALIFIES_FOR]->(role)
RETURN skill.name, q.weight
ORDER BY q.weight DESC
```

**Output:**
- Neo4j: 1.0 ✅
- Cypher: 0.95 ✅
- Graph Algorithms: 0.9 ✅
- Graph Theory: 0.85 ✅

**Match Score: 92.5%**

### 3. **Technology Evolution Mode**
Visualize how technologies evolved over time:

```
Neo4j (2016-2019)
    ↓ [EVOLVED_TO: Scalability needs]
MaprDB (2019-2024)
    ↓ [EVOLVED_TO: Cloud-native modernization]
AWS Cloud (2024-2025)
```

**Visualization:** Highlight `EVOLVED_TO` edges in red, show timeline.

### 4. **Domain Expertise Mode**
Show all projects and skills related to a specific domain (e.g., "Blockchain Analytics"):

```cypher
MATCH (domain:Domain {name: "Blockchain Analytics"})
MATCH (project:Project)-[:ADDRESSES]->(domain)
MATCH (skill:Skill)-[:USED_IN]->(project)
RETURN domain, project, skill
```

**Visualization:** Cluster view - domain in center, projects around it, skills connected.

### 5. **Skill Synergies Mode**
Discover complementary skills:

```cypher
MATCH (s1:Skill)-[syn:SYNERGY_WITH]-(s2:Skill)
RETURN s1, syn.strength, s2
ORDER BY syn.strength DESC
```

**Top Synergies:**
- Neo4j ↔ Cypher (0.95)
- Graph Theory ↔ Graph Algorithms (0.9)
- Java ↔ Spring Framework (0.9)

**Visualization:** Thick dashed lines for high-strength synergies.

## 📈 Graph Statistics

- **Nodes:** 41
- **Relationships:** ~80
- **Node Types:** 7
- **Relationship Types:** 9
- **Longest Path:** 6 hops (Education → Skill → Project → Achievement)
- **Most Connected Node:** `skill_java` (20+ edges)
- **Deepest Evolution Chain:** Neo4j → MaprDB → AWS (3 hops, 9 years)

## 🛠️ Tech Stack

- **Data Model:** Neo4j Cypher
- **Visualization:** Three.js + Force-Graph3D
- **Export:** Python (neo4j-driver)
- **Frontend:** Vanilla JavaScript + CSS

## 🚀 Getting Started

### Prerequisites
- Neo4j Desktop (https://neo4j.com/download/) or Neo4j Community Edition

### Setup

1. **Install Neo4j Desktop** (easiest option)
   - Download from https://neo4j.com/download/
   - Create a new database (name: `career-graph`)
   - Start the database

2. **Import Data Model**
   ```bash
   # Option A: Via Neo4j Browser (http://localhost:7474)
   # Copy-paste the contents of data/career_graph.cypher into the browser

   # Option B: Via cypher-shell
   cat data/career_graph.cypher | cypher-shell -u neo4j -p yourpassword
   ```

3. **Verify Import**
   ```cypher
   // Run in Neo4j Browser
   MATCH (n) RETURN labels(n) AS type, count(*) AS count ORDER BY count DESC;
   ```

   Expected output:
   ```
   Skill: 15
   Project: 7
   Domain: 4
   Role: 4
   Achievement: 4
   Education: 3
   Technology: 4
   ```

4. **Export to JSON** (for frontend visualization)
   ```bash
   cd scripts
   python export_json.py
   ```

   This creates `data/career_graph.json`

5. **Open Visualization**
   ```bash
   # Open in browser
   open frontend/index.html
   ```

   Or serve via local server:
   ```bash
   cd frontend
   python -m http.server 8000
   # Open http://localhost:8000
   ```

## 📊 Example Queries

### Show Technology Evolution Path
```cypher
MATCH path = (s1:Skill)-[:EVOLVED_TO*]->(s2:Skill)
WHERE s1.name = "Neo4j"
RETURN path;
```

### Calculate Match Score for Graph DB Engineer Role
```cypher
MATCH (role:Role {name: "Graph Database Engineer"})
MATCH (skill:Skill)-[q:QUALIFIES_FOR]->(role)
WITH role, avg(q.weight) AS matchScore, collect({skill: skill.name, weight: q.weight}) AS skills
RETURN role.name, matchScore, skills
ORDER BY matchScore DESC;
```

### Find Shortest Path from Education to Target Role
```cypher
MATCH path = shortestPath(
  (edu:Education {id: "course_graph_theory"})-[*]-(role:Role {name: "Graph Database Engineer"})
)
RETURN path;
```

### PageRank on Skills (Most Central)
```cypher
// Requires APOC plugin
CALL gds.pageRank.stream('career-graph')
YIELD nodeId, score
WITH gds.util.asNode(nodeId) AS node, score
WHERE 'Skill' IN labels(node)
RETURN node.name AS skill, score
ORDER BY score DESC
LIMIT 10;
```

### Community Detection
```cypher
// Requires GDS plugin
CALL gds.louvain.stream('career-graph')
YIELD nodeId, communityId
WITH communityId, collect(gds.util.asNode(nodeId).name) AS members
RETURN communityId, members
ORDER BY size(members) DESC;
```

Expected clusters:
- **Community 1:** Graph DB cluster (Neo4j, Cypher, Graph Theory, Graph Algorithms)
- **Community 2:** Backend cluster (Java, Spring, Distributed Systems)
- **Community 3:** Cloud cluster (AWS, S3, DynamoDB, Iceberg)

## 🎨 Visualization Color Scheme

**Node Colors:**
- 🔵 Graph Database skills (Neo4j, Cypher) - Blue
- 🟢 Backend skills (Java, Spring) - Green
- 🟠 Cloud skills (AWS, S3, DynamoDB) - Orange (current focus)
- 🟣 Theory/Algorithms - Purple
- 🔴 Optimization - Red
- ⚫ Domains - Dark gray
- 🟡 Target Roles - Gold
- 🟧 Achievements - Orange accent
- ⚪ Education - Light gray

**Edge Colors:**
- 🔴 `EVOLVED_TO` - Red (evolution story)
- 🔵 `SYNERGY_WITH` - Blue dashed (complementary)
- 🟢 `USED_IN` - Green (skill → project)
- 🟠 `LED_TO` - Orange thick (project evolution)
- 🟡 `QUALIFIES_FOR` - Gold (path to roles)

## 💡 Why This Is Powerful for CV

### 1. **Meta-Demonstration**
> "I'm applying for Graph Database Engineer... here's my CV as a graph database."

Shows graph thinking at a meta-level.

### 2. **Concrete Proof**
Not just "I know Neo4j" - shows:
- ✅ Real Cypher queries in UI
- ✅ Proper graph data modeling (7 node types, 9 edge types)
- ✅ Graph algorithms understanding (PageRank, Community Detection)
- ✅ 3D visualization (technical breadth)

### 3. **Storytelling**
The graph tells stories:
- **Evolution:** Neo4j → MaprDB → AWS (with reasons!)
- **Passion:** 12-year kontinuum from Graph Theory course to TspSolver
- **Depth:** 3+ years Neo4j production experience explicitly modeled

### 4. **Interview Magnet**
Recruiter: *"What's this career graph thing?"*

You: *"Click 'Technology Evolution' mode - you'll see how I migrated from Neo4j to MaprDB due to scalability, then to AWS for cloud-native architecture. Each edge has a 'reason' attribute showing business drivers. This demonstrates I understand not just tech, but business context behind migrations."*

**Boom. Instant credibility.**

### 5. **Quantifiable**
- 41 nodes (professional milestones)
- 80+ relationships (connections between skills/projects)
- 12-year timeline (2013-2025)
- 3 major migrations explicitly modeled

## 📝 Data Model Philosophy

### Key Design Decisions

1. **Temporal Attributes**
   - Every node/edge has `year` or `yearStart/yearEnd`
   - Enables "Career Path" chronological visualization
   - Shows **evolution**, not just current state

2. **Weighted Relationships**
   - `QUALIFIES_FOR {weight: 0.95}` - quantifiable match scores
   - `SYNERGY_WITH {strength: 0.9}` - relationship strength
   - Enables **analytics** (avg match score for roles)

3. **Reason/Context Attributes**
   - `EVOLVED_TO {reason: "Scalability"}` - business drivers
   - `LED_TO {context: "..."}` - project evolution narrative
   - Enables **storytelling**, not just facts

4. **Bidirectional Thinking**
   - Skills → Projects (what I built)
   - Projects → Achievements (outcomes)
   - Skills → Roles (what I'm qualified for)
   - Enables **multiple perspectives** on same data

## 🚧 Roadmap / Future Enhancements

- [ ] **Mode 6: Timeline View** - Linear chronological view
- [ ] **Mode 7: Impact Analysis** - Trace skill → project → achievement paths
- [ ] **Export to PDF** - Print-friendly graph visualization
- [ ] **Add Certifications** - New node type for professional certs
- [ ] **Add Companies** - Separate Company nodes (Coinfirm, Lukka, etc.)
- [ ] **Add Metrics** - Quantifiable metrics per project (e.g., "Scaled to 10M+ transactions")
- [ ] **Live Cypher Console** - Execute custom queries from UI
- [ ] **Node2Vec Embeddings** - ML-based node similarity
- [ ] **Graph Algorithms Dashboard** - PageRank, centrality, communities (via GDS)

## 📄 License

- **Data (career_graph.cypher):** Private (my personal career data)
- **Code (scripts, frontend):** MIT License
- **Visualization:** MIT License

## 🔗 Links

- **Main CV Repository:** [../README.md](../README.md)
- **Live Demo:** https://sebastiangruza.com/career-graph (coming soon)
- **Neo4j Documentation:** https://neo4j.com/docs/
- **Three.js Force Graph:** https://github.com/vasturiano/3d-force-graph

---

*Created by Sebastian Gruza | Graph Database Engineer | 2025*
