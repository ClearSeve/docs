---
label: Modèle Ethernet V2
icon: diamond
---
# Ethernet V2

Une trame Ethernet doit avoir une taille d’au moins <b>64 octets</b> par défaut pour que la détection de collision fonctionne, et peut avoir une taille maximale de <b>1 518 octets</b>. Le paquet commence toujours par un <b>préambule</b>, qui contrôle la synchronisation entre l’émetteur et le récepteur, et un Start Frame Delimiter (SFD), qui définit la trame. Les deux informations sont une séquence de bits au format 10101010.... La trame réelle contient des informations sur les adresses de destination et de source (format MAC) et des informations de contrôle, suivies par l’ensemble des données à transmettre. Une Frame Check Sequence (FCS) ferme la trame entière (à l’exception du préambule et du SFD) comme somme de contrôle.

Ethernet II utilise la structure de trame classique, qui comprend le champ type, qui définit différents protocoles de la couche de commutation. Dans le modèle OSI, la couche réseau est importante pour la commutation des connexions et la fourniture des adresses réseau. Dans les formats de trame ultérieurs, le champ de type a été remplacé par une spécification de longueur.