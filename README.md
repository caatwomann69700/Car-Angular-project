# Car-Management "Angular project" 

Ce projet a étè Créer   [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Création du projet avec la commande suivante : 
```
ng new car-management-app
```
## Basculer Dans le projet via notre invite de commande : 
```
cd car-management-app
``` 
## Installation de tailwind en deux étapes avec les commandes suivantes : 
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
## Configuration du tailwind dans le fichier tailwind.config.js comme ceci : 
``` java script
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Configuration du fichier styles.sccs comme ceci : 
``` java script
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Configuration du fichier tsconfig.json comme ceci : 
``` java script
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"],
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```
## génerer un composant pour le tableau avec component'car-list' avec la commande suivante : 
```
ng generate component car-list
```
## génerer un composant pour les details avec component'car-details' avec la commande suivante : 
```
ng generate component car-details
```
## génerer un composant pour le formulaire d'ajout avec component'car-add' avec la commande suivante : 
```
ng generate component car-add
```
## Création d'un service pour gérer les voitures avec la commande suivante : 
```
ng generate service services/car
```
## Création d'un fichier  Model pour les voitures dans : 
```
src/app/models/car.model.ts
```
## Création d'un fichier  Model pour les voitures dans : 
```
src/app/models/car.model.ts
```