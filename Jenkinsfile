pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "alisina97/notesapp:latest"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/alisina97/NotesApp-MERN'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
    }
}
