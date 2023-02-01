pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('docker_user_pass') // 'dockerhub_aa' (token) error -stdin :( 
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
                // error: '--password-stdin not recognized'
                // ------------------------------------------------
                //sh "echo '$DOCKERHUB_CREDENTIALS_PSW' | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"


                // OK :), but security warning: "A secret was passed to "sh" using Groovy String interpolation"
                // ------------------------------------------------
                // withCredentials([usernamePassword(credentialsId: 'docker_user_pass', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                //     echo "${PASS}"
                //     sh "docker login -u ${USER} -p ${PASS}"
                // }


                // ok : )
                sh('docker login -u $DOCKERHUB_CREDENTIALS_USR  -p $DOCKERHUB_CREDENTIALS_PSW')
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

