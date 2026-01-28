# Dépannage GitHub Pages - Erreur 404

## 🔍 Vérifications à faire :

### 1. Vérifier que vos fichiers sont dans le dépôt

1. Allez dans l'onglet **"Code"** de votre dépôt GitHub
2. Vérifiez que vous voyez bien :
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ `logo.jpeg`
   - ✅ Tous vos autres fichiers HTML

**Si les fichiers ne sont pas là, vous devez les uploader !**

### 2. Vérifier la configuration GitHub Pages

Dans **Settings > Pages**, vérifiez que :
- ✅ Source : **"Deploy from a branch"**
- ✅ Branch : **"main"** (ou "master")
- ✅ Folder : **"/ (root)"**
- ✅ Cliquez sur **"Save"** si vous avez changé quelque chose

### 3. Vérifier les Actions GitHub

1. Allez dans l'onglet **"Actions"** de votre dépôt
2. Vérifiez s'il y a des workflows en cours ou des erreurs
3. Si vous voyez des erreurs, cliquez dessus pour voir les détails

### 4. Attendre le déploiement

- GitHub Pages peut prendre **jusqu'à 10 minutes** pour déployer la première fois
- Attendez et rafraîchissez la page

### 5. Vérifier le nom du dépôt

Votre URL doit correspondre exactement au nom de votre dépôt :
- Si votre dépôt s'appelle `claire-site` → `https://boostcreatif13-cell.github.io/claire-site/`
- Si votre dépôt s'appelle autre chose, l'URL change !

---

## 🚨 Solutions selon le problème :

### Problème : Les fichiers ne sont pas dans le dépôt

**Solution : Uploader les fichiers**

1. Allez dans l'onglet **"Code"**
2. Cliquez sur **"Add file"** > **"Upload files"**
3. Glissez-déposez TOUS vos fichiers :
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
   - Tous les dossiers avec les images
4. En bas, tapez un message : "Ajout des fichiers du site"
5. Cliquez sur **"Commit changes"**

### Problème : La branche n'est pas "main"

**Solution :**

1. Allez dans **Settings > Pages**
2. Changez la branche pour **"main"**
3. Si vous n'avez pas de branche "main", créez-la ou utilisez "master"

### Problème : Le fichier index.html n'existe pas

**Solution :**

- Assurez-vous que votre page d'accueil s'appelle exactement **`index.html`**
- GitHub Pages cherche toujours un fichier `index.html` à la racine

### Problème : Le déploiement prend du temps

**Solution :**

- Attendez **10-15 minutes** maximum
- Rafraîchissez la page toutes les 2-3 minutes
- Vérifiez dans **Settings > Pages** s'il y a un message de statut

---

## ✅ Checklist complète :

- [ ] Tous les fichiers sont uploadés dans le dépôt
- [ ] Le fichier `index.html` existe à la racine
- [ ] GitHub Pages est configuré sur "Deploy from a branch"
- [ ] La branche "main" est sélectionnée
- [ ] Le dossier "/ (root)" est sélectionné
- [ ] J'ai cliqué sur "Save"
- [ ] J'ai attendu au moins 5 minutes

---

## 🔄 Alternative rapide : Netlify

Si GitHub Pages ne fonctionne toujours pas, utilisez Netlify (plus rapide) :

1. Allez sur [netlify.com](https://www.netlify.com)
2. Créez un compte gratuit
3. Glissez-déposez le dossier de votre site
4. Le site est en ligne en 30 secondes !

---

**Dites-moi ce que vous voyez dans l'onglet "Code" de votre dépôt GitHub !**
