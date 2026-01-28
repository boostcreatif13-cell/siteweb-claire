# Comment ajouter les photos sur GitHub

## 📸 Méthode simple : Uploader les dossiers de photos

### Étape 1 : Aller dans votre dépôt

1. Allez sur votre dépôt GitHub : `github.com/boostcreatif13-cell/claire-site`
2. Cliquez sur l'onglet **"Code"**

### Étape 2 : Uploader les dossiers de photos

1. Cliquez sur **"Add file"** > **"Upload files"**
2. Glissez-déposez les **dossiers complets** avec les photos :
   - `PHOTOS Site-20260128T082749Z-3-001` (avec tout son contenu)
   - `PHOTOS -Témoignages Clients-20260128T082747Z-3-001` (avec tout son contenu)
3. En bas, tapez : "Ajout des photos du site"
4. Cliquez sur **"Commit changes"**

### Étape 3 : Vérifier les chemins dans votre code

Assurez-vous que les chemins dans vos fichiers HTML sont corrects :

- Pour les photos de Claire : `PHOTOS Site-20260128T082749Z-3-001/PHOTOS Site/portaitClaire.png`
- Pour les témoignages : `PHOTOS -Témoignages Clients-20260128T082747Z-3-001/PHOTOS -Témoignages Clients/Bruno Dietrich.png`

---

## 🔍 Vérifier que les photos s'affichent

1. Attendez 1-2 minutes après l'upload
2. Rafraîchissez votre site : `https://boostcreatif13-cell.github.io/claire-site/`
3. Vérifiez que les images s'affichent correctement

---

## ⚠️ Si les photos ne s'affichent pas

### Vérifier les chemins dans le code

Les chemins doivent être **relatifs** et correspondre exactement aux noms des dossiers sur GitHub.

Exemple :
```html
<!-- ✅ Correct -->
<img src="PHOTOS Site-20260128T082749Z-3-001/PHOTOS Site/portaitClaire.png">

<!-- ❌ Incorrect -->
<img src="C:/Users/.../PHOTOS Site/portaitClaire.png">
```

### Vérifier les noms de fichiers

- Les noms de fichiers sont sensibles à la casse sur GitHub
- `portaitClaire.png` ≠ `PortaitClaire.png`
- Vérifiez l'orthographe exacte

---

## 📁 Structure recommandée (optionnel)

Si vous voulez simplifier, vous pouvez créer des dossiers plus simples :

1. Créez un dossier `images/` à la racine
2. Mettez toutes les photos dedans
3. Mettez à jour les chemins dans vos fichiers HTML

Mais ce n'est pas obligatoire, vous pouvez garder les dossiers actuels !
