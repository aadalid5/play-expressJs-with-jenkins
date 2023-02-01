pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub_aa')
    }

    stages {
        stage('Initialize'){
            steps{
                script{
                    def dockerHome = tool 'mydocker'
                    echo "${dockerHome}"
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
        }

        stage('build') {
            steps {
                script {
                    sh "docker --version"
                    dockerImage = docker.build("arieladalid/test-node")
                }
            }
        }

        stage('login') {
            steps {
                //sh "echo '$DOCKERHUB_CREDENTIALS_PSW' | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"

                withCredentials([usernamePassword(credentialsId: 'docker_user_pass', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    echo "${PASS}"
                    sh "docker login -u ${USER} -p ${PASS}"
                }
            }
        }

        stage('push') {
            steps {
                sh "docker push arieladalid/test-node"
            }
        }
    }

    post {
        always {
                sh "docker logout"
            }
    }
}

