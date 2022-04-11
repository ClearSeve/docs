---
label: Apache2 proxy
icon: diamond
---
# Proxy
> C'est juste pour rebalancer une requette sur un autre port

Installation de base:

```
sudo apt-get install -y build-essential
sudo apt-get install -y libxml2-dev
```

On active les modules sur apache2

```sh
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_ajp
sudo a2enmod rewrite
sudo a2enmod deflate
sudo a2enmod headers
sudo a2enmod proxy_balancer
sudo a2enmod proxy_connect
sudo a2enmod proxy_html
sudo systemctl restart apache2
```

Normalement il n'y a pas d'erreur. Si c'est le cas je ne peux actuellement pas vous aider (xD)
Bref c'est activé. Vous pouvez donc l'utiliser comme l'exemple qui suit

```
<VirtualHost *:80>
        ServerName exemple.com 
        ProxyPreserveHost On
        ProxyPass / http://127.0.0.1:8003/
        ProxyPassReverse / http://127.0.0.1:8003/
<VirtualHost>
```
