pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'astro-devops-image'
  }

  tools {
    nodejs 'Node 24'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build Astro site') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker build & run') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE .'
        sh 'docker run -d -p 3000:3000 $DOCKER_IMAGE'
      }
    }
  }
}
