# Formulaire Dynamique API

Ce projet implémente un formulaire dynamique dans une landing page, connecté à une API pour envoyer les données récoltées.

![Démonstration du formulaire](public/demo.gif)

## Fonctionnalités

- Formulaire dynamique adaptatif
- Intégration avec une API pour l'envoi des données
- Interface utilisateur réactive et moderne
- Utilisation de l'API Geo.gouv.fr pour la validation des adresses
- Intégration avec Zapier pour le traitement des données

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez ce dépôt :
   ```
   git clone https://github.com/votre-nom/formulaire-dynamique-api.git
   ```

2. Naviguez dans le dossier du projet :
   ```
   cd formulaire-dynamique-api
   ```

3. Installez les dépendances :
   ```
   npm install
   ```
   ou si vous utilisez yarn :
   ```
   yarn install
   ```

4. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
   ```
   VITE_LEAD_EMAIL="votremailt@test.com"
   VITE_API_GEOGOV="https://geo.api.gouv.fr"
   VITE_API_ZAPIER="https://hooks.zapier.com"
   ```

## Lancement du projet

1. Pour démarrer le serveur de développement :
   ```
   npm run dev
   ```
   ou avec yarn :
   ```
   yarn dev
   ```

2. Ouvrez votre navigateur et accédez à `http://localhost:3000`

## Utilisation

1. Remplissez les champs du formulaire sur la landing page.
2. L'API Geo.gouv.fr sera utilisée pour valider et compléter les adresses saisies.
3. Soumettez le formulaire pour envoyer les données via l'intégration Zapier.
4. Les leads seront envoyés à l'adresse email configurée dans `VITE_LEAD_EMAIL`.

## Configuration des APIs

- L'API Geo.gouv.fr est utilisée pour la validation et l'autocomplétion des adresses françaises.
- L'intégration Zapier permet de traiter et de rediriger les données du formulaire selon vos besoins spécifiques.


## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.