---
label: Card Game
icon: diamond
---

# Card Game
Avoir quelques notions en cybersécurité web et avoir envie de ruiner quelques espoirs ? quelle beeelllleeee vie. Perso, j'aime recevoir un message de mon bot:<br>
`Someone has been trolled "troll name" | IP: X.X.X.X`<br>
Mais comment mettre le système en place ? c'est assez simple.

## 1. Formulaire caché 
C'est probablement la protection la plus connue, mais elle marche assez bien ! Alors en quoi cela consiste ? tout simplement cacher un champ dans un formulaire. <br>
Alors pourquoi ? c'est assez simple. Un bot simple qui tente de remplir les formulaires pour tester la sécurité remplit tous les champs du formulaire avec des données crédibles. Mais ils ne sont pas capables de détecter si un champ est caché ou non !<br>
Il ne vous reste plus qu'a ne pas traité la demande de formulaire dont ce fameux champ est rempli. Rares sont les utilisateurs qui remplissent un champ qui n'existe pas xD

### Comment faire ?
```html
<form action="/submit">
    <input type="text" name="nom" placeholder="Nom">
    <input type="text" name="prenom" placeholder="Prenom">
    <input type="email" name="email" placeholder="Email">
    <input type="text" name="cache" class="jesuiscache" placeholder="Nom du chat">
    <input type="submit">
</form>
```
> Tiens ?!! c'est étonnant son chat s'appelle "ibjunjob"

## 2. Extraction .git
Wait tu utilises pas git pour gérer ton code source ! Érudie !! <br>
Enfin bref, si tu es censé tu utilise git pour gérer ton code source. Et devine quoi ? ce n'est pas une configuration 403 dans `/.git/` qui va m'arrêter<br>
Bha quoi ? vous n'êtes pas au courant pour la reconstitution de git ? attendez je vous montre. Tu cliques [ici](https://github.com/lijiejie/GitHack) et avec une simple commande dans ton terminal MAGIE ! Mais bon j'espère que cela ne marche pas sur ton site. <br>
Et si on le faisait fonctionner sur ton site ? Bah oui réfléchit 2 min. Git stocke tout, donc pourquoi on d'upload pas un fichier `.git` d'un autre projet à la place ? un script débile, un faux site ou un rick roll tant qu'à y être. <br>
Le hacker, il tente, sa marche, il se dit "jackpot", il ouvre groooooss trollllll

### Comment faire ?
1. creer un projet git
2. développe ton script troll
3. commit
4. upload le dossier sur ton site
5. attand qu'un hacker tombe dans le panneau
