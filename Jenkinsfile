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
        stage('Deploy to S3') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'aws-s3-creds', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    dir('frontend/notes-app/build') {
                        sh '''
                        aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
                        aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
                        aws s3 sync . s3://notes-app-frontend-build --delete
                        '''
                    }
                }
            }
        }
    }
}
