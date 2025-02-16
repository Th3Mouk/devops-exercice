# Jenkins CI Setup Tutorial

This tutorial will guide you through setting up Jenkins in Docker to run the CI pipeline for our React application.

## Prerequisites

- Docker and Docker Compose installed on your machine
- Git installed on your machine
- A copy of this repository on your local machine

## 1. Starting Jenkins

1. Navigate to the jenkins directory:
   ```bash
   cd jenkins
   ```

2. Build and start Jenkins using Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. Get the initial admin password:
   ```bash
   docker-compose exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
   ```

   Or into containers logs

4. Open Jenkins in your browser:
   - Go to http://localhost:8080
   - Enter the initial admin password from step 3

## 2. Initial Jenkins Configuration

1. Install suggested plugins when prompted

2. Create your admin user when prompted:
   - Fill in the required information (username, password, etc.)
   - Click "Save and Continue"

3. Configure Jenkins URL:
   - Keep the default Jenkins URL (http://localhost:8080)
   - Click "Save and Finish"

## 3. Configure NodeJS Tool

1. Go to "Manage Jenkins" > "Tools"

2. Find "NodeJS installations" and click "Add NodeJS"

3. Configure NodeJS:
   - Name: `NodeJS 20`
   - Install automatically: Check
   - Version: Select "NodeJS 20.x"
   - Click "Save"

## 4. Create the Pipeline

1. From the Jenkins dashboard, click "New Item"

2. Enter a name for your pipeline (e.g., "react-counter-app")

3. Select "Pipeline" and click "OK"

4. In the pipeline configuration:
   - Under "Pipeline":
     - Definition: Select "Pipeline script from SCM"
     - SCM: Select "Git"
     - Repository URL: Enter your repository URL
     - Branch Specifier: `*/main` (or `*/master`)
     - Script Path: `Jenkinsfile`
   - Click "Save"

## 5. Running the Pipeline

1. From your pipeline page, click "Build Now"

2. View the build progress:
   - Click on the build number
   - Click "Console Output" to see detailed logs

## Maintenance

### Stopping Jenkins

To stop Jenkins:
```bash
docker-compose down
```

To stop and remove all data:
```bash
docker-compose down -v
```

## Configuration Details

- Jenkins runs in a Docker container with Node.js installed
- Data is persisted using a Docker volume
- The setup includes essential plugins:
  - Git plugin for source control
  - Pipeline plugin for CI/CD workflows
  - NodeJS plugin for Node.js support
