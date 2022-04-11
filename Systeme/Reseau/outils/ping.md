---
label: Ping
icon: diamond
---
# Ping
À ce stade, j'espère que toute la théorie a du sens et que vous comprenez maintenant les modèles de base des réseaux informatiques.Nous allons examiner certains des outils de mise en réseau en ligne de commande que nous pouvons utiliser dans des applications pratiques. Beaucoup de ces outils fonctionnent sur d'autres systèmes d'exploitation, mais par souci de simplicité, je vais supposer que vous utilisez Linux. Le premier outil que nous allons examiner sera la commande ping.


La commande ping est utilisée lorsque nous voulons tester si une connexion à une ressource distante est possible. Il s'agit généralement d'un site Web sur Internet, mais il peut également s'agir d'un ordinateur de votre réseau domestique si vous souhaitez vérifier s'il est correctement configuré. Ping fonctionne en utilisant le protocole ICMP, qui est l'un des protocoles TCP / IP légèrement moins connus qui ont été mentionnés précédemment. Le protocole ICMP fonctionne sur la couche réseau du modèle OSI, et donc sur la couche Internet du modèle TCP / IP. La syntaxe de base pour ping est: 


```
ping "cible" 
```

Dans cet exemple, nous utilisons le ping pour tester si une connexion réseau à Google est possible:

```
└──╼ $ping google.com
PING google.com (142.250.179.78) 56(84) bytes of data.
64 octets de par21s19-in-f14.1e100.net (142.250.179.78) : icmp_seq=1 ttl=121 temps=12.4 ms
64 octets de par21s19-in-f14.1e100.net (142.250.179.78) : icmp_seq=2 ttl=121 temps=12.9 ms
64 octets de par21s19-in-f14.1e100.net (142.250.179.78) : icmp_seq=3 ttl=121 temps=12.8 ms
64 octets de par21s19-in-f14.1e100.net (142.250.179.78) : icmp_seq=4 ttl=121 temps=12.4 ms

--- statistiques ping google.com ---
4 paquets transmis, 4 reçus, 0 % paquets perdus, temps 3004 ms
rtt min/avg/max/mdev = 12.406/12.628/12.885/0.223 ms
```

![](/assets/doc/res/pingpong.gif)