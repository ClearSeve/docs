---
label: SSL auto signé
icon: diamond
---
# SSL auto signé
On lance les configs, et on oublie pas de reload

```
sudo a2enmod ssl
sudo systemctl restart apache2
```
On génère le certificat SSL a l'aide de openssl

```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt
```

- openssl : c'est l'outil de ligne de commande utilisé pour la création et la gestion des certificats, clés et autres fichiers OpenSSL.
- req -x509 : cela spécifie que nous voulons utiliser la gestion des demandes de signature de certificats (CSR) X.509. X.509 est une norme d'infrastructure de clé publique à laquelle SSL et TLS adhèrent pour la gestion des clés et des certificats.
- -nodes : cela indique à OpenSSL de ne pas utiliser l'option de sécurisation de notre certificat par une phrase de passe. Nous avons besoin qu'Apache soit capable de lire le fichier, sans intervention de l'utilisateur, au démarrage du serveur. Une phrase de passe empêcherait que cela se produise, puisque nous devrions la saisir après chaque redémarrage.
- -days 365 : cette option fixe la durée pendant laquelle le certificat sera considéré comme valide. Ici, nous l'avons fixée pour un an. De nombreux navigateurs modernes refusent les certificats dont la durée de validité dépasse un an.
- -newkey rsa:2048 : cette option précise que nous voulons générer un nouveau certificat et une nouvelle clé en même temps. Nous n'avons pas créé la clé nécessaire pour signer le certificat lors d'une étape précédente, nous devons donc la créer en même temps que le certificat. La partie rsa:2048 lui demande de fabriquer une clé RSA de 2048 bits.
- -keyout : cette ligne indique à OpenSSL où placer le fichier de clé privée généré que nous créons.
- -out : cela indique à OpenSSL où placer le certificat que nous créons.

Puis on a des choix a faire et sa ressemble à ceci:

```
Country Name (2 letter code) [XX]:CA
State or Province Name (full name) []:Canada
Locality Name (eg, city) [Default City]: Montreal
Organization Name (eg, company) [Default Company Ltd]: Cyber Dream
Organizational Unit Name (eg, section) []:Cyber-Secu
Common Name (eg, your name or your server's hostname) []: `exemple.com` # ne pas ce tomper c'est lier au domaine de gen
Email Address []:jamy.leplat-aufray@pm.me
```

### WOW vous avez presque fini

Il faut aller éditer le fichier de conf apache2 de votre site (dans le dossier /etc/apache2/sites-available)
```
sudo nano exemple.com.conf
```
#### Exemple: 

```
<VirtualHost *:443>
   ServerName exemple.com
   DocumentRoot /var/www/html

   SSLEngine on
   SSLCertificateFile /etc/ssl/certs/apache-selfsigned.crt 
   SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key 
</VirtualHost>

<VirtualHost *:80>
    ServerName exemple.com
    Redirect / https://exemple.com/
</VirtualHost>
```

Comme sa on redirige tout sur le site https ;)
En cas de petit problème avec le port 443, testez avec la commande suivante 

```
sudo ufw allow "Apache Full"
```

Le certificat auto-signé n'est pas recommandé ! Je vous recommande <a href="https://certbot.eff.org/" target='_blank'>Certbot</a> afin d'avoir un certificat valide ^-^
