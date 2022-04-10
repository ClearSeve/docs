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