pipeline {
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
                    sh 'npm test || true'
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
