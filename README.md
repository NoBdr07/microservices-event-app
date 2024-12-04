# Microservices Event Management App

Ce projet est une application de gestion d'événements basée sur une architecture microservices. Elle comprend un frontend Angular, une API Gateway (Spring Cloud Gateway), un serveur Eureka pour la découverte des services, et plusieurs microservices (authentification, gestion des événements). Le projet utilise Angular Material pour l'interface utilisateur et Spring Boot avec MongoDB pour le backend.
Fonctionnalités principales

   ### Frontend Angular :
        Interface utilisateur moderne utilisant Angular Material.
        Connexion via JWT et récupération des événements via API.
        Gestion des utilisateurs et affichage des événements.

   ### Backend en microservices :
        Auth Service : Gestion des utilisateurs (connexion, inscription) et génération de JWT.
        Event Service : Gestion des événements (ajout, récupération, inscription aux événements).
        Eureka Server : Découverte et registre des services.
        API Gateway : Gestion de la sécurité et des requêtes via Spring Cloud Gateway Reactive.

## Structure du projet
### Arborescence

microservices-event-app/
├── api-gateway/
├── auth-service/
├── event-service/
├── eureka-server/
├── front-event-manager/
└── README.md

### Prérequis
Frontend

    Node.js (v16+)
    Angular CLI (v17+)

Backend

    Java 17+
    Maven (v3.8+)
    MongoDB (v5+)

## Instructions de déploiement
1. Cloner le repository

git clone https://github.com/NoBdr07/microservices-event-app.git
cd microservices-event-app

2. Lancer le backend
2.1 Eureka Server

cd eureka-server
mvn spring-boot:run

2.2 API Gateway

cd ../api-gateway
mvn spring-boot:run

2.3 Auth Service

cd ../auth-service
mvn spring-boot:run

2.4 Event Service

cd ../event-service
mvn spring-boot:run

3. Lancer le frontend

cd ../front-event-manager
npm install
ng serve

L'application frontend sera disponible sur http://localhost:4200.
