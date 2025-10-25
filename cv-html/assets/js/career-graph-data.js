/**
 * Career Knowledge Graph - Data Definition
 * Nodes and edges representing Sebastian Gruza's career path
 */

const careerGraphData = {
    nodes: [
        // Education (red)
        {
            id: 'graph_theory',
            label: 'Graph\nTheory',
            group: 'education',
            title: 'University course: Graph Theory (2010-2013)',
            level: 1
        },

        // Skills - Database Evolution (blue)
        {
            id: 'neo4j',
            label: 'Neo4j',
            group: 'skill',
            title: 'Neo4j & Cypher: 3+ years production (2016-2019)',
            level: 2,
            size: 28
        },
        {
            id: 'maprdb',
            label: 'MaprDB',
            group: 'skill',
            title: 'MaprDB (NoSQL): 5 years production (2019-2024)',
            level: 2
        },
        {
            id: 'aws',
            label: 'AWS\nCloud',
            group: 'skill',
            title: 'AWS: S3, DynamoDB, Iceberg (2024-present)',
            level: 2
        },

        // Skills - Backend (blue)
        {
            id: 'java',
            label: 'Java',
            group: 'skill',
            title: 'Java: 11+ years commercial experience',
            level: 3,
            size: 26
        },
        {
            id: 'spring',
            label: 'Spring\nFramework',
            group: 'skill',
            title: 'Spring Framework & Spring Boot: Expert level',
            level: 3
        },
        {
            id: 'graph_algo',
            label: 'Graph\nAlgorithms',
            group: 'skill',
            title: 'Custom graph algorithms: Risk propagation, optimization',
            level: 3
        },

        // Projects (green)
        {
            id: 'proximity_v1',
            label: 'Proximity v1\n(Neo4j)',
            group: 'project',
            title: 'Proximity Algorithm v1: Neo4j-based risk propagation (2016-2019)',
            level: 4
        },
        {
            id: 'proximity_v2',
            label: 'Proximity v2\n(MaprDB)',
            group: 'project',
            title: 'Proximity Algorithm v2: Migrated to MaprDB for scale (2019-2024)',
            level: 4
        },
        {
            id: 'proximity_v3',
            label: 'Proximity v3\n(AWS)',
            group: 'project',
            title: 'Proximity Algorithm v3: Cloud-native AWS migration (2024-present)',
            level: 4
        },
        {
            id: 'tspsolver',
            label: 'TspSolver',
            group: 'project',
            title: 'TspSolver: GPU-accelerated TSP solver (GitHub)',
            level: 4
        },

        // Domain (orange)
        {
            id: 'blockchain',
            label: 'Blockchain\nAnalytics',
            group: 'domain',
            title: 'Domain: AML/KYC compliance for Bitcoin & Ethereum',
            level: 5,
            size: 28
        },

        // Target Roles (purple)
        {
            id: 'graph_db_engineer',
            label: 'Graph DB\nEngineer',
            group: 'role',
            title: 'Target Role: Graph Database Engineer (100% match)',
            level: 6,
            size: 28
        },
        {
            id: 'backend_engineer',
            label: 'Backend\nEngineer',
            group: 'role',
            title: 'Target Role: Backend Engineer (95% match)',
            level: 6
        }
    ],

    edges: [
        // Education → Skills
        {
            from: 'graph_theory',
            to: 'neo4j',
            label: 'TAUGHT',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Graph Theory course (2010-2013) provided foundation for Neo4j work',
            font: { size: 11, color: '#2C3E50', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_theory',
            to: 'java',
            label: 'TAUGHT',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'University CS program taught Java fundamentals',
            font: { size: 11, color: '#2C3E50', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // Technology Evolution Chain (red dashed)
        {
            from: 'neo4j',
            to: 'maprdb',
            label: 'EVOLVED_TO (2019)',
            dashes: true,
            color: { color: '#E74C3C' },
            width: 3,
            title: 'Migration from Neo4j to MaprDB in 2019 due to scalability needs for millions of blockchain transactions',
            font: { size: 12, color: '#C0392B', bold: true, strokeWidth: 3, strokeColor: '#ffffff' }
        },
        {
            from: 'maprdb',
            to: 'aws',
            label: 'EVOLVED_TO (2024)',
            dashes: true,
            color: { color: '#E74C3C' },
            width: 3,
            title: 'Migration from MaprDB to AWS Cloud (S3, DynamoDB, Iceberg) in 2024 for cloud-native modernization',
            font: { size: 12, color: '#C0392B', bold: true, strokeWidth: 3, strokeColor: '#ffffff' }
        },

        // Skill Synergies (blue)
        {
            from: 'java',
            to: 'spring',
            label: 'SYNERGY',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Java and Spring Framework work together - 11+ years combined experience',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'neo4j',
            to: 'graph_algo',
            label: 'SYNERGY',
            color: { color: '#3498DB', opacity: 0.7 },
            width: 2,
            title: 'Neo4j expertise combined with graph algorithms knowledge for custom implementations',
            font: { size: 10, color: '#2874A6', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // Skills → Projects
        {
            from: 'neo4j',
            to: 'proximity_v1',
            label: 'USED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Neo4j was the core database for Proximity v1 algorithm (2016-2019)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'maprdb',
            to: 'proximity_v2',
            label: 'USED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'MaprDB powered Proximity v2 after migration for better scalability (2019-2024)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'aws',
            to: 'proximity_v3',
            label: 'USED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'AWS Cloud (S3, DynamoDB, Iceberg) is the foundation for Proximity v3 (2024-present)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'proximity_v1',
            label: 'IMPLEMENTED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Proximity v1 implemented in Java with Spring Framework (2016-2019)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'proximity_v2',
            label: 'IMPLEMENTED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Proximity v2 implemented in Java with Spring Framework (2019-2024)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'proximity_v3',
            label: 'IMPLEMENTED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Proximity v3 implemented in Java with Spring Framework (2024-present)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'tspsolver',
            label: 'IMPLEMENTED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'TspSolver written in Java using Spring Boot and Aparapi for GPU acceleration',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_algo',
            to: 'tspsolver',
            label: 'APPLIED_IN',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Graph algorithms expertise applied in TspSolver (GA, Tabu Search, optimization)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // Projects → Domain
        {
            from: 'proximity_v1',
            to: 'blockchain',
            label: 'ADDRESSES',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Proximity v1 provides AML/KYC risk scoring for blockchain addresses',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_v2',
            to: 'blockchain',
            label: 'ADDRESSES',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Proximity v2 continues blockchain analytics at scale (millions of transactions)',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'proximity_v3',
            to: 'blockchain',
            label: 'ADDRESSES',
            color: { color: '#7F8C8D' },
            width: 2,
            title: 'Proximity v3 delivers cloud-native blockchain analytics solution',
            font: { size: 10, color: '#34495E', strokeWidth: 2, strokeColor: '#ffffff' }
        },

        // Skills → Roles (gold - qualification)
        {
            from: 'neo4j',
            to: 'graph_db_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 3,
            title: 'Neo4j expertise (3+ years production) is primary qualification for Graph DB Engineer role (weight: 1.0)',
            font: { size: 11, color: '#D68910', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'graph_algo',
            to: 'graph_db_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 2,
            title: 'Graph algorithms knowledge strongly qualifies for Graph DB Engineer (weight: 0.9)',
            font: { size: 10, color: '#D68910', strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'java',
            to: 'backend_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 3,
            title: 'Java expertise (11+ years) is primary qualification for Backend Engineer role (weight: 1.0)',
            font: { size: 11, color: '#D68910', bold: true, strokeWidth: 2, strokeColor: '#ffffff' }
        },
        {
            from: 'spring',
            to: 'backend_engineer',
            label: 'QUALIFIES_FOR',
            color: { color: '#F39C12', opacity: 0.8 },
            width: 2,
            title: 'Spring Framework expertise strongly qualifies for Backend Engineer (weight: 0.95)',
            font: { size: 10, color: '#D68910', strokeWidth: 2, strokeColor: '#ffffff' }
        }
    ]
};
