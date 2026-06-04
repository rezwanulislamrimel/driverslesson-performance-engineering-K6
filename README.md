# DriversLesson Performance Engineering using K6

## Overview

This project demonstrates performance engineering practices using K6 to evaluate the performance, reliability, and scalability of the DriversLesson website under different load conditions.

The objective was to assess application behavior during normal, peak, and sustained traffic scenarios using industry-standard performance testing methodologies.

---

## Project Objectives

- Measure application response time
- Evaluate system stability under load
- Analyze scalability characteristics
- Identify potential bottlenecks
- Validate performance against defined SLA targets
- Observe application behavior during sudden traffic spikes

---

## Technology Stack

- K6
- JavaScript
- Git
- GitHub

---

## Test Scenarios

### Smoke Test
Validates application availability and basic functionality under minimal load.

### Load Test
Simulates expected user traffic to evaluate application performance under normal operating conditions.

### Stress Test
Gradually increases virtual users to determine how the application behaves under heavy traffic.

### Spike Test
Introduces sudden traffic surges to observe application recovery and resilience.

### Soak Test
Executes long-duration testing to assess stability over time.

---

## Service Level Objectives (SLO)

| Metric | Target |
|----------|----------|
| P95 Response Time | < 1500 ms |
| Error Rate | < 1% |
| Availability | > 99% |

---

## Project Structure

```text
driverslesson-performance-engineering/
│
├── scenarios/
│   ├── homepage.js
│   ├── contact.js
│   └── user-journey.js
│
├── tests/
│   ├── load.js
│   ├── stress.js
│   ├── spike.js
│   └── soak.js
│
├── utils/
│   └── thresholds.js
│
├── screenshots/
│
├── README.md
└── .gitignore
```

---

## User Journey

The following user flow was used during testing:

```text
Homepage
   ↓
Contact Page
   ↓
Return to Homepage
```

This approach simulates a more realistic browsing behavior compared to repeatedly hitting a single endpoint.

---

## Test Execution

### Load Test

```bash
k6 run tests/load.js
```

### Stress Test

```bash
k6 run tests/stress.js
```

### Spike Test

```bash
k6 run tests/spike.js
```

### Soak Test

```bash
k6 run tests/soak.js
```

---

## Performance Test Results Summary

| Test Type | Virtual Users | Duration | P95 Response Time | Error Rate |
|------------|------------|------------|------------|------------|
| Load Test | 100 | 5 Minutes | 378 ms | 93.43% |
| Stress Test | Up to 400 | 10 Minutes | 434 ms | 95.42% |
| Spike Test | Up to 500 | 2.5 Minutes | 376 ms | 96.35% |
| Soak Test | 50 | 30 Minutes | 423 ms | 86.33% |

---

## Key Findings

### Smoke Testing

- Application responded successfully under low concurrency.
- All requests returned HTTP 200 responses.
- No failures were observed during baseline validation.

### Load Testing

- Response times remained relatively stable.
- Significant failed requests were observed under higher traffic levels.

### Stress Testing

- Failure rates increased substantially as virtual users increased.
- Timeout errors were observed during high-concurrency execution.

### Spike Testing

- The application experienced high failure rates during sudden traffic surges.
- Additional capacity planning may be required for handling abrupt increases in traffic.

### Soak Testing

- The application remained responsive throughout extended execution.
- Failed requests persisted under sustained load conditions.

---

## Analysis

During low-concurrency testing, the application performed successfully and consistently returned HTTP 200 responses.

When higher traffic volumes were introduced, a significant percentage of failed requests were observed. Because the target application is a public website, these failures may be influenced by:

- Rate limiting mechanisms
- Traffic filtering
- Security protections
- Infrastructure limitations
- Application bottlenecks

Root-cause confirmation would require access to:

- Application logs
- Server metrics
- Infrastructure monitoring
- APM tools

---

## Limitations

This assessment was performed against a publicly accessible production website.

Since server-side metrics were not available, findings are based solely on client-side performance observations collected through K6.

---

## Screenshots

### Load Test Report

![Load Test](screenshots/load-test.png)

### Stress Test Report

![Stress Test](screenshots/stress-test.png)

### Spike Test Report

![Spike Test](screenshots/spike-test.png)

### Soak Test Report

![Soak Test](screenshots/soak-test.png)

---

## Skills Demonstrated

- Performance Testing
- Load Testing
- Stress Testing
- Spike Testing
- Soak Testing
- SLA Validation
- Test Analysis
- K6 Framework Development
- Performance Engineering
- Technical Documentation

---

## Author

**Rezwanul Rimel**

SQA Engineer 

Performance Testing | API Testing | Manual Testing | Test Automation
