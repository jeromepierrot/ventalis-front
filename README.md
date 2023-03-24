# Ventalis Website (Front-end)

## Présentation

Ce projet est la partie Front-end des applications Ventalis.
Il fait appel à des bases de données accessibles via un système de micro-services, développé dans un autre projet dédié au Back-End, et que vous pouvez télécharger ici :
https://github.com/jeromepierrot/ventalis-back

Deux autres sources sont en cours de développement, pour la version bureautique (Desktop PWA) et mobile (Android):

_(liens à venir)_

## Pré-requis
- npm et yarn pour installer Angular CLI
- Angular CLI v15.2.0+ pour compiler le projet Front-end
- Un IDE comme **VS Code** ou IntelliJ **WebStorm** est fortement recommandé

## Installation de Angular CLI (Front-end)
### 1. Installation de NPM 9.5.0 (via NodeJS 18.15)

https://nodejs.org/en/download/

Vérification de l'installation :

`npm -v`

Remarque : NPM ne sert qu'à installer Yarn et Angular CLI.
Vous pouvez trouver d'autres méthodes d'installation de Yarn (Chocolatey, Homebrew, Macports, Curl, etc...) selon vos préférences et votre OS :
https://chore-update--yarnpkg.netlify.app/fr/docs/install#windows-tab


### 2. Une fois NPM installé, installer Yarn (v1.22.19)

`npm install --global yarn`

Vérification de l'installation :

`yarn -v` ou `yarn version` (sans '**s**')

### 3. Installer Angular CLI

- Si Angular CLI v15.2.x n'est pas déjà installé :

`npm install -g @angular/cli`
ou
`yarn global add @angular/cli`

- Plus d'info sur Angular:
  - https://angular.io/
  - https://material.angular.io/
  - fichier local [README.md](./README.md)

- Vérification de l'installation :

`ng version`

![angular_CLI.png](res%2Fangular_CLI.png)
- 
- Mettre à jour Angular :

`ng update @angular/cli @angular@core`
`yarn global add @angular/cli`

- Si Angular CLI est déjà installé et à jour, mais utilise NPM comme Package Manager, allez dans le dossier du projet (`cd ventalis-front`), et entrer la commande ci-dessous pour basculer sur Yarn :
(normalement c'est inutile car le projet est configuré avec Yarn)

`ng config cli.packageManager yarn`

- Pour une utilisation globale de Yarn avec Angular CLI :
(Important : avant d'utiliser Yarn, bien lire la section '5. (facultatif) Basculer de YARN à NPM' pour Angular CLI, ci-dessous

`ng config -g cli.packageManager yarn`

_Dans ce dernier cas, tout nouveau projet Angular CLI sera créé avec des packages téléchargés et/ou mis à jour avec Yarn.
Avant d'utiliser Yarn, il faudrait nettoyer (= supprimer) le dossier local "node_modules" de l'application en question (cf. §5 pour revenir à NPM)._

### 4. Téléchargement des dépendances :

Allez à la racine du dossier du projet (`cd ventalis-front`), **NE PAS TOUCHER - NI EFFACER le fichier 'package.json'**, puis taper la commande suivante :

`yarn install`

Cela installera les packages nécessaires à la compilation du projet ainsi qu'un fichier 'yarn.lock' (qui se réfère au fichier 'package.json')

Vérification des packages installés :

`yarn versions` (avec '**s**')

### 5. (facultatif) Basculer de YARN à NPM pour Angular CLI :
Avant d'utiliser ou de mettre à jour des packages d'anciens projets Angular CLE, managés avec NPM, il faut nettoyer le dossier sinon, il faut revenir à NPM :

`ng config -g cli.packageManager npm`

Ensuite, allez dans le dossier du projet (ex: `cd ventalis-front`) puis effacez le dossier complet '**node_modules**' ainsi que le fichier '**yarn.lock**'
puis relancer l'installation des dépendances avec NPM.

Pour basculer d'un projet NPM à YARN :
`ng config -g cli.packageManager yarn`
Ensuite, allez dans le dossier du projet (ex: `cd ventalis-front`) puis effacez le dossier complet '**/node_modules**' ainsi que le fichier '**package.json.lock**' (**NE PAS EFFACER le fichier 'package.json'**).
Puis relancer l'installation des dépendances avec YARN.

~~( `ng set --global packageManager=npm` , pour Angular 5 et moins)~~


## Lancement du projet :

- lancement du serveur Front-end et du navigateur sur la page d'accueil du site, en local:

`ng serve -o`

- Le message "Compilation successful" devrait apparaitre, confirmant que le serveur est lancé et le site opérationnel.
La page d'accueil du site s'affichera dans le navigateur par défaut, à l'adresse http://localhost:4200

- Une fois le serveur Front lancé, il faut évidemment le laisser tourner.
Utiliser le raccourci ctrl+C, pour stopper le serveur (ce qui rendra le site inopérant, bien évidemment).


- (non recommandé*)Pour utiliser un autre port comme, par exemple, le port 5200  :
`- ng serve --port 5200 -o`


_*(Non recommandé car, si changement de port, il faudra également modifier le code du back-end en conséquence :
-> actuellement dans chaque fichier REST Controller de chaque micro-service fichier src/main/java/com.jpierrot.ventalis.m{nom-du-microservice}/api/AuthRestController, 
et modifier la ligne `@CrossOrigin(origins = "http://localhost:4200")`)_

## Installation de Java et Spring boot (pour le Back-end)
Pour l'installation du back-end, merci de se référer au dépôt Github correspondant :
https://github.com/jeromepierrot/ventalis-back

