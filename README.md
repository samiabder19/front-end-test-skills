Bonjour voici l'un de mes projets que j'ai effectué l'année derniére, il s'agit d'un site de donation.

I.DESCRIPTION:
Le thème du projet étant « Rendre le monde meilleur », notre site offre la possibilité aux utilisateurs de pouvoir faire et avoir accès à toute sorte d’annonces de dons, que l’utilisateur aura décrit, avec un type de don et une description de ce dernier.
Lorsque l’utilisateur est sur la page d’accueil, un message de bienvenue s’affiche pour l’accueillir. Il aura ensuite la possibilité d’aller sur la page “Annonces” pour avoir accès à toutes les annonces publiées par d‘autres utilisateurs. Chaque annonce contient le nom de l’utilisateurs qui l’a publiée, son numéro de téléphone, la région dans laquelle le don peut s’effectuer, un type ainsi qu’une description du don qu’il offre.
Il a aussi accès au classement des meilleures annonces de dons, et ce via la page « Classement », le but de cela étant de créer de la concurrence et d’inciter les utilisateurs à faire plus de dons afin de se retrouver en tête de liste du classement.
Si l’utilisateur a publié une annonce, il peut la retrouver sur sa page d’annonces personnelle « Mes annonces ». Enfin, il a aussi accès à son profil où se trouve ses informations personnelles ainsi que ses annonces.

II.FONCTIONALITE: 
La première fonctionnalité du site est la gestion d’utilisateurs, l’utilisateur devra donc s’inscrire en remplissant un formulaire qui demande le nom complet de l’utilisateur, son numéro de téléphone ainsi qu’un mot de passe pour son compte.
Une fois inscrit l’utilisateur peut aller surfer sur les pages du site, et peut donc voir les annonces disponibles, mais aussi publier sa propre annonce.
Loin des annonces, l’utilisateur peut également modifier certaines de ses informations personnelles comme son numéro de téléphone.
En dernier lieu, l’utilisateur peut se déconnecter à tout moment à partir du bouton « Loggout ».

III.ROUTES:
'/' : la page index
'/register' : la route pour s’inscrire
'/login' : la route pour se connecter
'/home' : la route vers la page d’accueil
'/annonces' : la route vers la page des annonces
'/classement' : la route vers la page des classements
'/Profil' :la route vers la page du profil
'/edited' :la route pour modifier le numéro de téléphone
'/new_annonce' :la route vers la page pour remplir les champs d’une nouvelle annonce
'/submit' :la route qui ajoute une nouvelle annonce
'/Mes-annonces' : la route vers la page de mes annonces
'/loggout' : la route pour se déconnecter.

IV.MODULES NECESSAIRE:
express, express-session, mysql, bcrypt, pug, nodemon, ejs, JSon 

V.COMMENT LANCER LE SITE :
Après avoir installer les modules nécessaire, se rendre sur le fichier « db.js » qui se trouve sur dans le dossier « core » et remplacer les champs « user » et « password » respectivement par votre nom d’utilisateur et votre mot de passe, et « databse » par le nom de votre base de données (humanitaide) puis ajouter votre port si nécessaire. Refaire les mêmes operations sur le fichier « import.js »
Se rendre dans le dossier « core » puis ouvrir un terminal, exécuter la commande node import.js.
Si tout a été correctement configurer la base de données humanitaide devrait être importée.
Revenir sur le projet puis dans le terminal, exécuter la commande nodemon app.