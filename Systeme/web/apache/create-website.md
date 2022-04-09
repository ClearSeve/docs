---
label: Creation simple
icon: gear
---
# Creation de mon 1er site
Cet article est là pour vous apprendre à mettre en place votre 1er site internet à l'aide d'apache sur votre plateforme d'hébergement.


+++ Debian based

## Step 1
La première étape est de bien évidemment installer le package sur votre système.
```
sudo apt update
sudo apt install apache2
```
Après avoir fait cette installation apache2 devrait déjà être en marche. Pour le vérifier il faut aller le vérifier lui-même en allant à l'adresse suivante: 
```
http://YOUR_PUBLIC_IP/
```
!!!
Pour du travail en local, il est possible d'utiliser 127.0.0.1
!!!

Bref vous devriez avoir une page similaire à celle ci-dessous
![](/assets/doc/apache2/create_ok.png)

## Step 2
Dans le cas d'un site statique, il ne vous reste plus que cette étape !<br>
Il vous faut uploader vos fichiers de sites statiques sur votre serveur. Probablement en utilisant un logiciel FTP/SFTP comme [filezilla](https://filezilla-project.org/)

Vous devez uploader vos fichiers dans le répertoire par défaut, c’est-à-dire: 
```
/var/www/html/
```
!!!
Notons que le dossier doit contenir un fichier `index.html` mis en place par défaut par Apache
!!!
!!!warning Warning
Chaque dossier de votre site doit avoir un fichier nommé `index.html` ! C'est le dossier "page d'accueil" du dossier 
!!!

+++ Arch based
todo


+++

[!ref icon="rocket" text="Besoin de plusieurs sites ?"](./multi-site)
