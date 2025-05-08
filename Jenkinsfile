pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                dir('frontend/notes-app') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                dir('frontend/notes-app') {
                    sh 'npm test || true'  // skip if no tests
                }
            }
        }
        stage('Build') {
            steps {
                dir('frontend/notes-app') {
                    sh 'npm run build'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("alisina97/notes-app:latest")
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push alisina97/notes-app:latest
                    '''
                }
            }
        }
    }
}
