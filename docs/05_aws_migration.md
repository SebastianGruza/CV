# AWS Cloud Migration - Lukka (2024-2025)

## 📋 Overview

**Timeframe**: 2024 - obecnie (ongoing)
**Project**: Migracja Proximity algorithm z MaprDB (NoSQL) na AWS cloud-native stack
**Role**: Hands-on implementation engineer
**Status**: Aktywna migracja

---

## 🎯 Business Context

### Why Migrate?

**From**: MaprDB (NoSQL, on-premise/hybrid)
**To**: AWS Cloud-native stack

**Reasons**:
1. **Modernization**: Cloud-native architecture for better scalability
2. **Cost optimization**: Pay-as-you-go vs. infrastructure maintenance
3. **Scalability**: Serverless capabilities (DynamoDB)
4. **Data lakehouse**: Modern analytics architecture (Iceberg)
5. **Industry trend**: Blockchain analytics firms moving to cloud

---

## 🛠️ AWS Stack

### Components:

#### 1. **Amazon S3 (Simple Storage Service)**
**Role**: Object storage for blockchain data
- **Use case**: Raw blockchain transaction data, historical snapshots
- **Benefits**: Scalable, durable (99.999999999% durability), cost-effective
- **Integration**: Source for data processing pipelines

#### 2. **Amazon DynamoDB**
**Role**: Serverless NoSQL database
- **Use case**: Real-time queries, risk scores, address metadata
- **Benefits**: Fully managed, auto-scaling, low-latency reads/writes
- **Migration challenge**: Schema redesign from MaprDB to DynamoDB
- **Key features**:
  - Partition key/sort key design
  - Global Secondary Indexes (GSI)
  - On-demand vs. provisioned capacity

#### 3. **Apache Iceberg**
**Role**: Table format for data lakehouse architecture
- **Use case**: Structured analytics on S3-stored data
- **Benefits**: ACID transactions, schema evolution, time travel queries
- **Integration**: Iceberg + S3 = data lakehouse (like Delta Lake, Hudi)
- **Why Iceberg**: Open format, vendor-neutral, works with Spark/Presto/Athena

---

## 🔄 Migration Challenges

### Technical Challenges:

#### 1. **Data Model Redesign**
**Challenge**: MaprDB vs. DynamoDB - różne paradygmaty
- **MaprDB**: Document-oriented, flexible schema
- **DynamoDB**: Key-value/wide-column, strict partition key design
- **Solution**: Redesign data access patterns first, then schema

#### 2. **Query Pattern Optimization**
**Challenge**: DynamoDB wymaga przemyślanej struktury kluczy
- **MaprDB**: Secondary indexes relatywnie "darmowe"
- **DynamoDB**: Global Secondary Indexes (GSI) = dodatkowe koszty + latency
- **Solution**: Analyze query patterns, optimize partition keys, minimize GSIs

#### 3. **Data Pipeline Refactoring**
**Challenge**: Integration z S3 + Iceberg + DynamoDB
- **Old**: MaprDB-centric pipelines
- **New**: S3 jako źródło → processing → DynamoDB + Iceberg
- **Solution**: Redesign ETL pipelines, leverage AWS Lambda/Glue/EMR

#### 4. **Consistency Model**
**Challenge**: MaprDB vs. DynamoDB consistency guarantees
- **MaprDB**: Strong consistency (default)
- **DynamoDB**: Eventually consistent reads (default), strong consistency opt-in
- **Solution**: Identify critical paths requiring strong consistency

#### 5. **Cost Optimization**
**Challenge**: DynamoDB pricing model (read/write capacity units)
- **MaprDB**: Fixed infrastructure cost
- **DynamoDB**: Variable cost based on throughput
- **Solution**: Analyze access patterns, use on-demand vs. provisioned capacity

---

## 💡 Technical Learnings

### AWS-Specific Skills Developed:

**1. DynamoDB Design Patterns**:
- Single-table design vs. multi-table
- Composite keys (partition + sort key)
- GSI design for query flexibility
- Hot partition avoidance

**2. S3 Optimization**:
- Object lifecycle policies
- Partitioning strategy for query performance
- Integration with AWS Glue Catalog

**3. Iceberg Table Management**:
- Schema evolution (add/drop columns without rewrite)
- Time travel queries (query historical snapshots)
- Partitioning strategies for performance
- Integration with Spark/Athena

**4. AWS Ecosystem Integration**:
- AWS Glue for ETL
- AWS Lambda for serverless processing
- AWS Athena for ad-hoc queries on Iceberg tables
- IAM roles and policies for secure access

---

## 📊 Migration Strategy

### Phased Approach:

**Phase 1: Dual-Write**
- Write to both MaprDB (existing) and DynamoDB (new)
- Validate data consistency
- Build confidence in new system

**Phase 2: Read Migration**
- Gradually shift reads from MaprDB to DynamoDB
- Monitor latency, errors, consistency
- Rollback capability if needed

**Phase 3: Full Cutover**
- All reads/writes on AWS stack
- MaprDB decommissioned
- Cost savings realized

**Phase 4: Optimization**
- Fine-tune DynamoDB capacity
- Optimize S3 partitioning for Iceberg queries
- Implement caching layers if needed

---

## 🎯 Value for CV

### Demonstrates:

**1. Cloud-Native Architecture**:
- Hands-on AWS experience (S3, DynamoDB, Iceberg)
- Modern data engineering patterns (data lakehouse)
- Serverless mindset (DynamoDB, Lambda)

**2. Migration Experience**:
- Real-world migration (not greenfield)
- Handling legacy system constraints
- Phased rollout strategy

**3. Scalability Thinking**:
- From on-premise/hybrid to cloud
- Design for auto-scaling (DynamoDB)
- Cost optimization awareness

**4. Data Engineering**:
- ETL pipeline redesign
- Data modeling (NoSQL → NoSQL but different paradigm)
- Integration of multiple AWS services

**5. Business Acumen**:
- Understands "why" behind migration (cost, scale, modernization)
- Not just tech for tech's sake

---

## 🔗 Connection to Career Narrative

### Reinforces "Database Evolution Expert":

| Timeframe | Database | Purpose | Key Skill |
|-----------|----------|---------|-----------|
| 2016-2019 | Neo4j | Graph-based risk propagation | Graph algorithms, Cypher |
| 2019-2024 | MaprDB | Scalability, NoSQL | NoSQL design, performance tuning |
| 2024-2025 | AWS Cloud | Cloud-native, serverless | Cloud architecture, modern data stack |

**Pattern**: Not just "uses databases" - drives architectural evolution, hands-on migrations, adapts to industry trends.

---

## 🎓 Learning Trajectory

### Shows Continuous Learning:

- **2016**: Neo4j (niche skill)
- **2019**: MaprDB (NoSQL expertise)
- **2024**: AWS (cloud-native, industry standard)
- **2025**: Iceberg (cutting-edge data lakehouse)

**→ Always learning, always evolving, never stagnant despite 9 years in one company**

---

## 💼 How to Position in CV

### For Different Job Types:

**Cloud Engineer / AWS Roles**:
- Lead with: "Hands-on AWS migration (S3, DynamoDB, Iceberg) for blockchain analytics platform"
- Emphasize: DynamoDB design patterns, S3 optimization, Iceberg integration
- Highlight: Phased migration strategy, dual-write approach

**Backend / Java Developer**:
- Lead with: "Migrating enterprise Java application to AWS cloud-native stack"
- Emphasize: Spring Framework + AWS SDK, serverless integration
- Highlight: Hands-on migration, not just new project

**Data Engineer**:
- Lead with: "Data lakehouse implementation (Iceberg + S3) for blockchain analytics"
- Emphasize: ETL pipeline redesign, data modeling, S3 partitioning
- Highlight: NoSQL → NoSQL migration (MaprDB → DynamoDB)

**FinTech / Blockchain**:
- Lead with: "Scaling blockchain analytics platform via AWS cloud migration"
- Emphasize: AML/compliance data on cloud, performance + cost optimization
- Highlight: Industry trend awareness (blockchain + cloud)

**General Software Engineer**:
- Lead with: "Driving technology modernization: on-premise NoSQL → AWS cloud-native"
- Emphasize: Hands-on migration, architectural decisions, modern stack (S3, DynamoDB, Iceberg)
- Highlight: 9 years, 3 major migrations = adaptability + depth

---

## 📝 One-Liner for CV

**Option 1 (Cloud focus)**:
> "Currently migrating blockchain analytics platform from MaprDB to AWS cloud stack (S3, DynamoDB, Iceberg) - hands-on implementation of data lakehouse architecture"

**Option 2 (Migration focus)**:
> "Leading hands-on migration from on-premise NoSQL (MaprDB) to AWS cloud-native stack (DynamoDB, S3, Iceberg) for scalable blockchain analytics"

**Option 3 (Evolution focus)**:
> "9-year technology evolution: Neo4j → MaprDB → AWS Cloud (S3, DynamoDB, Iceberg) - continuous hands-on migration and architectural modernization"

**Option 4 (Data Engineering focus)**:
> "Implementing data lakehouse architecture (Apache Iceberg + S3) while migrating real-time queries to DynamoDB for blockchain AML platform"

---

## 🚀 Talking Points for Interviews

### Technical Deep Dive:

**Q: "Why DynamoDB vs. other NoSQL databases?"**
A: DynamoDB offers serverless scalability (no infrastructure management), integrated AWS ecosystem, and proven reliability. For our blockchain analytics use case, the auto-scaling and low-latency reads were critical. Trade-off: Query flexibility vs. MaprDB, but we optimized via thoughtful key design.

**Q: "What's the biggest challenge in the migration?"**
A: Data model redesign. MaprDB's flexible schema allowed ad-hoc queries easily. DynamoDB requires upfront access pattern analysis and partition key design. We had to rethink our query patterns and redesign schemas accordingly. It's a shift from "query anything" to "query what you've designed for."

**Q: "Why Iceberg over Delta Lake or Hudi?"**
A: Iceberg is vendor-neutral (open format), works with multiple query engines (Spark, Athena, Presto), and has strong community support. For our use case (analytics on S3-stored blockchain data), Iceberg's schema evolution and time travel features were compelling.

**Q: "How do you ensure zero downtime during migration?"**
A: Phased approach: (1) Dual-write to both systems, (2) Gradual read migration with monitoring, (3) Full cutover only after validation. Rollback capability at every phase. This minimizes risk and ensures business continuity.

**Q: "What about costs?"**
A: DynamoDB can be expensive if not designed properly. We analyzed access patterns, chose on-demand pricing for unpredictable workloads, and provisioned capacity for steady-state. S3 is cost-effective for storage. Overall, cloud TCO is lower than on-premise infrastructure maintenance.

---

## 📊 Quantifiable Metrics (To Be Collected)

### Potential Metrics:

- [ ] **Data volume migrated**: TB of blockchain data moved to S3
- [ ] **Query latency improvement**: DynamoDB vs. MaprDB (e.g., "30% faster reads")
- [ ] **Cost savings**: % reduction in infrastructure costs post-migration
- [ ] **Downtime**: Zero downtime migration (if achieved)
- [ ] **Time to migrate**: X months for full cutover
- [ ] **Team size**: Solo? Part of X-person team?

---

## 🎯 Strategic Value

### Why This Matters:

1. **Current Skillset**: AWS is industry standard - shows you're relevant in 2025
2. **Hands-On Experience**: Not just "used AWS" - drove migration
3. **Modern Stack**: S3 + DynamoDB + Iceberg = cutting-edge data engineering
4. **Adaptability**: 3rd major technology shift in 9 years
5. **Cloud-Native**: Future-proof skillset (cloud adoption growing)

### Best Used For:

- ✅ AWS/Cloud roles (obvious fit)
- ✅ Backend roles (modern Java + AWS SDK)
- ✅ Data Engineering (Iceberg, S3, ETL)
- ✅ FinTech/Blockchain (domain + cloud)
- ✅ Migration projects (proven experience)
- ⚠️ Roles requiring deep on-premise expertise (less relevant)

---

## 🎬 Summary: AWS Migration as CV Asset

**Key Takeaway**: You're not a "legacy Neo4j developer from 2016." You're a **continuously evolving engineer** who's driven 3 major technology migrations in 9 years, currently working with **cutting-edge cloud-native stack** (S3, DynamoDB, Iceberg).

**This is GOLD for modern tech companies looking for cloud-savvy engineers with migration experience.**
