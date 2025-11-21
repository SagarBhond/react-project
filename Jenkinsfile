pipeline {
  agent any
  environment {
    IMAGE_NAME = "yourdockerhubuser/react-node-single-docker:latest"
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Build Docker Image') {
      steps {
        script {
          sh 'docker build -t $IMAGE_NAME .'
        }
      }
    }
    stage('Run Container (smoke)') {
      steps {
        script {
          sh 'docker rm -f temp-app || true'
          sh 'docker run -d --name temp-app -p 3000:3000 $IMAGE_NAME'
          sh 'sleep 3'
          sh 'curl -fsS http://localhost:3000 || (docker logs temp-app && exit 1)'
        }
      }
    }
    stage('Push to Registry (optional)') {
      steps {
        echo 'If you want to push to Docker Hub, configure credentials and uncomment the push steps.'
        // withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        //   sh "echo $PASS | docker login -u $USER --password-stdin"
        //   sh "docker push $IMAGE_NAME"
        // }
      }
    }
  }
  post {
    always {
      sh 'docker rm -f temp-app || true'
    }
  }
}
