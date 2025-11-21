# React + Express (Single Dockerfile) — Example

This example contains:
- `frontend/` — React app (create-react-app-like)
- `backend/` — Express server that serves API and static frontend files
- Single `Dockerfile` that builds the frontend and packages it with the backend
- `Jenkinsfile` — simple pipeline to build and run the Docker image

## Build locally

```bash
# from project root
docker build -t react-node-single-docker .
docker run -d -p 3000:3000 react-node-single-docker
# open http://localhost:3000
```

## Jenkins

Place the `Jenkinsfile` in the repo root and create a pipeline job pointing to this repo. Configure Docker host access accordingly.
