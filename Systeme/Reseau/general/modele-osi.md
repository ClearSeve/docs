---
label: Modèle OSI
icon: diamond
---
# Modèle OSI
OSI (Open Systems Interconnection) Le modèle est un modèle standardisé que nous utilisons pour démontrer la théorie derrière les réseaux informatiques. En pratique, c'est en fait le modèle TCP / IP le plus compact sur lequel repose le réseau réel; cependant, le modèle OSI, à bien des égards, est plus facile à comprendre.
<br>
Le modèle OSI se compose de sept couches:

## Couche 1 - Physique:

La couche physique est directement liée au matériel de l'ordinateur. C'est là que les impulsions électriques qui composent le transfert de données sur un réseau sont envoyées et reçues. C'est le travail de la couche physique de convertir les données binaires de la transmission en signaux et de les transmettre à travers le réseau, ainsi que de recevoir les signaux entrants et de les reconvertir en données binaires.

## Couche 2 - Liaison de données:

La couche liaison de données se concentre sur l'adressage physique de la transmission. Il reçoit un paquet de la couche réseau (qui comprend l'adresse IP de l'ordinateur distant) et ajoute l'adresse physique (MAC) du point d'extrémité de réception. À l'intérieur de chaque ordinateur compatible réseau se trouve une carte d'interface réseau (NIC) qui est livrée avec une adresse MAC (Media Access Control) unique pour l'identifier.<br>
Les adresses MAC sont définies par le fabricant et littéralement gravées dans la carte; ils ne peuvent pas être modifiés - bien qu'ils puissent être usurpés. Lorsque les informations sont envoyées sur un réseau, c'est en fait l'adresse physique qui est utilisée pour identifier exactement où envoyer les informations.
<br>
En outre, il incombe également à la couche liaison de données de présenter les données dans un format adapté à la transmission.
<br>
La couche liaison de données remplit également une fonction importante lorsqu'elle reçoit des données, car elle vérifie les informations reçues pour s'assurer qu'elles n'ont pas été corrompues lors de la transmission, ce qui pourrait bien se produire lorsque les données sont transmises par la couche 1: la couche physique.

## Couche 3 - Réseau:

La couche réseau est chargée de localiser la destination de votre demande. Par exemple, Internet est un immense réseau; lorsque vous souhaitez demander des informations à partir d'une page Web, c'est la couche réseau qui prend l'adresse IP de la page et détermine le meilleur itinéraire à emprunter. À ce stade, nous travaillons avec ce que l'on appelle l'adressage logique (c'est-à-dire les adresses IP) qui sont toujours contrôlées par logiciel. Les adresses logiques sont utilisées pour donner de l'ordre aux réseaux, les catégoriser et nous permettre de les trier correctement. Actuellement, la forme la plus courante d'adressage logique est le format IPV4, que vous connaissez probablement déjà (c'est-à-dire que 192.168.0.1 ou 192.168.0.254 sont des adresses courante pour un routeur domestique).

## Couche 4 - Transport:

La couche de transport est une couche très intéressante qui remplit de nombreuses fonctions importantes. Son premier objectif est de choisir le protocole sur lequel les données doivent être transmises. Les deux protocoles les plus courants dans la couche transport sont TCP (Transmission Control Protocol) et UDP (User Datagram Protocol); avec TCP, la transmission est basée sur la connexion, ce qui signifie qu'une connexion entre les ordinateurs est établie et maintenue pendant la durée de la demande. Cela permet une transmission fiable, car la connexion peut être utilisée pour garantir que les paquets arrivent tous au bon endroit. Une connexion TCP permet aux deux ordinateurs de rester en communication constante pour s'assurer que les données sont envoyées à une vitesse acceptable et que toutes les données perdues sont renvoyées. Avec UDP, le contraire est vrai; les paquets de données sont essentiellement jetés sur l'ordinateur récepteur - s'il ne peut pas suivre, c'est son problème (c'est pourquoi une transmission vidéo sur quelque chose comme Skype peut être pixelisée si la connexion est mauvaise). Cela signifie que TCP serait généralement choisi pour les situations où la précision est préférée à la vitesse (par exemple, le transfert de fichiers ou le chargement d'une page Web), et UDP serait utilisé dans les situations où la vitesse est plus importante (par exemple, le streaming vidéo).<br>
Avec un protocole sélectionné, la couche de transport divise ensuite la transmission en morceaux de la taille d'une bouchée (sur TCP, ils sont appelés segments, sur UDP, ils sont appelés datagrammes), ce qui facilite la transmission du message avec succès.

## Couche 5 - Session:

Lorsque la couche de session reçoit les données correctement formatées de la couche de présentation, elle cherche à voir si elle peut établir une connexion avec l'autre ordinateur sur le réseau. Si ce n'est pas le cas, il renvoie une erreur et le processus ne va pas plus loin. Si une session peut être établie, il incombe à la couche session de la maintenir, ainsi que de coopérer avec la couche session de l'ordinateur distant afin de synchroniser les communications. La couche session est particulièrement importante car la session qu'elle crée est propre à la communication en question. C'est ce qui vous permet de faire plusieurs requêtes à différents points de terminaison simultanément sans que toutes les données ne se mélangent (pensez à ouvrir deux onglets dans un navigateur Web en même temps)! Lorsque la couche de session a correctement enregistré une connexion entre l'hôte et l'ordinateur distant, les données sont transmises à la couche 4: la couche de transport.

# Couche 6 - Présentation:

La couche présentation reçoit des données de la couche application. Ces données ont tendance à être dans un format que l'application comprend, mais ce n'est pas nécessairement dans un format normalisé qui pourrait être compris par la couche application dans l'ordinateur de réception. La couche de présentation traduit les données dans un format standardisé, ainsi que la gestion de tout cryptage, compression ou autres transformations des données. Une fois cette opération terminée, les données sont transmises à la couche session.

## Couche 7 - Application:

La couche application du modèle OSI fournit essentiellement des options de mise en réseau aux programmes exécutés sur un ordinateur. Il fonctionne presque exclusivement avec les applications, leur fournissant une interface à utiliser pour transmettre des données. Lorsque les données sont transmises à la couche application, elles sont transmises à la couche présentation.

![](/assets/doc/res/osi.png)