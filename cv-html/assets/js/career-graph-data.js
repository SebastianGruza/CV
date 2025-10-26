/**
 * Career Knowledge Graph - Data Definition
 * Nodes and edges representing Sebastian Gruza's career path
 * Optimized to highlight Graph Database Engineer expertise
 */

const careerGraphData = {
    nodes: [
        // ========== ROLES (purple, largest) ==========
        {
            id: 'senior_data_architect',
            label: 'Senior Data\nArchitect\n(Graph)',
            group: 'role',
            title: 'Senior Data Architect (Graph): Designed & evolved production AML risk graph, led migrations Neo4j → MaprDB → AWS',
            level: 0,
            size: 38
        },
        {
            id: 'knowledge_transfer_lead',
            label: 'Knowledge\nTransfer Lead',
            group: 'role',
            title: 'Mentorship & onboarding: documented and explained AML risk propagation engine ("Proximity") to engineers, data analysts and leadership to ensure continuity (2016-2025)',
            level: 0,
            size: 32
        },
        {
            id: 'graph_db_engineer',
            label: 'Graph DB\nEngineer',
            group: 'role',
            title: 'Target Role: Graph Database Engineer (100% match)',
            level: 0,
            size: 34
        },
        {
            id: 'backend_engineer',
            label: 'Backend\nEngineer',
            group: 'role',
            title: 'Target Role: Backend Engineer (strong match)',
            level: 0,
            size: 30
        },

        // ========== PROJECTS (green, large) ==========
        {
            id: 'vrp_tsw',
            label: 'VRP-TW\nRouting Engine',
            group: 'project',
            title: 'Vehicle Routing Problem with Time Windows (2013-2014) – commercial optimization engine for route planning under constraints',
            level: 1,
            size: 22
        },
        {
            id: 'proximity_platform',
            label: 'Proximity Risk\nScoring Platform',
            group: 'project',
            title: 'Graph-based AML risk propagation (internal proximity engine) - production graph ~1B nodes / 4-6B relationships',
            level: 1,
            size: 32
        },
        {
            id: 'neo4j_extensions',
            label: 'Neo4j Custom\nProcedures',
            group: 'project',
            title: 'Developed internal CALL procedures and Cypher-exposed logic in Java to extend Neo4j functionality (2016-2019)',
            level: 1,
            size: 28
        },
        {
            id: 'proximity_v2',
            label: 'Proximity v2\n(MaprDB)',
            group: 'project',
            title: 'Migrated to MaprDB for scale - millions of blockchain transactions (2019-2024)',
            level: 1,
            size: 26
        },
        {
            id: 'proximity_v3',
            label: 'Proximity v3\n(AWS)',
            group: 'project',
            title: 'Cloud-native AWS migration: S3, DynamoDB, Iceberg (2024-present)',
            level: 1,
            size: 26
        },
        {
            id: 'tsp_solver',
            label: 'TSP Solver\n(GPU Evolutionary)',
            group: 'project',
            title: 'GPU-accelerated Traveling Salesman Problem solver in Java/Aparapi. 50+ benchmarks with 0.0% deviation from optimal; scales to 9,882 cities (~3.57% deviation)',
            level: 1,
            size: 26
        },

        // ========== DOMAINS (orange, medium) ==========
        {
            id: 'graph_optimization_rnd',
            label: 'Graph\nOptimization R&D',
            group: 'domain',
            title: '12+ years solving graph problems: VRP-TW, TSP heuristics (GPU), AML risk propagation in production',
            level: 2,
            size: 28
        },
        {
            id: 'billion_scale_graph',
            label: 'Billion-Scale\nRisk Graph',
            group: 'domain',
            title: 'Production AML/KYC risk scoring graph (~1B nodes / 4-6B relationships) used by banks and exchanges',
            level: 2,
            size: 28
        },
        {
            id: 'aml_risk_propagation',
            label: 'AML Risk\nPropagation Graph',
            group: 'domain',
            title: 'Graph-based propagation of money laundering risk across blockchain addresses and entities (9 years experience)',
            level: 2,
            size: 28
        },
        {
            id: 'blockchain_analytics',
            label: 'Blockchain\nAnalytics',
            group: 'domain',
            title: 'AML/KYC compliance for Bitcoin & Ethereum (FinCrime domain)',
            level: 2,
            size: 26
        },
        {
            id: 'data_access_patterns',
            label: 'Graph Data\nAccess Patterns',
            group: 'domain',
            title: 'Designing efficient graph traversal and query patterns for production scale',
            level: 2,
            size: 24
        },

        // ========== SKILLS (blue, smaller) ==========
        {
            id: 'neo4j',
            label: 'Neo4j',
            group: 'skill',
            title: 'Neo4j & Cypher: 3+ years production (2016-2019)',
            level: 3,
            size: 28
        },
        {
            id: 'cypher',
            label: 'Cypher',
            group: 'skill',
            title: 'Cypher query language: expert level (optimization, procedures)',
            level: 3,
            size: 24
        },
        {
            id: 'java',
            label: 'Java',
            group: 'skill',
            title: 'Java: 11+ years commercial experience (including custom Neo4j procedures)',
            level: 3,
            size: 26
        },
        {
            id: 'graph_algos',
            label: 'Graph\nAlgorithms',
            group: 'skill',
            title: 'Custom graph algorithms: Risk propagation, optimization, traversal',
            level: 3,
            size: 24
        },
        {
            id: 'distributed_systems',
            label: 'Distributed\nSystems',
            group: 'skill',
            title: 'MaprDB, AWS Cloud: scaling to billions of relationships',
            level: 3,
            size: 22
        },
        {
            id: 'spring',
            label: 'Spring\nFramework',
            group: 'skill',
            title: 'Spring Framework & Spring Boot: expert level',
            level: 3,
            size: 22
        },
        {
            id: 'aws',
            label: 'AWS Cloud',
            group: 'skill',
            title: 'AWS: S3, DynamoDB, Iceberg – hands-on migration of blockchain analytics platform to cloud-native stack (2024-present)',
            level: 3,
            size: 22
        },
        {
            id: 'performance_optimization',
            label: 'Performance\nOptimization',
            group: 'skill',
            title: 'Query optimization, indexing strategies, graph traversal efficiency',
            level: 3,
            size: 20
        },
        {
            id: 'maprdb',
            label: 'MaprDB',
            group: 'skill',
            title: 'MaprDB (NoSQL): 5 years production (2019-2024)',
            level: 3,
            size: 20
        },

        // ========== EDUCATION (red, smallest) ==========
        {
            id: 'msc_cs',
            label: 'MSc (Inż.)\nComputer Science',
            group: 'education',
            title: 'MSc (Inż.) in Computer Science, perfect GPA (5.0/5.0) - qualifies for Graph DB Engineer role',
            level: 4,
            size: 22
        },
        {
            id: 'graph_theory_course',
            label: 'Graph Theory\nCourse',
            group: 'education',
            title: 'University course: Graph Theory (2010-2013) - theoretical foundation',
            level: 4,
            size: 18
        }
    ],

    edges: [
        // ========== Senior Data Architect as central hub (7 connections) ==========
        {
            from: 'senior_data_architect',
            to: 'proximity_platform',
            label: 'OWNS',
            color: { color: '#9B59B6', opacity: 0.9 },
            width: 4,
            title: 'Ownership of graph data model for Proximity platform',
            font: { size: 11, color: '#7D3C98', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'senior_data_architect',
            to: 'neo4j_extensions',
            label: 'OWNS',
            color: { color: '#9B59B6', opacity: 0.9 },
            width: 4,
            title: 'Ownership of custom Neo4j procedures and extensions',
            font: { size: 11, color: '#7D3C98', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'senior_data_architect',
            to: 'proximity_v2',
            label: 'ARCHITECTED',
            color: { color: '#9B59B6', opacity: 0.8 },
            width: 3,
            title: 'Architected migration from Neo4j to MaprDB for scalability',
            font: { size: 10, color: '#7D3C98', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'senior_data_architect',
            to: 'proximity_v3',
            label: 'ARCHITECTED',
            color: { color: '#9B59B6', opacity: 0.8 },
            width: 3,
            title: 'Architected cloud-native migration to AWS',
            font: { size: 10, color: '#7D3C98', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'senior_data_architect',
            to: 'billion_scale_graph',
            label: 'DESIGNED',
            color: { color: '#9B59B6', opacity: 0.8 },
            width: 3,
            title: 'Designed data model for billion-scale risk graph (1B nodes / 4-6B relationships)',
            font: { size: 10, color: '#7D3C98', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'senior_data_architect',
            to: 'data_access_patterns',
            label: 'DESIGNED',
            color: { color: '#9B59B6', opacity: 0.8 },
            width: 3,
            title: 'Designed efficient graph traversal and query patterns',
            font: { size: 10, color: '#7D3C98', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Knowledge Transfer Lead connections (1 connection) ==========
        {
            from: 'knowledge_transfer_lead',
            to: 'aml_risk_propagation',
            label: 'ENABLES',
            color: { color: '#9B59B6', opacity: 0.8 },
            width: 3,
            title: 'Enabled team understanding of AML risk propagation algorithm',
            font: { size: 10, color: '#7D3C98', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Projects → Domains (9 connections) ==========
        {
            from: 'proximity_platform',
            to: 'billion_scale_graph',
            label: 'IMPLEMENTS',
            color: { color: '#27AE60', opacity: 0.8 },
            width: 3,
            title: 'Proximity platform implements billion-scale risk graph with 1B nodes / 4-6B relationships',
            font: { size: 11, color: '#1E8449', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_platform',
            to: 'aml_risk_propagation',
            label: 'ADDRESSES',
            color: { color: '#27AE60', opacity: 0.8 },
            width: 3,
            title: 'Proximity platform is the core AML risk propagation engine',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_platform',
            to: 'blockchain_analytics',
            label: 'ADDRESSES',
            color: { color: '#27AE60', opacity: 0.8 },
            width: 2,
            title: 'Proximity platform provides blockchain analytics for compliance',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'neo4j_extensions',
            to: 'data_access_patterns',
            label: 'IMPLEMENTS',
            color: { color: '#27AE60', opacity: 0.8 },
            width: 2,
            title: 'Custom Neo4j procedures implement efficient data access patterns',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_v2',
            to: 'billion_scale_graph',
            label: 'SCALES',
            color: { color: '#27AE60', opacity: 0.7 },
            width: 2,
            title: 'Proximity v2 scaled graph to handle millions of blockchain transactions',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_v3',
            to: 'billion_scale_graph',
            label: 'MODERNIZES',
            color: { color: '#27AE60', opacity: 0.7 },
            width: 2,
            title: 'Proximity v3 modernizes graph platform with cloud-native architecture',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_v3',
            to: 'data_access_patterns',
            label: 'OPTIMIZES',
            color: { color: '#27AE60', opacity: 0.7 },
            width: 2,
            title: 'Proximity v3 optimizes data access patterns for cloud storage',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Skills → Projects (12 connections) ==========
        {
            from: 'neo4j',
            to: 'proximity_platform',
            label: 'USED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 3,
            title: 'Neo4j was the core database for Proximity platform (2016-2019)',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'neo4j',
            to: 'neo4j_extensions',
            label: 'USED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 3,
            title: 'Neo4j extended with custom procedures',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'cypher',
            to: 'proximity_platform',
            label: 'USED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'Cypher queries orchestrate risk propagation logic',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'cypher',
            to: 'neo4j_extensions',
            label: 'USED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'Cypher-exposed logic in custom procedures',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'neo4j_extensions',
            label: 'IMPLEMENTED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 3,
            title: 'Custom Neo4j procedures developed in Java (CALL procedures)',
            font: { size: 10, color: '#2874A6', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'proximity_platform',
            label: 'IMPLEMENTED_IN',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Proximity platform backend implemented in Java + Spring',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'proximity_v2',
            label: 'IMPLEMENTED_IN',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Proximity v2 implemented in Java',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'proximity_v3',
            label: 'IMPLEMENTED_IN',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Proximity v3 implemented in Java',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_algos',
            to: 'proximity_platform',
            label: 'APPLIED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'Graph algorithms applied for risk propagation and optimization',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'maprdb',
            to: 'proximity_v2',
            label: 'USED_IN',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'MaprDB powered Proximity v2 for scale (2019-2024)',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'aws',
            to: 'proximity_v3',
            label: 'USED_IN',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'AWS Cloud (S3, DynamoDB, Iceberg) foundation for Proximity v3',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'performance_optimization',
            to: 'proximity_platform',
            label: 'APPLIED_IN',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Performance optimization for billion-scale graph queries',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Skills → Domains (4 connections) ==========
        {
            from: 'neo4j',
            to: 'aml_risk_propagation',
            label: 'EXPERT_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'Neo4j expertise applied to AML risk propagation domain',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_algos',
            to: 'aml_risk_propagation',
            label: 'EXPERT_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'Graph algorithms expertise in AML risk propagation',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'distributed_systems',
            to: 'billion_scale_graph',
            label: 'ENABLES',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Distributed systems knowledge enables billion-scale graph',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'performance_optimization',
            to: 'data_access_patterns',
            label: 'ENABLES',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Performance optimization enables efficient data access patterns',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Skills → Target Roles (top 3 must-have from job description) ==========
        {
            from: 'neo4j',
            to: 'graph_db_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.9 },
            width: 4,
            title: 'Neo4j expertise (3+ years production) is primary qualification for Graph DB Engineer',
            font: { size: 11, color: '#D68910', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'cypher',
            to: 'graph_db_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 3,
            title: 'Cypher expertise strongly qualifies for Graph DB Engineer',
            font: { size: 10, color: '#D68910', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'graph_db_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 3,
            title: 'Java expertise (custom Neo4j procedures) qualifies for Graph DB Engineer',
            font: { size: 10, color: '#D68910', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'backend_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 3,
            title: 'Java expertise (11+ years) is primary qualification for Backend Engineer',
            font: { size: 10, color: '#D68910', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'spring',
            to: 'backend_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 2,
            title: 'Spring Framework expertise qualifies for Backend Engineer',
            font: { size: 10, color: '#D68910', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Education → Skills (2 connections) ==========
        {
            from: 'msc_cs',
            to: 'graph_algos',
            label: 'TAUGHT',
            color: { color: '#E74C3C', opacity: 0.7 },
            width: 2,
            title: 'MSc Computer Science taught advanced graph algorithms',
            font: { size: 10, color: '#C0392B', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_theory_course',
            to: 'graph_algos',
            label: 'TAUGHT',
            color: { color: '#E74C3C', opacity: 0.7 },
            width: 2,
            title: 'Graph Theory course provided theoretical foundation',
            font: { size: 10, color: '#C0392B', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Skill Synergies (1 connection) ==========
        {
            from: 'graph_algos',
            to: 'performance_optimization',
            label: 'SYNERGY',
            color: { color: '#3498DB', opacity: 0.6 },
            width: 2,
            title: 'Graph algorithms and performance optimization work together',
            font: { size: 9, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== Career Continuity: Graph Theory Experience Continuum (3 connections) ==========
        {
            from: 'vrp_tsw',
            to: 'proximity_platform',
            label: 'EVOLVED_TO',
            color: { color: '#27AE60', opacity: 0.5 },
            width: 2,
            dashes: [5, 5],
            title: 'Graph optimization (VRP-TW 2013-2014) led to production graph analytics (Proximity 2016+)',
            font: { size: 9, color: '#1E8449', strokeWidth: 1, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_platform',
            to: 'tsp_solver',
            label: 'INSPIRED',
            color: { color: '#27AE60', opacity: 0.5 },
            width: 2,
            dashes: [5, 5],
            title: 'Production graph work inspired GPU-accelerated TSP research solver',
            font: { size: 9, color: '#1E8449', strokeWidth: 1, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_theory_course',
            to: 'vrp_tsw',
            label: 'LED_TO',
            color: { color: '#E74C3C', opacity: 0.5 },
            width: 1,
            dashes: [5, 5],
            title: 'Graph Theory foundation led to first commercial graph project (VRP-TW)',
            font: { size: 9, color: '#C0392B', strokeWidth: 1, strokeColor: '#ffffff' }
        },

        // ========== TSP Solver connections to domains and skills (6 connections) ==========
        {
            from: 'tsp_solver',
            to: 'graph_optimization_rnd',
            label: 'RESEARCH_IN',
            color: { color: '#27AE60', opacity: 0.8 },
            width: 2,
            title: 'TSP Solver is R&D in heuristics, evolutionary search and parallel graph optimization',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'tsp_solver',
            to: 'graph_algos',
            label: 'APPLIES',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'Custom graph heuristics, genetic algorithms, Tabu Search',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'tsp_solver',
            label: 'IMPLEMENTED_IN',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'High-performance Java (Aparapi for GPU acceleration)',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'performance_optimization',
            to: 'tsp_solver',
            label: 'DRIVES',
            color: { color: '#3498DB', opacity: 0.8 },
            width: 2,
            title: 'GPU acceleration & parallelism for large search spaces (9,882 cities)',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // ========== VRP-TW and Proximity → Graph Optimization R&D (2 connections) ==========
        {
            from: 'vrp_tsw',
            to: 'graph_optimization_rnd',
            label: 'APPLIED_IN',
            color: { color: '#27AE60', opacity: 0.7 },
            width: 2,
            title: 'Commercial routing optimization under constraints (VRP-TW, 2013-2014)',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_platform',
            to: 'graph_optimization_rnd',
            label: 'APPLIED_IN',
            color: { color: '#27AE60', opacity: 0.7 },
            width: 2,
            title: 'Risk propagation in AML/KYC as production graph inference',
            font: { size: 10, color: '#1E8449', strokeWidth: 2, strokeColor: '#ffffff' }
        }
    ]
};