pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub_aa')
    }

    stages {
        stage('build') {
            steps {
                sh "docker build -t arieladalid/test-node ."
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