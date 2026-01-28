# Guide : Partager le site en temps réel

Ce guide vous explique comment partager votre site local avec Claire pour qu'elle puisse le voir en temps réel.

## Option 1 : Utiliser ngrok (Recommandé - Le plus simple)

### Installation
1. Téléchargez ngrok depuis : https://ngrok.com/download
2. Décompressez le fichier
3. Ajoutez ngrok à votre PATH Windows ou placez-le dans un dossier accessible

### Utilisation
1. Démarrez votre serveur local (Live Server sur le port 5500)
2. Ouvrez un terminal PowerShell ou CMD
3. Exécutez la commande :
```bash
ngrok http 5500
```

4. Ngrok vous donnera une URL publique (ex: `https://abc123.ngrok.io`)
5. Partagez cette URL avec Claire
6. Elle pourra voir le site en temps réel !

### Avantages
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ Très simple à utiliser
- ✅ Mise à jour en temps réel

---

## Option 2 : Utiliser LocalTunnel (Alternative gratuite)

### Installation
```bash
npm install -g localtunnel
```

### Utilisation
1. Démarrez votre serveur local (port 5500)
2. Dans un terminal, exécutez :
```bash
lt --port 5500
```

3. Vous recevrez une URL publique à partager

---

## Option 3 : Utiliser VS Code Live Share (Si Claire a VS Code)

1. Installez l'extension "Live Share" dans VS Code
2. Cliquez sur "Share" dans la barre d'état
3. Partagez le lien avec Claire
4. Elle pourra voir et même éditer en temps réel

---

## Option 4 : Utiliser serveo.net (Sans installation)

1. Démarrez votre serveur local (port 5500)
2. Dans un terminal, exécutez :
```bash
ssh -R 80:localhost:5500 serveo.net
```

3. Vous recevrez une URL publique

---

## Script automatique pour Windows

Créez un fichier `partager-site.bat` dans le dossier du projet :

```batch
@echo off
echo Démarrage du partage du site...
echo.
echo Assurez-vous que Live Server est démarré sur le port 5500
echo.
pause
ngrok http 5500
pause
```

Double-cliquez sur le fichier pour lancer le partage automatiquement.

---

## Recommandation

**Utilisez ngrok** - C'est la solution la plus simple et la plus fiable pour partager votre site local en temps réel avec Claire.

Une fois ngrok lancé, vous obtiendrez une URL comme :
- `https://abc123-def456.ngrok.io`

Cette URL sera accessible depuis n'importe où et se mettra à jour automatiquement quand vous modifiez le site !
