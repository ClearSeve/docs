---
label: Multi Site
icon: diamond
---
# Création d'une configuration multi sites

+++ Debian based

Il suffit de créer plusieurs configurations dans le dossier `/etc/apache/sites-available/`<br>
par exemple: `mywebsite.com.conf`
Puis: 
```
a2enmod mywebsite.com.conf
systemctl restart apache2
```
+++ Arch based
Il faut créer un/des fichier(s) de configuration dans un répertoire, qui continente les configurations, est l'ajouter dans la configuration générale du serveur<br>
Puis: 
```
systemctl restart httpd
```
+++