---
label: Grafana
icon: diamond
---
![](/assets/doc/system/grafana.jpeg)

# Grafana
+++ Debian based
Mise a jour du système + ajout de package:
```sh
$ sudo apt update
$ sudo apt upgrade
$ sudo apt-get install -y apt-transport-https
$ sudo apt-get install -y software-properties-common wget
```

Ajout dans les repository:
```sh
echo "deb https://packages.grafana.com/enterprise/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```

Puis on installe
```
sudo apt-get update
sudo apt-get install grafana-enterprise
```

+++ Arch based
Fuck debian based :p
```
$ sudo pacman -Syu
$ sudo pacman grafana

```
+++ RPM-based Linux

```sh
sudo nano /etc/yum.repos.d/grafana.repo
```
Add this
```conf
[grafana]
name=grafana
baseurl=https://packages.grafana.com/enterprise/rpm
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://packages.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
```

Then install: 
```sh
sudo yum install grafana
# or
sudo yum install grafana-enterprise
```

+++

[!ref icon=":rocket:"  text="Open Grafana DOC"](https://grafana.com/docs/grafana/latest/installation/)