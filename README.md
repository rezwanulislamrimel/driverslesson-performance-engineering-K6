<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,20&height=200&section=header&text=Performance%20Engineering&fontSize=38&fontColor=ffffff&fontAlignY=38&desc=DriversLesson%20%E2%80%A2%20K6%20%7C%20Jenkins%20%7C%20GitHub%20Actions%20%7C%20Docker&descAlignY=58&descSize=16" />

<br/>

![K6](https://img.shields.io/badge/K6-7D64FF?style=for-the-badge&logo=k6&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

<br/>

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Test Scenarios](https://img.shields.io/badge/Test%20Scenarios-5-7D64FF?style=flat-square)
![Max VUs](https://img.shields.io/badge/Max%20VUs-500-blue?style=flat-square)
![P95 Target](https://img.shields.io/badge/P95%20Target-%3C%201500ms-orange?style=flat-square)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Enabled-2088FF?style=flat-square)
![Dockerized](https://img.shields.io/badge/Dockerized-Yes-2496ED?style=flat-square)

</div>

---

## 📌 Overview

This project demonstrates **performance engineering practices using K6** integrated with **Jenkins**, **GitHub Actions**, and **Docker** to evaluate the performance, reliability, and scalability of the **DriversLesson** website under different load conditions.

The objective was to assess application behavior during normal, peak, and sustained traffic scenarios using industry-standard performance testing methodologies with full **CI/CD pipeline automation**.

---

## 🎯 Project Objectives

- 📊 Measure application response time
- 🧱 Evaluate system stability under load
- 📈 Analyze scalability characteristics
- 🔍 Identify potential bottlenecks
- ✅ Validate performance against defined SLA targets
- ⚡ Observe application behavior during sudden traffic spikes
- 🔁 Automate performance tests via CI/CD pipelines
- 🐳 Run containerized tests using Docker

---

## 🛠️ Technology Stack

<div align="center">

| Tool | Purpose |
|------|---------|
| ![K6](https://img.shields.io/badge/K6-7D64FF?style=flat-square&logo=k6&logoColor=white) | Performance test execution |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Test scripting language |
| ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white) | CI/CD pipeline automation |
| ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) | Cloud-based CI/CD workflows |
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | Containerized test execution |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Version control |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | Repository hosting |

</div>

---

## 🧪 Test Scenarios

| Scenario | Description |
|----------|-------------|
| 🟢 **Smoke Test** | Validates availability and basic functionality under minimal load |
| 🔵 **Load Test** | Simulates expected user traffic under normal operating conditions |
| 🟠 **Stress Test** | Gradually increases virtual users to determine behavior under heavy traffic |
| 🔴 **Spike Test** | Introduces sudden traffic surges to observe recovery and resilience |
| 🟣 **Soak Test** | Long-duration testing to assess stability over time |

---

## 🎯 Service Level Objectives (SLO)

<div align="center">

| Metric | Target | Status |
|--------|--------|--------|
| P95 Response Time | `< 1500 ms` | ✅ Met |
| Error Rate | `< 1%` | ⚠️ Observed failures |
| Availability | `> 99%` | ⚠️ Under investigation |

</div>

---

## 📂 Project Structure

```text
driverslesson-performance-engineering/
│
├── 📁 scenarios/
│   ├── homepage.js               # Homepage scenario
│   ├── contact.js                # Contact page scenario
│   └── user-journey.js           # Full user journey flow
│
├── 📁 tests/
│   ├── load.js                   # Load test configuration
│   ├── stress.js                 # Stress test configuration
│   ├── spike.js                  # Spike test configuration
│   └── soak.js                   # Soak test configuration
│
├── 📁 utils/
│   └── thresholds.js             # Shared SLO thresholds
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── k6-performance.yml    # GitHub Actions workflow
│
├── 📁 screenshots/               # Test result screenshots
│
├── 🐳 Dockerfile                 # Docker image for K6
├── 🐳 docker-compose.yml         # Docker Compose setup
├── 📄 Jenkinsfile                # Jenkins pipeline definition
├── 📄 README.md
└── 📄 .gitignore
```

---

## 🗺️ User Journey

The following user flow was simulated during testing to replicate realistic browsing behavior:

```text
┌─────────────┐
│  Homepage   │  ← Entry point
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Contact Page│  ← User interaction
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Homepage   │  ← Return navigation
└─────────────┘
```

---

## 🐳 Docker Setup

### Dockerfile

```dockerfile
FROM grafana/k6:latest

WORKDIR /app

COPY . .

ENTRYPOINT ["k6"]
```

### docker-compose.yml

```yaml
version: "3.8"

services:
  k6:
    image: grafana/k6:latest
    volumes:
      - ./tests:/tests
      - ./scenarios:/scenarios
      - ./utils:/utils
    environment:
      - BASE_URL=https://www.driverslessen.com
    command: run /tests/load.js
```

### Run with Docker

```bash
# Build and run load test
docker-compose run k6 run /tests/load.js

# Run stress test
docker-compose run k6 run /tests/stress.js

# Run spike test
docker-compose run k6 run /tests/spike.js

# Run soak test
docker-compose run k6 run /tests/soak.js
```

---

## 🔁 Jenkins Pipeline

### Jenkinsfile

```groovy
pipeline {
    agent any

    environment {
        BASE_URL = 'https://www.driverslessen.com'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/rezwanulislamrimel/driverslesson-performance-engineering.git'
            }
        }

        stage('Smoke Test') {
            steps {
                sh 'docker run --rm -v $(pwd):/app grafana/k6 run /app/tests/smoke.js'
            }
        }

        stage('Load Test') {
            steps {
                sh 'docker run --rm -v $(pwd):/app grafana/k6 run /app/tests/load.js'
            }
        }

        stage('Stress Test') {
            steps {
                sh 'docker run --rm -v $(pwd):/app grafana/k6 run /app/tests/stress.js'
            }
        }

        stage('Spike Test') {
            steps {
                sh 'docker run --rm -v $(pwd):/app grafana/k6 run /app/tests/spike.js'
            }
        }

        stage('Soak Test') {
            steps {
                sh 'docker run --rm -v $(pwd):/app grafana/k6 run /app/tests/soak.js'
            }
        }

    }

    post {
        always {
            echo 'Performance tests completed.'
        }
        success {
            echo 'All tests passed within SLO thresholds.'
        }
        failure {
            echo 'One or more tests failed. Review the results.'
        }
    }
}
```

### Jenkins Pipeline Stages

```
┌─────────────┐     ┌──────────────┐     ┌───────────────┐
│  Checkout   │────▶│  Smoke Test  │────▶│  Load Test    │
└─────────────┘     └──────────────┘     └───────┬───────┘
                                                  │
                    ┌──────────────┐     ┌────────▼──────┐
                    │  Spike Test  │◀────│  Stress Test  │
                    └──────┬───────┘     └───────────────┘
                           │
                    ┌──────▼───────┐
                    │  Soak Test   │
                    └──────────────┘
```

---

## ⚙️ GitHub Actions Workflow

### `.github/workflows/k6-performance.yml`

```yaml
name: K6 Performance Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 6 * * *'       # Runs daily at 6:00 AM UTC
  workflow_dispatch:            # Manual trigger

jobs:

  smoke-test:
    name: Smoke Test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Smoke Test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/smoke.js

  load-test:
    name: Load Test
    runs-on: ubuntu-latest
    needs: smoke-test
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Load Test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/load.js

  stress-test:
    name: Stress Test
    runs-on: ubuntu-latest
    needs: load-test
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Stress Test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/stress.js

  spike-test:
    name: Spike Test
    runs-on: ubuntu-latest
    needs: stress-test
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Spike Test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/spike.js

  soak-test:
    name: Soak Test
    runs-on: ubuntu-latest
    needs: spike-test
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Soak Test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/soak.js
```

### GitHub Actions Flow

```
Push / PR / Schedule / Manual
           │
           ▼
    ┌─────────────┐
    │ Smoke Test  │
    └──────┬──────┘
           │ ✅ Pass
           ▼
    ┌─────────────┐
    │  Load Test  │
    └──────┬──────┘
           │ ✅ Pass
           ▼
    ┌──────────────┐
    │ Stress Test  │
    └──────┬───────┘
           │ ✅ Pass
           ▼
    ┌─────────────┐
    │  Spike Test │
    └──────┬──────┘
           │ ✅ Pass
           ▼
    ┌─────────────┐
    │  Soak Test  │
    └─────────────┘
```

---

## ▶️ Local Test Execution

<details>
<summary><b>Run Load Test</b></summary>

```bash
k6 run tests/load.js
```
</details>

<details>
<summary><b>Run Stress Test</b></summary>

```bash
k6 run tests/stress.js
```
</details>

<details>
<summary><b>Run Spike Test</b></summary>

```bash
k6 run tests/spike.js
```
</details>

<details>
<summary><b>Run Soak Test</b></summary>

```bash
k6 run tests/soak.js
```
</details>

---

## 📊 Performance Test Results

<div align="center">

| Test Type | Virtual Users | Duration | P95 Response Time | Error Rate |
|-----------|:-------------:|:--------:|:-----------------:|:----------:|
| 🔵 Load Test | 100 | 5 min | `378 ms` | 93.43% |
| 🟠 Stress Test | Up to 400 | 10 min | `434 ms` | 95.42% |
| 🔴 Spike Test | Up to 500 | 2.5 min | `376 ms` | 96.35% |
| 🟣 Soak Test | 50 | 30 min | `423 ms` | 86.33% |

</div>

> **Note:** P95 response times were well within the 1500 ms SLO target. Elevated error rates are attributed to the constraints of testing against a live public website — see [Analysis](#-analysis) for full context.

---

## 🔎 Key Findings

<details>
<summary><b>🟢 Smoke Testing</b></summary>

<br/>

- Application responded successfully under low concurrency
- All requests returned **HTTP 200** responses
- No failures observed during baseline validation

</details>

<details>
<summary><b>🔵 Load Testing</b></summary>

<br/>

- Response times remained relatively stable throughout
- Significant failed requests observed under higher traffic levels

</details>

<details>
<summary><b>🟠 Stress Testing</b></summary>

<br/>

- Failure rates increased substantially as virtual users scaled
- Timeout errors observed during high-concurrency execution

</details>

<details>
<summary><b>🔴 Spike Testing</b></summary>

<br/>

- Application experienced high failure rates during sudden traffic surges
- Additional capacity planning may be required for abrupt traffic increases

</details>

<details>
<summary><b>🟣 Soak Testing</b></summary>

<br/>

- Application remained responsive throughout extended execution
- Failed requests persisted under sustained load conditions

</details>

---

## 🔬 Analysis

During **low-concurrency testing**, the application performed consistently and returned HTTP 200 responses across all requests.

When higher traffic volumes were introduced, a significant percentage of failed requests were observed. Because the target is a **public production website**, these failures may be influenced by:

```
Possible Root Causes
├── Rate limiting mechanisms
├── Traffic filtering / WAF rules
├── Security protections
├── Infrastructure limitations
└── Application-level bottlenecks
```

Root-cause confirmation would require access to:

- 📋 Application logs
- 📡 Server metrics
- 🖥️ Infrastructure monitoring
- 🔧 APM tools (e.g., Grafana, Datadog, New Relic)

---

## ⚠️ Limitations

This assessment was performed against a **publicly accessible production website**.

Since server-side metrics were unavailable, all findings are based solely on **client-side performance observations** collected through K6. Internal infrastructure behavior cannot be confirmed without direct server access.

---

## 🖼️ Screenshots

### Load Test Report
![Load Test](screenshots/load-test.png)

### Stress Test Report
![Stress Test](screenshots/stress-test.png)

### Spike Test Report
![Spike Test](screenshots/spike-test.png)

### Soak Test Report
![Soak Test](screenshots/soak-test.png)

---

## 🏆 Skills Demonstrated

<div align="center">

![Performance Testing](https://img.shields.io/badge/Performance%20Testing-7D64FF?style=flat-square)
![Load Testing](https://img.shields.io/badge/Load%20Testing-0ea5e9?style=flat-square)
![Stress Testing](https://img.shields.io/badge/Stress%20Testing-f97316?style=flat-square)
![Spike Testing](https://img.shields.io/badge/Spike%20Testing-ef4444?style=flat-square)
![Soak Testing](https://img.shields.io/badge/Soak%20Testing-a855f7?style=flat-square)
![SLA Validation](https://img.shields.io/badge/SLA%20Validation-16a34a?style=flat-square)
![K6 Framework](https://img.shields.io/badge/K6%20Framework-7D64FF?style=flat-square)
![Jenkins](https://img.shields.io/badge/Jenkins%20Pipeline-D24939?style=flat-square)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square)
![CI/CD](https://img.shields.io/badge/CI%2FCD%20Automation-181717?style=flat-square)
![Test Analysis](https://img.shields.io/badge/Test%20Analysis-0891b2?style=flat-square)
![Technical Documentation](https://img.shields.io/badge/Technical%20Documentation-6b7280?style=flat-square)

</div>

---

## 👨‍💻 Author

<div align="center">

### Rezwanul Rimel
**SQA Engineer**

*Performance Testing · API Testing · Manual Testing · Test Automation*

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rezwanulislamrimel)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Rezwanulrimel)

</div>

---

<div align="center">



<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,20&height=100&section=footer" />

</div>
