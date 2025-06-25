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
        stage("Docker login and cache") {
            when {
                branch 'main'
            }
            steps {
                withCredentials([usernamePassword(
                    credentialsId: DOCKERHUB_CREDS,
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    script {
                        echo "Logging in to Docker Hub..."
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'

                        echo "Pulling cached images (if exist)..."
                        sh "docker pull ${IMAGE_TAG} || true"
                        sh "docker pull ${LATEST_TAG} || true"
                    }
                }
            }
        }

        stage("Build docker image") {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo "Building Docker image with cache..."
                    sh '''
                        export DOCKER_BUILDKIT=1
                        docker build \
                            --cache-from=${IMAGE_TAG} \
                            --cache-from=${LATEST_TAG} \
                            --build-arg BUILDKIT_INLINE_CACHE=1 \
                            -t ${IMAGE_TAG} -t ${LATEST_TAG} .
                    '''
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
                }
            }
        }
    }
}
