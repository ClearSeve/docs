---
label: Tor
icon: moon
---

![](/assets/doc/system/tor.png)

# Configurer un site tor (linux)
Bon je suppose que vous vous doutez qu'on doit commencer par l'installer 👾
```
sudo apt-get install tor
```

BREF commençons. Pour cela il vous faut aller dans les fichier de confs
```
cd /etc/tor/
```

Toutes les configurations sont dans le fichier torrc c'est la raison pour laquelle nous allons l'éditer. 
```
sudo nano torrc
```

Il vous faut par la suite descendre et aller aux lignes:
```
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 127.0.0.1:80
```

C'est là que toutes les configurations de vos sites tor sont faites. Il vous suffit de créer autant de configuration que de site web tor dont vous avez besoin 📀. Après avoir supprimé les 2 lignes du site par défaut, je vous propose une configuration simple comme suit:

```
# Mon Site 1
HiddenServiceDir /var/lib/tor/site1/
HiddenServicePort 80 127.0.0.1:80

# Mon Site 2
HiddenServiceDir /var/lib/tor/site2/
HiddenServicePort 80 127.0.0.1:80

```


Maintenant que les configurations sont faites, il suffit de redémarrer le service tor. 

```
sudo systemctl reload tor
```


S'il n'y a pas d'erreur c'est que vos sites web sont en ligne. Maintenant, il faut aller récupérer leur nom de domaine que Tor vous a attribué. Pour cela il faut aller nano le fichier ou cela est stocké.


Le fichier est dans: <b>HiddenServiceDir / hostname</b>donc dans le cas de mon site1 

```
sudo nano /var/lib/tor/site1/hostname
```


Il ne vous reste plus que à copier l'url et votre site est online. 🔮