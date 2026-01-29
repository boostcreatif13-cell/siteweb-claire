# Recommencer le dépôt GitHub proprement

## 🗑️ Option 1 : Supprimer et recréer le dépôt (Recommandé)

### Étape 1 : Supprimer l'ancien dépôt

1. Allez sur votre dépôt : `github.com/boostcreatif13-cell/claire-site`
2. Allez dans **Settings** (tout en bas du menu de gauche)
3. Faites défiler jusqu'en bas de la page Settings
4. Dans la section **"Danger Zone"**, cliquez sur **"Delete this repository"**
5. Tapez le nom du dépôt pour confirmer : `boostcreatif13-cell/claire-site`
6. Cliquez sur **"I understand the consequences, delete this repository"**

### Étape 2 : Créer un nouveau dépôt propre

1. Allez sur [https://github.com/new](https://github.com/new)
2. **Nom du dépôt** : `claire-site` (ou `claire-stehlin-site`)
3. **Description** : "Site web professionnel - Claire Stehlin"
4. **Cochez "Public"** (obligatoire pour GitHub Pages gratuit)
5. **NE COCHEZ PAS** "Add a README file"
6. Cliquez sur **"Create repository"**

### Étape 3 : Uploader TOUS les fichiers à la racine

1. Sur la page de votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. **Glissez-déposez TOUS les fichiers et dossiers** directement (pas dans un sous-dossier) :
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
   - `README.md`
   - **ET TOUS LES DOSSIERS** :
     - `PHOTOS Site-20260128T082749Z-3-001/`
     - `PHOTOS -Témoignages Clients-20260128T082747Z-3-001/`
     - `Activité -Presta-20260128T082743Z-3-001/`
     - `Brief SEO-20260128T100533Z-3-001/`
     - `Identité visuelle-20260128T082745Z-3-001/`
3. En bas, dans "Commit changes", tapez : `Initial commit - Site complet avec photos`
4. Cliquez sur **"Commit changes"**

### Étape 4 : Activer GitHub Pages

1. Allez dans **Settings** > **Pages**
2. **Source** : Sélectionnez **"Deploy from a branch"**
3. **Branch** : Sélectionnez **"main"**
4. **Folder** : Sélectionnez **"/ (root)"**
5. Cliquez sur **"Save"**

### Étape 5 : Attendre et obtenir le lien

1. Attendez 2-3 minutes
2. Revenez dans **Settings > Pages**
3. Vous verrez un message vert : **"Your site is live at..."**
4. Votre lien sera : `https://boostcreatif13-cell.github.io/claire-site/`

---

## 🔄 Option 2 : Garder le dépôt et tout re-uploader

Si vous préférez garder le dépôt actuel :

### Étape 1 : Supprimer tous les fichiers actuels

1. Allez dans l'onglet **"Code"**
2. Pour chaque fichier et dossier :
   - Cliquez dessus
   - Cliquez sur l'icône poubelle (🗑️)
   - Confirmez la suppression

### Étape 2 : Uploader tout proprement

1. Cliquez sur **"Add file"** > **"Upload files"**
2. Glissez-déposez **TOUS** les fichiers et dossiers à la racine
3. Committez avec le message : "Réorganisation complète - Site avec photos"

### Étape 3 : Configurer GitHub Pages

1. **Settings > Pages**
2. **Source** : "Deploy from a branch"
3. **Branch** : "main"
4. **Folder** : "/ (root)"
5. **Save**

---

## ✅ Checklist avant de commencer

Assurez-vous d'avoir tous ces fichiers dans votre dossier local :

**Fichiers HTML :**
- [ ] index.html
- [ ] prestations.html
- [ ] contact.html
- [ ] qui-suis-je.html
- [ ] me-contacter.html
- [ ] partenariat.html

**Fichiers CSS/JS :**
- [ ] styles.css
- [ ] script.js
- [ ] seo-head.html

**Images :**
- [ ] logo.jpeg
- [ ] Dossier PHOTOS Site (avec portaitClaire.png et PortraitClaire2.png)
- [ ] Dossier PHOTOS -Témoignages Clients (avec les 3 photos)

**Autres :**
- [ ] README.md (optionnel)

---

## 🎯 Recommandation

**Je recommande l'Option 1** (supprimer et recréer) car c'est plus propre et vous êtes sûr que tout est bien organisé dès le départ.

---

## 📝 Après l'upload

Une fois tout uploadé, vérifiez dans l'onglet "Code" que :
- ✅ Tous les fichiers sont directement visibles (pas dans un sous-dossier)
- ✅ Le fichier `index.html` est à la racine
- ✅ Les dossiers de photos sont présents

Ensuite, configurez GitHub Pages et votre site sera en ligne ! 🚀
