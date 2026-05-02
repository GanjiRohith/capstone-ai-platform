# Capstone AI Platform

This repository contains a modular AI platform with backend services, data pipelines, infrastructure scripts, and experiment notebooks.

## Structure

- `backend/` - application source, API routes, models, services, tests
- `data/` - raw, processed, and curated datasets
- `infra/` - cloud deployment scripts and configuration
- `notebooks/` - experiments and analysis notebooks
- `docker/` - container definition
- `.github/workflows/` - CI/CD workflows

## Quick start

1. Create a Python environment
2. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Run the backend:
   ```bash
   uvicorn app.main:app --reload --app-dir backend/app
   ```
