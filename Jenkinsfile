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
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
        }
        
        stage('build') {
            steps {
                script {
                    dockerImage = docker.build("arieladalid/test-node")
                }
            }
        }

        // stage('login') {
        //     steps {
        //         sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
        //     }
        // }

        // stage('push') {
        //     steps {
        //         sh "docker push arieladalid/test-node"
        //     }
        // }
    }
}

// post {
//     always {
//         sh "docker logout"
//     }
// }