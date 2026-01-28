@echo off
echo ========================================
echo   PARTAGE DU SITE EN TEMPS REEL
echo ========================================
echo.
echo IMPORTANT : Assurez-vous que Live Server est demarre sur le port 5500
echo.
echo Appuyez sur une touche pour continuer...
pause >nul
echo.
echo Demarrage de ngrok...
echo.
echo Une fois lance, vous recevrez une URL publique a partager avec Claire
echo Exemple : https://abc123.ngrok.io
echo.
echo Appuyez sur Ctrl+C pour arreter le partage
echo.
ngrok http 5500
