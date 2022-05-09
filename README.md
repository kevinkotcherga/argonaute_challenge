# README

Pour réaliser ce projet j'ai choisi de partir sur l'environnement d’exécution Node.js et la bibliothèque React. Je l'ai ensuite publié sur la plateforme de déploiement Heroku qui est disponible [ici](https://argonaute-challenge.herokuapp.com/).

## Mise en place

1- Pour démarrer le projet j'ai initialisé le backend avec npm init puis express et je l'ai connecté au système de base de données de mongoDB.

2- J'ai créer le model argonaute en lui donnant les restrictions d'être de type 'string', unique, en minuscule et d'avoir obligatoirement un nom pour être valide. Le model est lié à mongoDB.

3- J'ai créer les routes pour récupérés tous les argonautes (get all) et pour créer un argonaute (create). J'ai ensuite connecté mes routes à mon index et j'ai testé mon API avec postman. 

4- Une fois l'API fonctionnel j'ai créer le client avec npx create-react-app --template redux, j'ai utilisé redux pour m'entrainner à l'utiliser. 

5- J'ai créer mes composants, structuré ma page et récupéré la data avec axios et redux.

6- J'ai lié le formulaire à la fonction post d'axios pour envoyé les noms des argonautes inscrits dans le formulaire à la base de donnée.

7- J'ai testé mes composants avec Jest.

8- J'ai configuré l'instalation de l'application pour heroku dans index.js.

9- J'ai modifier les liens localhost vers des liens heroku pour faire fonctionner l'application en ligne.

## Utilisation 
Un pluggin "Cross-origin resource sharing (CORS)" est nécessaire.
Modifier les liens heroku vers des liens localhost dans le dossier client.
```
git clone git@github.com:kevinkotcherga/argonaute_challenge.git
cd argonaute_challenge
npm i
npm start
cd client
npm i
npm start
```

## Amélioration

Je dois utiliser typescript pour m'assurer d'envoyer les bonnes donées à la base de donnée.
