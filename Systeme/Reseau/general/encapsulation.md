---
label: Encapsulation
icon: diamond
---

# Encapsulation
Au fur et à mesure que les données sont transmises à chaque couche du modèle, plus d'informations contenant des détails spécifiques à la couche en question sont ajoutées au début de la transmission. À titre d'exemple, l'en-tête ajouté par la couche réseau inclurait des éléments tels que les adresses IP source et de destination, et l'en-tête ajouté par la couche de transport inclurait (entre autres) des informations spécifiques au protocole utilisé. La couche liaison de données ajoute également un élément à la fin de la transmission, qui est utilisé pour vérifier que les données n'ont pas été corrompues lors de la transmission; cela a également l'avantage supplémentaire d'une sécurité accrue, car les données ne peuvent pas être interceptées et falsifiées sans casser la remorque. L'ensemble de ce processus est appelé encapsulation; le processus par lequel les données peuvent être envoyées d'un ordinateur à un autre.
![](/assets/doc/res/encapsulation.png)