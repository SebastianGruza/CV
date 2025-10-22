# TspSolver - GPU-Accelerated Traveling Salesman Problem Solver

## 📋 Overview

**GitHub**: https://github.com/SebastianGruza/TspSolver (PUBLIC REPO!)
**Status**: Completed & Production-ready
**Achievement**: Solves TSP instances with near-optimal results (often 0.0% deviation from known optimal solutions)

---

## 🎯 Problem Statement

**Classic TSP Challenge**:
The Traveling Salesman Problem is NP-hard - finding optimal solutions for large instances (1000+ cities) is computationally prohibitive.

**Innovative Solution**:
GPU-accelerated Genetic Algorithm with advanced optimization techniques:
- **GPU Parallelization**: Aparapi framework (Java → GPU kernels)
- **Advanced GA Operators**: Multiple mutation/crossover strategies
- **Novel Population Management**: Colony-based evolution with adaptive merging
- **Tabu Search Integration**: Escape local minima
- **Real-time Visualization**: Spring Boot web interface

---

## 🛠️ Tech Stack

### Core Technologies
- **Language**: Java
- **Framework**: Spring Framework (Spring Boot)
- **GPU Acceleration**: Aparapi (Java → OpenCL/GPU)
- **Algorithms**: Genetic Algorithms, Tabu Search, 2-Opt, 3-Opt heuristics
- **Visualization**: Real-time web UI (http://127.0.0.1:8080)

### Architecture Highlights
- **Custom GPU Kernel**: TspGAKernel - GA operations directly on GPU
- **Configuration-Driven**: application.properties for tuning
- **Scalable**: Handles 1 to 10,000+ cities

---

## 🚀 Key Innovations

### 1. GPU Acceleration (Aparapi)
**Why it matters**:
- **Massive Parallelism**: 512+ GPU threads vs. CPU threads
- **Performance**: ~10-100x faster than CPU-only implementations
- **Custom Kernel**: Direct GPU programming in Java (rare skill!)

**Implementation**:
```java
// Custom pseudo-random number generator (XORShift) for GPU
// Thread-local storage to avoid shared state
// Preallocated data structures (no dynamic allocation on GPU)
```

### 2. Advanced Genetic Operators

**7 Different Mutation Strategies**:
1. **Segment Relocation** - moves route segments
2. **Three Vertices Relocation** - relocates 3 cities simultaneously
3. **Two Vertices Relocation** - relocates 2 cities
4. **Single Vertex Relocation** - moves 1 city
5. **Vertex Swap** - swaps two cities
6. **2-Opt Heuristic** - reverses segments (eliminates crossings)
7. **3-Opt Heuristic** - reconnects 3 segments optimally

**Adaptive Selection**: Mutation strategy chosen dynamically based on problem size and population state

### 3. Colony-Based Evolution

**Novel Approach**:
- Population divided into multiple **colonies** (configurable via `tsp.colonyMultiplier`)
- Each colony evolves **independently** → diversity preservation
- **Adaptive Colony Merging** at predefined time points (e.g., 40%, 65%, 82%, 95% of total time)
  - Shares genetic material between colonies
  - Prevents premature convergence
  - Injects diversity at critical moments

**Why it works**:
- Balances **exploration** (independent colonies) and **exploitation** (merging best solutions)
- Similar to island models in parallel GA, but optimized for GPU

### 4. Tabu Search Integration

**Mechanism**:
- **Tabu List**: Binary Search Tree (BST) on GPU
- Penalizes recently explored paths
- Forces algorithm to escape local minima
- GPU-optimized BST implementation (non-trivial!)

### 5. Custom PRNG for GPU

**Challenge**: Standard Java Random not GPU-compatible
**Solution**: XORShift-based PRNG
- Thread-safe (each GPU thread has own state)
- Fast and statistically robust
- Prevents correlation between threads

---

## 📊 Results & Performance

### Benchmarks (TSP_LIB Standard Problems)

| Problem | Cities | Optimal | Achieved | Deviation | Time (s) | Notes |
|---------|--------|---------|----------|-----------|----------|-------|
| burma14 | 14 | 3323 | 3323 | **0.0000%** | 5 | Perfect |
| berlin52 | 52 | 7542 | 7542 | **0.0000%** | 9 | Perfect |
| kroA100 | 100 | 21282 | 21282 | **0.0000%** | 21 | Perfect |
| kroE100 | 100 | 22068 | 22068 | **0.0000%** | 21 | Perfect |
| ch150 | 150 | 6528 | 6528 | **0.0000%** | 38 | Perfect |
| kroA200 | 200 | 29368 | 29368 | **0.0000%** | 61 | Perfect |
| pr264 | 264 | 49135 | 49135 | **0.0000%** | 95 | Perfect |
| a280 | 280 | 2579 | 2579 | **0.0000%** | 105 | Perfect |
| fl417 | 417 | 11861 | 11861 | **0.0000%** | 201 | Perfect |
| p654 | 654 | 34643 | 34643 | **0.0000%** | 416 | Perfect |
| pr1002 | 1002 | 259045 | 262117 | 1.19% | 817 | Excellent |
| d1655 | 1655 | 62128 | 62522 | 0.63% | 1781 | Excellent |
| fl3795 | 3795 | 28772 | 29055 | 0.98% | 6233 | Great |
| rl5934 | 5934 | 556045 | 568102 | 2.17% | 12034 | Very Good |
| **gr9882** | **9882** | **300899** | **311626** | **3.57%** | **25172** | **Huge instance!** |

### Key Observations:

1. **Small-Medium Instances (< 300 cities)**:
   - **50+ instances with 0.0% deviation** (perfect optimal solutions!)
   - Consistent performance across diverse problem types

2. **Large Instances (300-1000 cities)**:
   - Typically < 2% deviation from optimal
   - Still highly competitive

3. **Very Large Instances (1000-10000 cities)**:
   - 2-4% deviation (excellent for NP-hard problem!)
   - Solved in reasonable time (hours, not days/weeks)

4. **Scalability**:
   - Handles **9882 cities** in ~7 hours with only 3.57% deviation
   - Most academic papers struggle with > 1000 cities

---

## 💡 Technical Highlights

### Algorithmic Sophistication

**1. Integrity Checks & Validation**:
- Validates each route (all cities visited exactly once)
- Automatic repair of invalid routes
- Ensures algorithmic correctness

**2. Memory Management**:
- **Preallocated arrays** - no dynamic allocation on GPU
- **Thread-local storage** - no shared state
- Optimized for GPU memory constraints

**3. Greedy Initialization**:
- Initial population seeded with greedy heuristic (`tsp.divideGreedy`)
- Balances random exploration with informed starting points

**4. Historical Best Paths**:
- Maintains history of top solutions
- Prevents loss of high-quality individuals
- Guides evolution process

### Configuration & Tuning

**Exposed via `application.properties`**:
```properties
tsp.gpuThreads=512                    # GPU parallelism level
tsp.colonyMultiplier=4                # Number of independent colonies
tsp.scaleTime=0.01                    # Computation duration scaling
tsp.mergeColonyByTime=true            # Enable adaptive merging
tsp.cutoffsByTime=0.4,0.65,0.82,0.95  # Merge time points
```

**Why it matters**:
- Shows **systems thinking** (not just algorithm implementation)
- Production-ready (configurable, not hardcoded)
- Enables experimentation and tuning

---

## 🎓 Academic & Professional Value

### Demonstrates Expertise In:

**1. Algorithm Design**:
- Deep understanding of Genetic Algorithms
- Knowledge of TSP-specific heuristics (2-Opt, 3-Opt)
- Hybrid approaches (GA + Tabu Search)

**2. Parallel Computing**:
- GPU programming (Aparapi/OpenCL)
- Thread safety and synchronization
- Performance optimization for massively parallel systems

**3. Software Engineering**:
- Spring Framework integration
- Real-time web visualization
- Configuration management
- Code modularity (custom kernel, GA operators)

**4. Research Skills**:
- Benchmarked against **TSP_LIB** (standard academic dataset)
- Rigorous testing (100+ problem instances)
- Performance analysis and reporting

**5. Problem-Solving**:
- Tackled NP-hard problem with innovative approach
- Achieved near-optimal results (many 0.0% deviations!)
- Scaled to 10K+ cities (rare in academic implementations)

---

## 🔗 Connection to Professional Experience

### Reinforces Career Narrative:

**Graph Algorithms Expert**:
- **Work**: Proximity algorithm (Neo4j graph traversal)
- **Hobby 1**: TspSolver (graph optimization, TSP)
- **Hobby 2**: ShiftGo (constraint optimization)
- **Pattern**: Expert in **optimization algorithms** across different domains

**GPU/Parallel Computing**:
- **TspSolver**: GPU-accelerated GA with Aparapi
- Shows depth beyond typical web development
- Rare skill: GPU programming in Java ecosystem

**Academic Rigor**:
- **Master's Thesis**: Deep Learning (Computer Vision)
- **TspSolver**: Genetic Algorithms (Optimization)
- **Both**: Research-grade implementation + benchmarking

---

## 🎯 How to Position in CV

### For Different Job Types:

**Algorithms/Optimization Roles**:
- Lead with: "GPU-accelerated TSP solver achieving 0.0% deviation on 50+ benchmark instances"
- Emphasize: Genetic Algorithms, Tabu Search, 2-Opt/3-Opt, colony-based evolution
- Highlight: 9882-city instance solved with 3.57% deviation

**Backend/Java Roles**:
- Lead with: "Spring Boot + Aparapi for GPU-accelerated computations"
- Emphasize: Java expertise, Spring Framework, real-time web visualization
- Highlight: Production-ready configuration management

**Data Engineering/Big Data**:
- Lead with: "Parallel processing for NP-hard problem on GPU"
- Emphasize: Scalability (10K+ cities), memory optimization, performance tuning
- Highlight: BST on GPU, custom PRNG, thread-local storage

**Research/Academic Positions**:
- Lead with: "Research-grade implementation benchmarked against TSP_LIB"
- Emphasize: Novel colony-based approach, adaptive merging, rigorous testing
- Highlight: 100+ benchmark problems, peer-comparable results

**General Software Engineer**:
- Lead with: "Open-source GPU-accelerated optimization solver (Java, Spring, Aparapi)"
- Emphasize: Full-stack (backend + web UI), algorithmic depth, public GitHub
- Highlight: 0.0% deviation on many instances, scales to 10K+ cities

---

## 📈 Quantifiable Achievements

**Metrics to Include in CV**:
- ✅ **50+ instances solved with 0.0% deviation** from known optimal
- ✅ **100+ benchmark problems** from TSP_LIB tested
- ✅ **Scales to 9,882 cities** (largest tested instance)
- ✅ **3.57% deviation on 10K-city problem** (excellent for NP-hard)
- ✅ **Public GitHub repository** (demonstrates open-source contribution)
- ✅ **GPU acceleration** (Aparapi framework, custom kernel)
- ✅ **Real-time visualization** (Spring Boot web interface)

---

## 🚀 Talking Points for Interviews

### Technical Deep Dive:
1. **"Why GPU for TSP?"**
   - GA operations (fitness evaluation, mutation, crossover) are embarrassingly parallel
   - GPU provides 100x+ threads vs CPU
   - Custom kernel maximizes GPU utilization

2. **"What's the hardest part?"**
   - Memory management on GPU (no dynamic allocation, thread-local storage)
   - Balancing exploration vs exploitation (colony merging strategy)
   - PRNG on GPU (ensuring thread safety + statistical quality)

3. **"How did you validate results?"**
   - Benchmarked against TSP_LIB (academic standard dataset)
   - Compared to known optimal solutions
   - 100+ test cases across problem sizes

4. **"What would you improve?"**
   - Experiment with alternative crossover operators
   - Implement adaptive mutation rates (not just adaptive selection)
   - Parallelize across multiple GPUs
   - Add more heuristics (Lin-Kernighan, Christofides)

### Business Value:
- **Real-world applications**: Logistics, routing, supply chain optimization
- **Scalability**: Handles enterprise-scale problems (1000+ locations)
- **Performance**: Near-optimal solutions in reasonable time
- **Open-source**: Available for community use and contributions

---

## 🎓 Educational Value

### Learning Outcomes Demonstrated:
- **Self-directed research**: Not a course project - independent research
- **Interdisciplinary skills**: CS algorithms + parallel computing + software engineering
- **Persistence**: Solving NP-hard problem requires deep understanding and iteration
- **Open-source mindset**: Public repo, well-documented, configurable

---

## 📝 One-Liner for CV

**Option 1 (Technical - Algorithms focus)**:
> "TspSolver: GPU-accelerated Genetic Algorithm for TSP using Aparapi (Java), achieving 0.0% deviation on 50+ benchmark instances and scaling to 10K+ cities"

**Option 2 (Results focus)**:
> "Open-source TSP solver with GPU acceleration (Spring Boot, Aparapi) - solved 100+ benchmark problems with perfect optimal solutions on 50+ instances"

**Option 3 (Innovation focus)**:
> "Novel GPU-accelerated GA with colony-based evolution and Tabu Search integration - handles 10K-city TSP instances with < 4% deviation from optimal"

**Option 4 (Comprehensive)**:
> "GPU-accelerated Traveling Salesman Problem solver (Java, Spring, Aparapi) achieving near-optimal solutions (0.0% deviation on 50+ instances) and scaling to 10K+ cities. Public GitHub: github.com/SebastianGruza/TspSolver"

---

## 🔗 Related Projects & Skills

### Project Synergies:

**TspSolver + ShiftGo + Proximity Algorithm = Optimization Expert**:
- **TspSolver**: Graph optimization (TSP), GPU parallelism
- **ShiftGo**: Constraint optimization (OR-Tools), workforce scheduling
- **Proximity**: Graph algorithms (Neo4j), risk propagation
- **Pattern**: Deep expertise in **optimization algorithms** across domains

**GPU + Parallel Computing**:
- **TspSolver**: Aparapi (Java → GPU)
- Shows advanced CS knowledge beyond typical backend development

**Academic + Industry**:
- **Master's**: Deep Learning (CV)
- **TspSolver**: Genetic Algorithms (Optimization)
- **Proximity**: Production algorithm (blockchain analytics)
- **Bridge**: Research-quality work + industry experience

---

## ⚠️ Potential Interview Questions & Answers

**Q: "Why Aparapi instead of CUDA/OpenCL directly?"**
A: Aparapi allows Java developers to write GPU code without leaving the JVM. Since the project uses Spring Framework, keeping everything in Java simplifies deployment and integration. For more control, I'd consider CUDA, but Aparapi was the right balance for this project.

**Q: "How does colony merging improve results?"**
A: Independent colonies explore different regions of the solution space. Merging at strategic times (40%, 65%, etc.) allows genetic material sharing while preserving diversity early on. This prevents premature convergence while still leveraging best solutions.

**Q: "What's the time complexity?"**
A: Per generation: O(population_size × n²) for fitness evaluation (where n = cities). GPU parallelism reduces wall-clock time by ~100x. Total generations depend on problem size and convergence criteria.

**Q: "Could this scale to 100K cities?"**
A: Memory would be the bottleneck (n² distance matrix). Solutions: sparse matrix representation, chunking, or switching to approximate algorithms (Lin-Kernighan). GPU memory limits would require multi-GPU or distributed approach.

---

## 📚 References & Inspirations

- **TSP_LIB**: Standard benchmark dataset (http://comopt.ifi.uni-heidelberg.de/software/TSPLIB95/)
- **Aparapi**: Java GPU framework (https://github.com/Syncleus/aparapi)
- **GA Operators**: Based on academic literature (2-Opt, 3-Opt, OX crossover)
- **Colony-based evolution**: Inspired by island models in parallel GA

---

## 🎯 Strategic Value for Job Search

### Why This Project Matters:

1. **GitHub Public Repo**: Shows you're comfortable with open-source, transparent about your work
2. **Rigorous Benchmarking**: Not just "it works" - validated against academic standards
3. **Rare Skill Combo**: GPU programming + Java + Spring + Optimization algorithms
4. **Quantifiable Results**: 0.0% deviation, 100+ benchmarks, 10K cities - concrete metrics
5. **Complete Solution**: Not just algorithm - includes web UI, config, validation, logging

### Best Used For:

- ✅ **Algorithmic roles** (optimization, ML, data science)
- ✅ **Backend roles** (Java, Spring, performance optimization)
- ✅ **Research roles** (academic rigor, benchmarking)
- ✅ **Tech lead roles** (system design, architecture decisions)
- ⚠️ **Frontend roles** (less relevant, but shows breadth)

---

## 🎬 Summary: Why TspSolver is a CV Goldmine

1. **Public GitHub** → Verifiable, shows real code quality
2. **100+ Benchmarks** → Rigorous, research-grade validation
3. **50+ Perfect Solutions** → Algorithmic excellence
4. **GPU Acceleration** → Advanced CS knowledge
5. **Spring Framework** → Production-ready engineering
6. **NP-Hard Problem** → Tackles genuinely hard problems
7. **Open-Source** → Community-minded, collaborative

**This is not a hobby project. This is a research-quality, production-ready, open-source contribution that rivals academic papers.**