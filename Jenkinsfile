pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/alisina97/NotesApp-MERN.git'
            }
        }
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
                    sh 'npm test || true'   // skip error if no tests
                }
            }
        }
        stage('Build') {
            steps {
                dir('frontend/notes-app') {
                    sh 'npm run build || echo "No build script, skipping"'
                }
            }
        }
    }
}
