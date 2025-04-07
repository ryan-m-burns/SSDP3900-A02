# Your Project Name

[![Deploy to GitHub Pages](https://github.com/ryan-m-burns/SSDP3900-A02/actions/workflows/deploy.yml/badge.svg)](https://github.com/ryan-m-burns/SSDP3900-A02/actions/workflows/deploy.yml)

## Project Description

A brief description of your project - what it does, why it was created, and any other relevant information.

## Live Demo

[View the live demo](https://ryan-m-burns.github.io/SSDP3900-A02)

## Technology Stack

- React
- Vite
- Docker
- GitHub Actions
- GitHub Pages

## Local Development

### Prerequisites

- Docker and Docker Compose
- Git

### Setup and Run

1. Clone the repository

```bash
git clone https://github.com/ryan-m-burns/SSDP3900-A02.git
cd SSDP3900-A02
```

2. Start the Docker development environment

```bash
docker-compose up
```

3. Access the development server at [http://localhost:5173](http://localhost:5173)

## Environment Variables

The application uses the following environment variables:

- `NODE_ENV` - Set to "development" for local development

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

If you want to deploy manually:

1. Build the application

```bash
npm run build
```

2. Deploy to GitHub Pages

```bash
npm run deploy
```

## GitHub Actions Workflow

The CI/CD pipeline includes the following steps:

1. Checkout code
2. Setup Node.js environment
3. Install dependencies
4. Build the application
5. Deploy to GitHub Pages

## Configuration Details

### GitHub Pages Configuration

- Base path: `/SSDP3900-A02/` (configured in vite.config.js)
- Homepage URL: `https://ryan-m-burns.github.io/SSDP3900-A02`

### Docker Development Configuration

- Development server with hot reload
- Volume mounting for real-time code changes
- Port mapping from container to host
