---
label: Traceroute
icon: diamond
---
# Traceroute
La suite logique de la commande ping est «traceroute». Traceroute peut être utilisé pour mapper le chemin emprunté par votre demande lorsqu'elle se dirige vers la machine cible.
Internet est composé de très nombreux serveurs et points de terminaison différents, tous connectés les uns aux autres. Cela signifie que, pour accéder au contenu que vous voulez réellement, vous devez d'abord passer par un tas d'autres serveurs. Traceroute vous permet de voir chacune de ces connexions - il vous permet de voir chaque étape intermédiaire entre votre ordinateur et la ressource que vous avez demandée. La syntaxe de base de traceroute sous Linux est la suivante: 

```
traceroute "destination" 
```


Exemple:
```
└──╼ $traceroute google.com 
traceroute to google.com (216.58.214.78), 30 hops max, 60 byte packets
 1  _gateway (192.168.0.254)  0.208 ms  0.316 ms  0.327 ms
 2  194.149.169.210 (194.149.169.210)  13.481 ms  13.483 ms  13.339 ms
 3  * * *
 4  * * *
 5  be2151.agr21.par04.atlas.cogentco.com (154.54.61.34)  13.347 ms  13.361 ms  13.289 ms
 6  tata.par04.atlas.cogentco.com (130.117.15.70)  13.182 ms  12.645 ms  12.611 ms
 7  72.14.212.77 (72.14.212.77)  16.685 ms  12.970 ms  13.594 ms
 8  108.170.244.161 (108.170.244.161)  13.495 ms  12.879 ms  13.289 ms
 9  142.250.224.93 (142.250.224.93)  14.109 ms  14.066 ms 142.250.224.95 (142.250.224.95)  14.074 ms
```