pipeline {
    agent {
        label 'vps-agent1'
    }

    environment {
        GIT_COMMIT_SHORT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
        DOCKER_HUB_USER = "m1kky8"
        DOCKER_REPO = "nix-portfolio"
        DOCKERHUB_CREDS = "580b959d-d40a-422f-a3d7-cf11b2ec7a4c"
        IMAGE_TAG = "${DOCKER_HUB_USER}/${DOCKER_REPO}:${GIT_COMMIT_SHORT}"
        LATEST_TAG = "${DOCKER_HUB_USER}/${DOCKER_REPO}:latest"
    }

    stages {
        stage("Build docker image") {
            when {
                branch 'main'
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: env.DOCKERHUB_CREDS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                            echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                            echo "Building Docker image..."
                            docker build -t ${IMAGE_TAG} -t ${LATEST_TAG} . --no-cache
                        '''
                    }
                }
            }
        }

        stage("Push to registry") {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo "Pushing images to Docker Hub..."
                    sh "docker push ${IMAGE_TAG}"
                    sh "docker push ${LATEST_TAG}"
                    sh "docker compose -f /opt/nikola/docker-compose.yml pull"
                    sh "docker compose -f /opt/nikola/docker-compose.yml up -d --force-recreate"
                }
            }
        }
    }
}
