# Guide Live Server dans VSCode

## 🚨 Problème : Live Server n'apparaît plus en bas

### Solution 1 : Réinstaller l'extension Live Server

1. **Ouvrir le panneau des extensions** :
   - Appuyez sur `Ctrl + Shift + X` (ou `Cmd + Shift + X` sur Mac)
   - Ou cliquez sur l'icône d'extensions dans la barre latérale gauche

2. **Rechercher "Live Server"** :
   - Tapez "Live Server" dans la barre de recherche
   - Cherchez l'extension par **Ritwick Dey**

3. **Réinstaller** :
   - Si elle est déjà installée, cliquez sur l'engrenage ⚙️ puis "Désinstaller"
   - Puis cliquez sur "Installer"
   - Redémarrez VSCode

### Solution 2 : Vérifier la barre de statut

1. **Regardez en bas à droite** de VSCode
2. Vous devriez voir **"Go Live"** ou un bouton avec un globe 🌐
3. Si vous ne le voyez pas, cliquez sur la barre de statut (en bas) et cherchez "Live Server"

### Solution 3 : Utiliser la palette de commandes

1. Appuyez sur `Ctrl + Shift + P` (ou `Cmd + Shift + P` sur Mac)
2. Tapez "Live Server: Open with Live Server"
3. Sélectionnez la commande

### Solution 4 : Clic droit sur index.html

1. Faites un **clic droit** sur `index.html` dans l'explorateur
2. Sélectionnez **"Open with Live Server"**

### Solution 5 : Alternative - Utiliser un serveur local

Si Live Server ne fonctionne toujours pas, vous pouvez utiliser :

#### Option A : Python (si installé)
```bash
# Dans le terminal VSCode (Ctrl + `)
python -m http.server 8000
```
Puis ouvrez : `http://localhost:8000`

#### Option B : Node.js (si installé)
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
http-server -p 8000
```

#### Option C : Extension "Preview" intégrée
1. Installez l'extension "Preview" de VSCode
2. Clic droit sur `index.html` → "Open Preview"

### Solution 6 : Vérifier les paramètres VSCode

J'ai créé un fichier `.vscode/settings.json` avec les paramètres recommandés pour Live Server.

### 🔧 Commandes utiles

- **Démarrer Live Server** : `Ctrl + Shift + P` → "Live Server: Open with Live Server"
- **Arrêter Live Server** : `Ctrl + Shift + P` → "Live Server: Stop Live Server"
- **Rafraîchir** : Le navigateur se rafraîchit automatiquement quand vous sauvegardez

### 📝 Note

Si rien ne fonctionne, essayez de :
1. Redémarrer VSCode complètement
2. Vérifier que vous êtes dans le bon dossier (celui contenant `index.html`)
3. Réinstaller VSCode si nécessaire

---

**Astuce** : Une fois Live Server démarré, vous verrez l'URL dans la barre de statut en bas (ex: `http://127.0.0.1:5500`)
