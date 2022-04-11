---
label: FTP
icon: diamond
---

# FTP
Comment pirater une authentification FTP pour laquelle on a les trames ? En fait c'est tout con.<br>
Premièrement il vous faut le logiciel [Wireshark](https://www.wireshark.org/), puis: 

1. Dans les paramètres de filtrage: "ftp"
2. Chercher la ligne: "Response : 331 Enter password"
3. Et puis normalement juste après on a : "Request : PASS ${password}"

