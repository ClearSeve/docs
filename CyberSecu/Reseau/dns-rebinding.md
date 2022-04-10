---
label: DNS Rebinding
icon: diamond
---
![](/assets/doc/reseau/dns-rebind.png)
# DNS Rebinding

Autoriser des requêtes arbitraires d'origine croisée est connu pour être extrêmement dangereux. Par conséquent, la plupart des navigateurs modernes bloquent ces requêtes. Cependant, la reliaison DNS offre un moyen de contourner cette restriction. Cette section présente l'importance de la politique de même origine et le fonctionnement de la technique de reliure DNS.

## Alors comment sa marche ?

En fait c'est relativement con. Il faut faire croire que l'ip du serveur web ou la victime souhaite aller se trouve dans son réseau local. Pour cela il faut utiliser un service dans avec un TTL très bas afin que la victime face souvent la requête dans pour l'hostname. 

1. l'utilisateur va sur le vrai site
2. nouvelle requête dns => response sur le réseau local
3. script js qui fait des requêtes
4. on envoie enfin le résultat sur un serveur compromis

Rien de plus simple!<br>

## Outils
Dans cette situation et dans une raison de flème de développer un serveur DNS a la main, je vous recommande [cet outils](https://lock.cmpxchg8b.com/rebinder.html). Après bien sur si vous voulez faire comme moi, faut dev le serveur à la mano :p


# Exemple: 
Imaginons un script qui n'est accessible que depuis l'ip `127.0.0.1` par rapport au serveur web... Oui c'est déjà mal barré MAIS tout est encore possible.<br>
En effet, imaginons que le site permette des iframes et nous choisissons nous-mêmes les URL, oui Bah la c'est fini pour le site.... <br>
Pourquoi ? simple, car on sait faire du dns rebinding !

On a besoin de 2 Ip, la 1er c'est `127.0.0.1` et la 2e n’importe quelle ip qui marche, pour l'exemple `8.8.8.8`. Nous allons utiliser [cet outils](https://lock.cmpxchg8b.com/rebinder.html) pour générer une URL. Nous obtenons: <br>
`http://7f000001.08080808.rbndr.us`<br>
Rajoutons quelques dingueries de ports et le path `/admin`:<br>
`http://7f000001.08080808.rbndr.us:66666/admin`<br>

Il ne reste plus qu'à spammer comme des gros porcs le bouton "get" et attendre que l'attaque se passe.