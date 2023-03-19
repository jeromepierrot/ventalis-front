# Ventalis Website (Front-end)

## Présentation

## Pré-requis
- npm et yarn pour installer Angular CLI
- Angular CLI v15.2.0+ pour compiler le projet Front-end

Un IDE comme VS Code ou IntelliJ WebStorm(Front), IdeaJ Idea (Back) et Android Studio (Android)

### Installation de Angular CLI (pour le Front-end)
1. Installation de NPM 9.5.0 (via NodeJS 18.15)

https://nodejs.org/en/download/

Vérification de l'installation :

npm -v

2. Une fois NPM installé, installer Yarn v1.22.19

npm install --global yarn

Vérification de l'installation :

yarn -v

ng version


3. Installer Angular CLI

Si Angular CLI v15.2.x n'est pas déjà installé :

npm install -g @angular/cli

Mettre à jour Angular :

ng update @angular/cli @angular@core

puis 

yarn global add @angular/cli

Si Angular CLI est déjà installé et à jour mais utilise NPM comme Package Manager, entrer la commande ci-dessous pour basculer sur Yarn :

ng config -g cli.packageManager yarn

Désormais tout nouveau projet sera créé avec des packages téléchargés et/ou mis à jour avec Yarn.
Avant d'utiliser Yarn, il faudrait nettoyer (= supprimer) le dossier local "node_modules" de l'application en question (cf. §6 pour revenir à NPM).

4. Téléchargement des dépendances :

allez à la racine du dossier du projet (ventalis-front) puis taper la commande suivante :

yarn install

Cela installera les packages nécessaire à la compilationn du projet.

5. Lancement du projet :

- lancement du serveur Front-end et du navigateur sur la page d'accueil du site, en local:

ng serve -o

Le message "Compilation successful" devrait apparaitre, confirmant que le serveur est lancé et le site opérationnel.
La page d'accueil du site s'affichera à l'adresse http://localhost:4200

- Pour utiliser un autre port (ex : 5200) :
- ng serve --port 5200 -o

Une fois le serveur Front lancé, il faut le laisser tourner.

Utiliser le raccourci ctrl+C, pour stopper le serveur (ce qui rendra le site inopérant, bien évidemment).

6. (facultatif) Pour revenir à NPM :
Avant d'utiliser ou de mettre à jour des packages d'anciens projets Angular CLE, managés avec NPM, il faut nettoyer le dossier sinon, il faut revenir à NPM :

ng config -g cli.packageManager npm

( ng set --global packageManager=npm , pour Angular 5 et moins)

### Installation de Spring boot (pour le Back-end)
1. allez sur https://mvnrepository.com 
