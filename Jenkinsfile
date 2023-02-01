pipeline {
  agent {
       docker {
            image 'papesambandour/docker-node-alpine-16-git:1.1'
            args '-u root:root'
           }
    }
    stages {
        stage('Install caprover CLI') {
          steps {
             echo "START INSTALL CAPROVER CLI"
             sh 'npm install -g caprover'
             sh 'node --version'
             echo "END INSTALL CAPROVER CLI"
             
          }
        }
       stage('Run test') {
          steps {
              echo "skip test"
          }
        }
        stage('Deployment') {
            steps {
                echo 'Start deploy'
                // sh 'caprover deploy -h ${CAPTAIN_URL} -p ${PASSWORD_CAPROVER} -b $GIT_BRANCH -a portfolio'
                echo 'END DEPLOY'
            }
        }
    }
     post {
        always {
            echo 'I will always say Hello again!'
            
        }
    }
}