# Solution : Déplacer les fichiers à la racine

## 🔍 Le problème

Vos fichiers sont dans un sous-dossier `Claire site web/` au lieu d'être à la racine du dépôt.

GitHub Pages cherche `index.html` à la racine, mais il est dans `Claire site web/index.html`.

## ✅ Solution : Déplacer les fichiers à la racine

### Option 1 : Via l'interface GitHub (Recommandé)

1. **Allez dans votre dépôt GitHub**
2. **Cliquez sur le dossier "Claire site web"**
3. **Pour chaque fichier** (`index.html`, `styles.css`, etc.) :
   - Cliquez sur le fichier
   - Cliquez sur l'icône crayon (✏️) pour éditer
   - Cliquez sur l'icône de dossier à côté du nom du fichier
   - Supprimez "Claire site web/" du chemin
   - Cliquez sur "Commit changes"
4. **Répétez pour tous les fichiers**

**OU plus simple :**

### Option 2 : Re-uploader directement à la racine

1. **Allez dans l'onglet "Code" de votre dépôt**
2. **Cliquez sur "Add file" > "Upload files"**
3. **Glissez-déposez TOUS les fichiers directement** (pas dans un sous-dossier)
4. **En bas, tapez** : "Déplacement des fichiers à la racine"
5. **Cliquez sur "Commit changes"**

### Option 3 : Configurer GitHub Pages pour pointer vers le dossier

1. **Allez dans Settings > Pages**
2. **Source** : "Deploy from a branch"
3. **Branch** : "main"
4. **Folder** : Sélectionnez **"/Claire site web"** au lieu de "/ (root)"
5. **Cliquez sur "Save"**

**Votre URL sera alors** : `https://boostcreatif13-cell.github.io/claire-site/Claire%20site%20web/`

---

## 🎯 Solution recommandée

**Option 2** est la plus simple : re-uploader tous les fichiers directement à la racine du dépôt.

Ensuite, dans Settings > Pages, configurez :
- Source : "Deploy from a branch"
- Branch : "main"
- Folder : "/ (root)"

Et votre site sera à : `https://boostcreatif13-cell.github.io/claire-site/`
