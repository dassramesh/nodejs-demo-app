# node-app

Node.js + Express app with CI/CD using GitHub Actions:
- Run tests when PRs are raised to main or when changes are pushed to main
- Build & push Docker image to Docker Hub on push to main

## Local dev
```bash
npm ci
npm test
npm start