---
label: Node exporter
icon: diamond
---

# Node exporter
Node exporter c'est un logiciel en go qui est utilisé comme analyse du système. il doit être fusionné avec Prometheus et Grafana bien sur afin de sortir des analyses complètes sur votre système.<br>
Son installation est assez simple et rapide à mettre en place

## Install

Premièrement il faut télécharger le package: 
```
wget https://github.com/prometheus/node_exporter/releases/download/v0.18.1/node_exporter-0.18.1.linux-amd64.tar.gz
```

L'argüer et de déplacer dans le répertoire des fichiers ben
```
tar xvfz node_exporter-*.*-amd64.tar.gz
sudo mv node_exporter-*.*-amd64/node_exporter /usr/local/bin/
```

Et pour finir ajouter un utilisateur qui lui est dédié
```
sudo useradd -rs /bin/false node_exporter
```

### systemd
Oui il faut créer le système à la mano. Éditez le fichier suivant: 
```
sudo nano /etc/systemd/system/node_exporter.service
```
et placez-le contente suivant à l'intérieur: 
```
[Unit]
Description=Node Exporter
After=network.target
[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter
[Install]
WantedBy=multi-user.target
```

il faut maintenant redémarrer le daemon
```sh
sudo systemctl daemon-reload
sudo systemctl enable node_exporter
sudo systemctl start node_exporter
sudo systemctl status node_exporter
```

eeeetttttt ttoooookkkkkk c'est bon ! `http://<server-IP>:9100/metrics`
