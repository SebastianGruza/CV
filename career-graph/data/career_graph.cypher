// ============================================================================
// SEBASTIAN GRUZA - CAREER KNOWLEDGE GRAPH
// ============================================================================
// A graph representation of my professional journey, skills, and expertise
// Last updated: 2025-01-22
// ============================================================================

// Clean slate (optional - only if re-importing)
// MATCH (n) DETACH DELETE n;

// ============================================================================
// SECTION 1: EDUCATION NODES
// ============================================================================

CREATE (edu_bachelor:Education {
  id: "edu_bachelor",
  degree: "Bachelor of Science",
  field: "Computer Science and Econometrics",
  institution: "Warsaw University of Life Sciences (SGGW)",
  yearStart: 2010,
  yearEnd: 2013,
  gpa: 5.0,
  maxGpa: 5.0,
  country: "Poland",
  uniqueAspect: "Unique combination of IT + Data Analysis + Economics"
})

CREATE (edu_master:Education {
  id: "edu_master",
  degree: "Master of Science",
  field: "Computer Science",
  institution: "Warsaw University of Life Sciences (SGGW)",
  yearStart: 2019,
  yearEnd: 2022,
  gpa: 5.0,
  maxGpa: 5.0,
  thesisTitle: "Application of Deep Neural Networks for VHS Video Enhancement",
  thesisTopic: "Deep Learning, Neural Networks, Computer Vision, Image Processing",
  country: "Poland"
})

CREATE (course_graphs:Education {
  id: "course_graph_theory",
  degree: "Course",
  field: "Graph Theory",
  institution: "Warsaw University of Life Sciences (SGGW)",
  yearStart: 2012,
  yearEnd: 2012,
  type: "Academic Course",
  description: "Programming projects in graph theory, algorithm implementations"
})

// ============================================================================
// SECTION 2: CORE SKILLS
// ============================================================================

// Graph Databases & Theory
CREATE (skill_neo4j:Skill {
  id: "skill_neo4j",
  name: "Neo4j",
  level: "Expert",
  yearsOfExperience: 3,
  category: "Graph Database",
  subcategory: "Database",
  current: false,
  productionYears: "2016-2019",
  description: "Graph data modeling, schema design, performance tuning, index optimization"
})

CREATE (skill_cypher:Skill {
  id: "skill_cypher",
  name: "Cypher Query Language",
  level: "Expert",
  yearsOfExperience: 3,
  category: "Query Language",
  subcategory: "Graph Database",
  current: false,
  productionYears: "2016-2019",
  description: "Advanced queries, optimization, graph pattern matching, path algorithms"
})

CREATE (skill_graph_theory:Skill {
  id: "skill_graph_theory",
  name: "Graph Theory",
  level: "Expert",
  yearsOfExperience: 12,
  category: "Computer Science Theory",
  subcategory: "Mathematics",
  current: true,
  yearsRange: "2013-2025",
  description: "Theoretical foundations, graph algorithms, optimization problems"
})

CREATE (skill_graph_algos:Skill {
  id: "skill_graph_algorithms",
  name: "Graph Algorithms",
  level: "Expert",
  yearsOfExperience: 9,
  category: "Algorithms",
  subcategory: "Graph Theory",
  current: true,
  yearsRange: "2016-2025",
  description: "PageRank, Community Detection, shortest paths, risk propagation, Node2Vec"
})

// Backend Development
CREATE (skill_java:Skill {
  id: "skill_java",
  name: "Java",
  level: "Expert",
  yearsOfExperience: 11,
  category: "Backend Development",
  subcategory: "Programming Language",
  current: true,
  yearsRange: "2014-2025",
  description: "Enterprise applications, clean code, design patterns, multithreading"
})

CREATE (skill_spring:Skill {
  id: "skill_spring",
  name: "Spring Framework",
  level: "Expert",
  yearsOfExperience: 9,
  category: "Backend Development",
  subcategory: "Framework",
  current: true,
  yearsRange: "2016-2025",
  description: "Spring Boot, Spring Data, dependency injection, REST APIs"
})

// NoSQL & Data Infrastructure
CREATE (skill_maprdb:Skill {
  id: "skill_maprdb",
  name: "MaprDB",
  level: "Advanced",
  yearsOfExperience: 5,
  category: "NoSQL Database",
  subcategory: "Database",
  current: false,
  productionYears: "2019-2024",
  description: "Data modeling, performance tuning, distributed systems"
})

// Cloud Platforms
CREATE (skill_aws:Skill {
  id: "skill_aws",
  name: "AWS Cloud Platform",
  level: "Advanced",
  yearsOfExperience: 1,
  category: "Cloud Platform",
  subcategory: "Infrastructure",
  current: true,
  yearsRange: "2024-2025",
  description: "Cloud-native architecture, migration strategy, serverless"
})

CREATE (skill_s3:Skill {
  id: "skill_s3",
  name: "AWS S3",
  level: "Intermediate",
  yearsOfExperience: 1,
  category: "Cloud Storage",
  subcategory: "AWS",
  current: true,
  productionYears: "2024-2025",
  description: "Object storage, data lakehouse architecture"
})

CREATE (skill_dynamodb:Skill {
  id: "skill_dynamodb",
  name: "AWS DynamoDB",
  level: "Intermediate",
  yearsOfExperience: 1,
  category: "NoSQL Database",
  subcategory: "AWS",
  current: true,
  productionYears: "2024-2025",
  description: "Serverless NoSQL, partition key design, GSI optimization"
})

CREATE (skill_iceberg:Skill {
  id: "skill_iceberg",
  name: "Apache Iceberg",
  level: "Intermediate",
  yearsOfExperience: 1,
  category: "Data Lakehouse",
  subcategory: "Data Engineering",
  current: true,
  productionYears: "2024-2025",
  description: "Table format, schema evolution, time travel queries"
})

// Optimization & ML
CREATE (skill_optimization:Skill {
  id: "skill_optimization",
  name: "Optimization Algorithms",
  level: "Advanced",
  yearsOfExperience: 11,
  category: "Algorithms",
  subcategory: "Computer Science",
  current: true,
  yearsRange: "2013-2025",
  description: "Genetic Algorithms, Tabu Search, constraint programming, OR-Tools"
})

CREATE (skill_gpu:Skill {
  id: "skill_gpu",
  name: "GPU Programming",
  level: "Intermediate",
  yearsOfExperience: 2,
  category: "Parallel Computing",
  subcategory: "Performance",
  current: true,
  yearsRange: "2023-2025",
  description: "Aparapi (Java → OpenCL), massively parallel algorithms"
})

CREATE (skill_ml:Skill {
  id: "skill_ml",
  name: "Machine Learning",
  level: "Intermediate",
  yearsOfExperience: 3,
  category: "AI/ML",
  subcategory: "Data Science",
  current: true,
  yearsRange: "2022-2025",
  description: "Deep Learning, Neural Networks, Node2Vec, embedding techniques"
})

// Additional Skills
CREATE (skill_python:Skill {
  id: "skill_python",
  name: "Python",
  level: "Intermediate",
  yearsOfExperience: 3,
  category: "Programming Language",
  subcategory: "Backend Development",
  current: true,
  yearsRange: "2022-2025",
  description: "Data processing, OR-Tools, Flask, automation"
})

CREATE (skill_distributed:Skill {
  id: "skill_distributed",
  name: "Distributed Systems",
  level: "Advanced",
  yearsOfExperience: 9,
  category: "Architecture",
  subcategory: "System Design",
  current: true,
  yearsRange: "2016-2025",
  description: "Scalability patterns, data consistency, performance optimization"
})

// ============================================================================
// SECTION 3: TECHNOLOGIES (Specific Tools/Frameworks)
// ============================================================================

CREATE (tech_spring_boot:Technology {
  id: "tech_spring_boot",
  name: "Spring Boot",
  type: "Framework",
  vendor: "Pivotal/VMware",
  category: "Backend"
})

CREATE (tech_aparapi:Technology {
  id: "tech_aparapi",
  name: "Aparapi",
  type: "GPU Framework",
  vendor: "Open Source",
  category: "Parallel Computing",
  description: "Java → OpenCL translation for GPU acceleration"
})

CREATE (tech_ortools:Technology {
  id: "tech_ortools",
  name: "OR-Tools",
  type: "Optimization Library",
  vendor: "Google",
  category: "Optimization",
  description: "Constraint programming, vehicle routing"
})

CREATE (tech_docker:Technology {
  id: "tech_docker",
  name: "Docker",
  type: "Containerization",
  vendor: "Docker Inc",
  category: "DevOps"
})

// ============================================================================
// SECTION 4: PROJECTS
// ============================================================================

CREATE (proj_vrp:Project {
  id: "proj_vrp",
  name: "VRP-TW Solver",
  fullName: "Vehicle Routing Problem with Time Windows",
  year: 2013,
  yearEnd: 2014,
  type: "Production",
  domain: "Logistics",
  company: "WLOG Solutions (JellyTech)",
  description: "Implementation of algorithms for optimal routing with time constraints",
  impact: "Medium",
  scope: "Commercial implementation",
  status: "Completed"
})

CREATE (proj_proximity_v1:Project {
  id: "proj_proximity_v1",
  name: "Proximity Algorithm v1 (Neo4j)",
  year: 2016,
  yearEnd: 2019,
  type: "Production",
  domain: "Blockchain Analytics",
  company: "Coinfirm",
  primaryTech: "Neo4j",
  description: "Graph-based risk propagation system for cryptocurrency addresses (Bitcoin, Ethereum)",
  impact: "High",
  role: "Founding Engineer",
  scope: "Designed and implemented from scratch",
  status: "Production (migrated to v2 in 2019)"
})

CREATE (proj_proximity_v2:Project {
  id: "proj_proximity_v2",
  name: "Proximity Algorithm v2 (MaprDB)",
  year: 2019,
  yearEnd: 2024,
  type: "Production",
  domain: "Blockchain Analytics",
  company: "Coinfirm",
  primaryTech: "MaprDB",
  description: "Redesigned Proximity algorithm for increased scalability using NoSQL",
  impact: "High",
  role: "Migration Architect",
  scope: "Full architecture migration, dual-write strategy, zero-downtime cutover",
  migrationFrom: "Neo4j",
  migrationReason: "Scalability requirements",
  status: "Production (migrated to v3 in 2024)"
})

CREATE (proj_proximity_v3:Project {
  id: "proj_proximity_v3",
  name: "Proximity Algorithm v3 (AWS Cloud)",
  year: 2024,
  yearEnd: 2025,
  type: "Production",
  domain: "Blockchain Analytics",
  company: "Lukka",
  primaryTech: "AWS (S3, DynamoDB, Iceberg)",
  description: "Cloud-native migration of blockchain analytics platform",
  impact: "High",
  role: "Cloud Migration Lead",
  scope: "Hands-on migration to AWS, data lakehouse architecture",
  migrationFrom: "MaprDB",
  migrationReason: "Cloud-native modernization, cost optimization",
  status: "Ongoing"
})

CREATE (proj_tsp:Project {
  id: "proj_tsp",
  name: "TspSolver",
  fullName: "GPU-Accelerated Traveling Salesman Problem Solver",
  year: 2024,
  type: "Open Source",
  domain: "Graph Optimization",
  company: "Personal Project",
  primaryTech: "Java, Aparapi, Genetic Algorithms",
  description: "Research-grade TSP solver using GPU acceleration and novel colony-based evolution",
  impact: "Research-grade",
  githubUrl: "https://github.com/SebastianGruza/TspSolver",
  keyMetric: "0.0% deviation on 50+ benchmark instances",
  scope: "Public repository, production-ready",
  status: "Completed, Active"
})

CREATE (proj_shiftgo:Project {
  id: "proj_shiftgo",
  name: "ShiftGo",
  fullName: "Shift Scheduling Optimization Engine",
  year: 2024,
  type: "Personal Project",
  domain: "Workforce Optimization",
  company: "Personal Project",
  primaryTech: "Python, OR-Tools, Flask",
  description: "Optimization engine for 3-shift scheduling for companies with 10-100 employees",
  impact: "MVP",
  scope: "Hobby project, AI-assisted development (Claude Code)",
  status: "MVP/Paused"
})

CREATE (proj_master_thesis:Project {
  id: "proj_master_thesis",
  name: "VHS Video Enhancement (Master Thesis)",
  fullName: "Application of Deep Neural Networks for VHS Video Enhancement",
  year: 2022,
  type: "Research",
  domain: "Computer Vision",
  company: "Academic",
  primaryTech: "Deep Learning, Neural Networks",
  description: "Research project on improving VHS video quality using deep learning",
  impact: "Academic (5.0 grade)",
  scope: "Master's thesis",
  status: "Completed"
})

// ============================================================================
// SECTION 5: DOMAINS (Business/Technical Domains)
// ============================================================================

CREATE (domain_aml:Domain {
  id: "domain_aml",
  name: "AML/KYC Compliance",
  industry: "FinTech",
  description: "Anti-Money Laundering and Know Your Customer compliance",
  yearsOfExperience: 9,
  yearsRange: "2016-2025"
})

CREATE (domain_blockchain:Domain {
  id: "domain_blockchain",
  name: "Blockchain Analytics",
  industry: "Cryptocurrency",
  description: "Bitcoin and Ethereum transaction analysis, risk scoring",
  yearsOfExperience: 9,
  yearsRange: "2016-2025"
})

CREATE (domain_graph_optimization:Domain {
  id: "domain_graph_opt",
  name: "Graph Optimization",
  industry: "Research/Academia",
  description: "NP-hard graph problems: TSP, VRP-TW, Hamiltonian cycles",
  yearsOfExperience: 11,
  yearsRange: "2013-2025"
})

CREATE (domain_data_engineering:Domain {
  id: "domain_data_eng",
  name: "Data Engineering",
  industry: "Technology",
  description: "ETL pipelines, data lakehouse architecture, distributed data processing",
  yearsOfExperience: 6,
  yearsRange: "2019-2025"
})

// ============================================================================
// SECTION 6: ROLES (Target/Relevant Roles)
// ============================================================================

CREATE (role_graph_eng:Role {
  id: "role_graph_db_engineer",
  name: "Graph Database Engineer",
  level: "Senior",
  matchScore: 1.0,
  description: "Expert in Neo4j, Cypher, graph data modeling, performance tuning"
})

CREATE (role_backend:Role {
  id: "role_backend_engineer",
  name: "Backend Engineer (Java/Spring)",
  level: "Senior",
  matchScore: 0.95,
  description: "Expert in Java, Spring Framework, distributed systems"
})

CREATE (role_cloud:Role {
  id: "role_cloud_engineer",
  name: "Cloud Engineer (AWS)",
  level: "Mid-Senior",
  matchScore: 0.75,
  description: "AWS cloud-native architecture, migration experience"
})

CREATE (role_data_eng:Role {
  id: "role_data_engineer",
  name: "Data Engineer",
  level: "Senior",
  matchScore: 0.8,
  description: "ETL pipelines, data lakehouse, distributed systems"
})

// ============================================================================
// SECTION 7: ACHIEVEMENTS
// ============================================================================

CREATE (achv_tsp:Achievement {
  id: "achv_tsp_benchmark",
  name: "TspSolver: 0.0% Deviation on 50+ Instances",
  year: 2024,
  type: "Research/Open Source",
  description: "GPU-accelerated TSP solver achieving optimal solutions on 50+ TSP_LIB benchmark instances",
  quantifiable: true,
  metric: "0.0% deviation from known optimal solutions",
  visibility: "Public (GitHub)"
})

CREATE (achv_migrations:Achievement {
  id: "achv_3_migrations",
  name: "3 Major Database Migrations in 9 Years",
  year: 2024,
  type: "Architecture",
  description: "Successfully led 3 major technology migrations: Neo4j → MaprDB → AWS Cloud",
  quantifiable: true,
  metric: "3 migrations, zero-downtime cutover",
  visibility: "Professional"
})

CREATE (achv_founding:Achievement {
  id: "achv_founding_engineer",
  name: "Founding Engineer of Neo4j-based Platform",
  year: 2016,
  type: "Career Milestone",
  description: "Designed and implemented blockchain analytics platform from scratch using Neo4j",
  quantifiable: false,
  visibility: "Professional"
})

CREATE (achv_academic:Achievement {
  id: "achv_perfect_gpa",
  name: "Perfect GPA (5.0/5.0) in Both Degrees",
  year: 2022,
  type: "Academic",
  description: "Achieved maximum GPA in both Bachelor's (2013) and Master's (2022) degrees",
  quantifiable: true,
  metric: "5.0/5.0 GPA (twice)",
  visibility: "Academic"
})

// ============================================================================
// SECTION 8: RELATIONSHIPS - Education → Skills
// ============================================================================

CREATE (course_graphs)-[:TAUGHT {
  year: 2012,
  type: "Academic Course",
  description: "Theoretical foundations of graph theory"
}]->(skill_graph_theory)

CREATE (edu_bachelor)-[:TAUGHT {
  yearStart: 2010,
  yearEnd: 2013,
  description: "Programming fundamentals, algorithms"
}]->(skill_java)

CREATE (edu_master)-[:TAUGHT {
  yearStart: 2019,
  yearEnd: 2022,
  topic: "Deep Learning, Computer Vision",
  description: "Advanced algorithms, neural networks"
}]->(skill_ml)

// ============================================================================
// SECTION 9: RELATIONSHIPS - Skill Evolution
// ============================================================================

CREATE (skill_neo4j)-[:EVOLVED_TO {
  year: 2019,
  reason: "Scalability requirements",
  context: "Proximity algorithm needed to scale beyond Neo4j capabilities",
  migrationComplexity: "High",
  downtime: "Zero (dual-write strategy)"
}]->(skill_maprdb)

CREATE (skill_maprdb)-[:EVOLVED_TO {
  year: 2024,
  reason: "Cloud-native modernization, cost optimization",
  context: "Industry trend toward cloud platforms, AWS serverless architecture",
  migrationComplexity: "High",
  downtime: "Zero (phased approach)",
  status: "Ongoing"
}]->(skill_aws)

CREATE (skill_graph_theory)-[:EVOLVED_TO {
  year: 2016,
  reason: "Practical application of theoretical knowledge",
  context: "Applying graph theory to production systems"
}]->(skill_graph_algos)

CREATE (skill_graph_algos)-[:EVOLVED_TO {
  year: 2016,
  reason: "Production implementation",
  context: "Building graph algorithms in Neo4j"
}]->(skill_neo4j)

// ============================================================================
// SECTION 10: RELATIONSHIPS - Skill Synergies
// ============================================================================

CREATE (skill_neo4j)-[:SYNERGY_WITH {
  strength: 0.95,
  type: "Core Dependency",
  description: "Cypher is the primary query language for Neo4j"
}]->(skill_cypher)

CREATE (skill_graph_theory)-[:SYNERGY_WITH {
  strength: 0.9,
  type: "Theory → Practice",
  description: "Graph theory provides theoretical foundation for graph algorithms"
}]->(skill_graph_algos)

CREATE (skill_graph_algos)-[:SYNERGY_WITH {
  strength: 0.85,
  type: "Practice → Implementation",
  description: "Graph algorithms implemented in Neo4j using Cypher"
}]->(skill_neo4j)

CREATE (skill_java)-[:SYNERGY_WITH {
  strength: 0.9,
  type: "Framework for Language",
  description: "Spring Framework is primary Java framework"
}]->(skill_spring)

CREATE (skill_graph_theory)-[:SYNERGY_WITH {
  strength: 0.8,
  type: "Complementary",
  description: "Optimization algorithms often applied to graph problems"
}]->(skill_optimization)

CREATE (skill_java)-[:SYNERGY_WITH {
  strength: 0.7,
  type: "Cross-language",
  description: "Java and Python complement each other for different use cases"
}]->(skill_python)

CREATE (skill_s3)-[:SYNERGY_WITH {
  strength: 0.85,
  type: "Integration",
  description: "Iceberg uses S3 as storage backend"
}]->(skill_iceberg)

CREATE (skill_aws)-[:SYNERGY_WITH {
  strength: 0.8,
  type: "Platform Components",
  description: "DynamoDB is part of AWS ecosystem"
}]->(skill_dynamodb)

// ============================================================================
// SECTION 11: RELATIONSHIPS - Skills → Projects
// ============================================================================

// VRP-TW Project
CREATE (skill_graph_theory)-[:USED_IN {
  intensity: "primary",
  yearStart: 2013,
  yearEnd: 2014,
  context: "First commercial application of graph theory knowledge"
}]->(proj_vrp)

CREATE (skill_java)-[:USED_IN {
  intensity: "primary",
  yearStart: 2013,
  yearEnd: 2014
}]->(proj_vrp)

CREATE (skill_optimization)-[:USED_IN {
  intensity: "primary",
  yearStart: 2013,
  yearEnd: 2014,
  context: "VRP-TW is a classic optimization problem"
}]->(proj_vrp)

// Proximity v1 (Neo4j)
CREATE (skill_neo4j)-[:USED_IN {
  intensity: "primary",
  yearStart: 2016,
  yearEnd: 2019,
  context: "Core database technology for v1"
}]->(proj_proximity_v1)

CREATE (skill_cypher)-[:USED_IN {
  intensity: "primary",
  yearStart: 2016,
  yearEnd: 2019,
  context: "Primary query language for risk propagation"
}]->(proj_proximity_v1)

CREATE (skill_graph_algos)-[:USED_IN {
  intensity: "primary",
  yearStart: 2016,
  yearEnd: 2019,
  context: "Custom graph algorithms for risk scoring"
}]->(proj_proximity_v1)

CREATE (skill_java)-[:USED_IN {
  intensity: "primary",
  yearStart: 2016,
  yearEnd: 2019,
  context: "Backend implementation, Neo4j plugins"
}]->(proj_proximity_v1)

CREATE (skill_spring)-[:USED_IN {
  intensity: "primary",
  yearStart: 2016,
  yearEnd: 2019
}]->(proj_proximity_v1)

// Proximity v2 (MaprDB)
CREATE (skill_maprdb)-[:USED_IN {
  intensity: "primary",
  yearStart: 2019,
  yearEnd: 2024,
  context: "Core NoSQL database for v2"
}]->(proj_proximity_v2)

CREATE (skill_java)-[:USED_IN {
  intensity: "primary",
  yearStart: 2019,
  yearEnd: 2024
}]->(proj_proximity_v2)

CREATE (skill_spring)-[:USED_IN {
  intensity: "primary",
  yearStart: 2019,
  yearEnd: 2024
}]->(proj_proximity_v2)

CREATE (skill_distributed)-[:USED_IN {
  intensity: "primary",
  yearStart: 2019,
  yearEnd: 2024,
  context: "Distributed system design for scalability"
}]->(proj_proximity_v2)

// Proximity v3 (AWS)
CREATE (skill_aws)-[:USED_IN {
  intensity: "primary",
  yearStart: 2024,
  yearEnd: 2025,
  context: "Cloud-native migration"
}]->(proj_proximity_v3)

CREATE (skill_s3)-[:USED_IN {
  intensity: "primary",
  yearStart: 2024,
  yearEnd: 2025,
  context: "Object storage for blockchain data"
}]->(proj_proximity_v3)

CREATE (skill_dynamodb)-[:USED_IN {
  intensity: "primary",
  yearStart: 2024,
  yearEnd: 2025,
  context: "Serverless NoSQL for real-time queries"
}]->(proj_proximity_v3)

CREATE (skill_iceberg)-[:USED_IN {
  intensity: "primary",
  yearStart: 2024,
  yearEnd: 2025,
  context: "Data lakehouse architecture"
}]->(proj_proximity_v3)

CREATE (skill_java)-[:USED_IN {
  intensity: "primary",
  yearStart: 2024,
  yearEnd: 2025
}]->(proj_proximity_v3)

// TspSolver
CREATE (skill_graph_theory)-[:USED_IN {
  intensity: "primary",
  year: 2024,
  context: "TSP is a classic graph theory problem (Hamiltonian cycles)"
}]->(proj_tsp)

CREATE (skill_optimization)-[:USED_IN {
  intensity: "primary",
  year: 2024,
  context: "Genetic Algorithms, Tabu Search"
}]->(proj_tsp)

CREATE (skill_java)-[:USED_IN {
  intensity: "primary",
  year: 2024
}]->(proj_tsp)

CREATE (skill_gpu)-[:USED_IN {
  intensity: "primary",
  year: 2024,
  context: "Aparapi for GPU acceleration"
}]->(proj_tsp)

CREATE (skill_spring)-[:USED_IN {
  intensity: "secondary",
  year: 2024,
  context: "Spring Boot for configuration and web interface"
}]->(proj_tsp)

// ShiftGo
CREATE (skill_python)-[:USED_IN {
  intensity: "primary",
  year: 2024
}]->(proj_shiftgo)

CREATE (skill_optimization)-[:USED_IN {
  intensity: "primary",
  year: 2024,
  context: "OR-Tools for constraint programming"
}]->(proj_shiftgo)

// Master Thesis
CREATE (skill_ml)-[:USED_IN {
  intensity: "primary",
  year: 2022,
  context: "Deep Learning for video enhancement"
}]->(proj_master_thesis)

// ============================================================================
// SECTION 12: RELATIONSHIPS - Project Evolution
// ============================================================================

CREATE (proj_vrp)-[:LED_TO {
  year: 2016,
  insight: "Graph optimization passion and expertise",
  context: "VRP-TW experience demonstrated strong foundation in graph theory",
  connection: "Both are graph optimization problems in different domains"
}]->(proj_proximity_v1)

CREATE (proj_proximity_v1)-[:LED_TO {
  year: 2019,
  reason: "Scalability needs exceeded Neo4j capabilities",
  businessDriver: "Growing blockchain data volume",
  technicalChallenge: "Migration without downtime",
  outcome: "Successful migration to MaprDB"
}]->(proj_proximity_v2)

CREATE (proj_proximity_v2)-[:LED_TO {
  year: 2024,
  reason: "Cloud-native modernization",
  businessDriver: "Cost optimization, industry trend toward cloud",
  technicalChallenge: "Data lakehouse architecture on AWS",
  outcome: "Ongoing migration to AWS"
}]->(proj_proximity_v3)

CREATE (course_graphs)-[:LED_TO {
  year: 2013,
  insight: "Practical application of graph theory",
  context: "Academic knowledge applied to commercial problem"
}]->(proj_vrp)

CREATE (skill_graph_theory)-[:LED_TO {
  year: 2024,
  motivation: "Passion project to showcase graph optimization expertise",
  context: "Research-grade implementation of classic NP-hard problem"
}]->(proj_tsp)

// ============================================================================
// SECTION 13: RELATIONSHIPS - Projects → Domains
// ============================================================================

CREATE (proj_proximity_v1)-[:ADDRESSES]->(domain_aml)
CREATE (proj_proximity_v1)-[:ADDRESSES]->(domain_blockchain)

CREATE (proj_proximity_v2)-[:ADDRESSES]->(domain_aml)
CREATE (proj_proximity_v2)-[:ADDRESSES]->(domain_blockchain)
CREATE (proj_proximity_v2)-[:ADDRESSES]->(domain_data_engineering)

CREATE (proj_proximity_v3)-[:ADDRESSES]->(domain_aml)
CREATE (proj_proximity_v3)-[:ADDRESSES]->(domain_blockchain)
CREATE (proj_proximity_v3)-[:ADDRESSES]->(domain_data_engineering)

CREATE (proj_tsp)-[:ADDRESSES]->(domain_graph_optimization)

CREATE (proj_vrp)-[:ADDRESSES]->(domain_graph_optimization)

CREATE (proj_shiftgo)-[:ADDRESSES]->(domain_graph_optimization)

// ============================================================================
// SECTION 14: RELATIONSHIPS - Skills → Roles (Qualification)
// ============================================================================

// Graph Database Engineer
CREATE (skill_neo4j)-[:QUALIFIES_FOR {
  weight: 1.0,
  reason: "3+ years production experience with Neo4j",
  requirement: "Core skill"
}]->(role_graph_eng)

CREATE (skill_cypher)-[:QUALIFIES_FOR {
  weight: 0.95,
  reason: "Expert-level Cypher query optimization",
  requirement: "Core skill"
}]->(role_graph_eng)

CREATE (skill_graph_algos)-[:QUALIFIES_FOR {
  weight: 0.9,
  reason: "Custom graph algorithm implementations",
  requirement: "Core skill"
}]->(role_graph_eng)

CREATE (skill_graph_theory)-[:QUALIFIES_FOR {
  weight: 0.85,
  reason: "12+ years of graph theory experience",
  requirement: "Nice to have"
}]->(role_graph_eng)

CREATE (skill_java)-[:QUALIFIES_FOR {
  weight: 0.8,
  reason: "11+ years Java for backend/plugins",
  requirement: "Required"
}]->(role_graph_eng)

CREATE (skill_distributed)-[:QUALIFIES_FOR {
  weight: 0.75,
  reason: "Distributed systems experience",
  requirement: "Nice to have"
}]->(role_graph_eng)

// Backend Engineer
CREATE (skill_java)-[:QUALIFIES_FOR {
  weight: 1.0,
  reason: "11+ years expert-level Java",
  requirement: "Core skill"
}]->(role_backend)

CREATE (skill_spring)-[:QUALIFIES_FOR {
  weight: 0.95,
  reason: "9+ years Spring Framework",
  requirement: "Core skill"
}]->(role_backend)

CREATE (skill_distributed)-[:QUALIFIES_FOR {
  weight: 0.8,
  reason: "Distributed systems architecture",
  requirement: "Nice to have"
}]->(role_backend)

// Cloud Engineer
CREATE (skill_aws)-[:QUALIFIES_FOR {
  weight: 0.85,
  reason: "Hands-on AWS migration experience",
  requirement: "Core skill"
}]->(role_cloud)

CREATE (skill_s3)-[:QUALIFIES_FOR {
  weight: 0.7,
  reason: "S3 + Iceberg data lakehouse",
  requirement: "Nice to have"
}]->(role_cloud)

CREATE (skill_dynamodb)-[:QUALIFIES_FOR {
  weight: 0.7,
  reason: "DynamoDB serverless NoSQL",
  requirement: "Nice to have"
}]->(role_cloud)

// Data Engineer
CREATE (skill_distributed)-[:QUALIFIES_FOR {
  weight: 0.85,
  reason: "ETL pipelines, distributed data processing",
  requirement: "Core skill"
}]->(role_data_eng)

CREATE (skill_iceberg)-[:QUALIFIES_FOR {
  weight: 0.8,
  reason: "Data lakehouse architecture",
  requirement: "Nice to have"
}]->(role_data_eng)

CREATE (skill_aws)-[:QUALIFIES_FOR {
  weight: 0.75,
  reason: "Cloud-native data infrastructure",
  requirement: "Nice to have"
}]->(role_data_eng)

// ============================================================================
// SECTION 15: RELATIONSHIPS - Projects → Achievements
// ============================================================================

CREATE (proj_tsp)-[:RESULTED_IN {
  year: 2024,
  description: "Achieved optimal solutions on 50+ benchmark instances"
}]->(achv_tsp)

CREATE (proj_proximity_v3)-[:RESULTED_IN {
  year: 2024,
  description: "Completed 3rd major database migration"
}]->(achv_migrations)

CREATE (proj_proximity_v1)-[:RESULTED_IN {
  year: 2016,
  description: "Designed and built platform from scratch"
}]->(achv_founding)

CREATE (edu_bachelor)-[:RESULTED_IN {
  year: 2013
}]->(achv_academic)

CREATE (edu_master)-[:RESULTED_IN {
  year: 2022
}]->(achv_academic)

// ============================================================================
// SECTION 16: RELATIONSHIPS - Technologies → Skills
// ============================================================================

CREATE (tech_spring_boot)-[:PART_OF]->(skill_spring)
CREATE (tech_aparapi)-[:PART_OF]->(skill_gpu)
CREATE (tech_ortools)-[:PART_OF]->(skill_optimization)
CREATE (tech_docker)-[:PART_OF]->(skill_distributed)

// ============================================================================
// SECTION 17: RELATIONSHIPS - Domain Expertise
// ============================================================================

CREATE (skill_graph_algos)-[:EXPERT_IN {
  yearsOfExperience: 9,
  context: "Risk propagation, blockchain analytics"
}]->(domain_blockchain)

CREATE (skill_neo4j)-[:EXPERT_IN {
  yearsOfExperience: 3,
  context: "Production graph database for AML"
}]->(domain_aml)

CREATE (skill_optimization)-[:EXPERT_IN {
  yearsOfExperience: 11,
  context: "TSP, VRP-TW, constraint programming"
}]->(domain_graph_optimization)

// ============================================================================
// GRAPH STATISTICS & METADATA
// ============================================================================

// To view graph statistics, run:
// MATCH (n) RETURN labels(n) AS type, count(*) AS count ORDER BY count DESC;

// Expected counts:
// - Education: 3 nodes
// - Skill: 15 nodes
// - Technology: 4 nodes
// - Project: 7 nodes
// - Domain: 4 nodes
// - Role: 4 nodes
// - Achievement: 4 nodes
// TOTAL: ~41 nodes

// Relationships: ~80+ edges

// ============================================================================
// END OF CAREER GRAPH
// ============================================================================
