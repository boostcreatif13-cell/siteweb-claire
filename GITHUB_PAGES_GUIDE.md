# Guide : Mettre le site en ligne avec GitHub Pages

Ce guide vous explique comment mettre le site de Claire Stehlin en ligne gratuitement avec GitHub Pages.

## 📋 Prérequis

1. Un compte GitHub (gratuit) : [https://github.com/signup](https://github.com/signup)
2. Git installé sur votre ordinateur : [https://git-scm.com/downloads](https://git-scm.com/downloads)

---

## 🚀 Méthode 1 : Via l'interface GitHub (Le plus simple)

### Étape 1 : Créer un nouveau dépôt

1. Allez sur [https://github.com/new](https://github.com/new)
2. Nom du dépôt : `claire-stehlin-site` (ou un autre nom de votre choix)
3. Description : "Site web professionnel - Claire Stehlin - Assistante virtuelle"
4. **Cochez** "Public" (obligatoire pour GitHub Pages gratuit)
5. **NE COCHEZ PAS** "Add a README file" (vous avez déjà un README)
6. Cliquez sur **"Create repository"**

### Étape 2 : Uploader les fichiers

1. Sur la page de votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. Glissez-déposez **TOUS** les fichiers de votre projet dans la zone :
   - `index.html`
   - `prestations.html`
   - `contact.html`
   - `qui-suis-je.html`
   - `me-contacter.html`
   - `partenariat.html`
   - `styles.css`
   - `script.js`
   - `logo.jpeg`
   - `seo-head.html`
   - Tous les dossiers avec les images (`PHOTOS Site`, `PHOTOS -Témoignages Clients`, etc.)
3. En bas de la page, dans "Commit changes", tapez : `Initial commit - Site Claire Stehlin`
4. Cliquez sur **"Commit changes"**

### Étape 3 : Activer GitHub Pages

1. Dans votre dépôt, allez dans **Settings** (en haut à droite)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **"Source"**, sélectionnez **"Deploy from a branch"**
4. Choisissez **"main"** (ou "master") comme branche
5. Sélectionnez **"/ (root)"** comme dossier
6. Cliquez sur **"Save"**

### Étape 4 : Obtenir votre lien

1. Attendez 1-2 minutes que GitHub déploie votre site
2. Revenez dans **Settings > Pages**
3. Vous verrez un message vert : **"Your site is live at..."**
4. Votre lien sera : `https://VOTRE-USERNAME.github.io/claire-stehlin-site/`

**C'est tout ! Votre site est en ligne ! 🎉**

---

## 🚀 Méthode 2 : Via Git en ligne de commande (Plus professionnel)

### Étape 1 : Initialiser Git dans votre projet

Ouvrez PowerShell ou Terminal dans le dossier de votre projet et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site Claire Stehlin"
```

### Étape 2 : Créer le dépôt sur GitHub

1. Allez sur [https://github.com/new](https://github.com/new)
2. Nom : `claire-stehlin-site`
3. **NE COCHEZ PAS** "Initialize this repository with a README"
4. Cliquez sur **"Create repository"**

### Étape 3 : Connecter votre projet local à GitHub

Sur la page de votre nouveau dépôt GitHub, vous verrez des instructions. Exécutez ces commandes :

```bash
# Remplacer VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/claire-stehlin-site.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Envoyer les fichiers sur GitHub
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

1. Dans votre dépôt GitHub, allez dans **Settings > Pages**
2. Source : **"Deploy from a branch"**
3. Branch : **"main"** / Folder : **"/ (root)"**
4. Cliquez sur **"Save"**

Votre site sera disponible à : `https://VOTRE-USERNAME.github.io/claire-stehlin-site/`

---

## 🔄 Mettre à jour le site

### Via l'interface GitHub :
1. Allez dans votre dépôt
2. Cliquez sur le fichier à modifier
3. Cliquez sur l'icône crayon (✏️)
4. Modifiez le fichier
5. En bas, tapez un message de commit et cliquez sur **"Commit changes"**

### Via Git en ligne de commande :
```bash
# Après avoir modifié vos fichiers
git add .
git commit -m "Description des modifications"
git push
```

Les modifications apparaîtront sur votre site en 1-2 minutes.

---

## 🌐 Alternatives à GitHub Pages

### 1. **Netlify** (Recommandé - Plus simple)
- Site : [https://www.netlify.com](https://www.netlify.com)
- Gratuit, glisser-déposer les fichiers
- URL personnalisée possible
- Déploiement automatique depuis GitHub

### 2. **Vercel**
- Site : [https://vercel.com](https://vercel.com)
- Gratuit, très rapide
- Déploiement automatique

### 3. **GitHub Pages** (Ce que nous utilisons)
- Gratuit, intégré à GitHub
- URL : `username.github.io/nom-du-repo`

---

## 📝 Notes importantes

1. **Nom de fichier** : Assurez-vous que votre page d'accueil s'appelle `index.html`
2. **Chemins relatifs** : Tous les liens doivent être relatifs (ex: `./styles.css` et non `C:/...`)
3. **Images** : Vérifiez que tous les chemins d'images sont corrects
4. **HTTPS** : GitHub Pages utilise HTTPS automatiquement (sécurisé)

---

## ✅ Checklist avant de mettre en ligne

- [ ] Tous les fichiers HTML sont présents
- [ ] Le fichier `index.html` existe
- [ ] Toutes les images sont incluses
- [ ] Le logo `logo.jpeg` est présent
- [ ] Les liens entre les pages fonctionnent
- [ ] Le formulaire de contact est testé (même s'il ne fonctionne pas encore sans backend)

---

## 🆘 Problèmes courants

### Le site ne s'affiche pas
- Vérifiez que GitHub Pages est activé dans Settings > Pages
- Attendez 2-3 minutes après l'activation
- Vérifiez l'URL (elle doit être exactement comme indiqué)

### Les images ne s'affichent pas
- Vérifiez que les chemins d'images sont corrects
- Les chemins doivent être relatifs : `PHOTOS Site/portaitClaire.png`
- Vérifiez que les dossiers sont bien uploadés sur GitHub

### Les styles ne s'appliquent pas
- Vérifiez que `styles.css` est bien dans le dépôt
- Videz le cache du navigateur (Ctrl+F5)

---

## 📧 Partager le lien avec votre cliente

Une fois le site en ligne, vous pouvez partager le lien directement :
- **Lien GitHub Pages** : `https://VOTRE-USERNAME.github.io/claire-stehlin-site/`

Vous pouvez aussi :
- Acheter un nom de domaine (ex: `clairestehlin.com`) et le connecter à GitHub Pages
- Utiliser Netlify qui offre des noms de domaine gratuits

---

**Besoin d'aide ?** N'hésitez pas à me demander ! 🚀
