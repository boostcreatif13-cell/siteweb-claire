# Site Web Claire Stehlin

Site web professionnel et dynamique pour Claire Stehlin - Assistante virtuelle / Bras droit organisationnel pour artisans du bâtiment et artisans de services.

## 🎨 Caractéristiques

- **Design moderne et élégant** avec animations fluides
- **100% responsive** - S'adapte à tous les écrans
- **Animations dynamiques** - Effets de parallaxe, particules animées, transitions
- **Performance optimisée** - Chargement rapide et fluide
- **Accessibilité** - Navigation au clavier et structure sémantique

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique moderne
- **CSS3** - Animations, transitions, gradients
- **JavaScript (Vanilla)** - Interactions dynamiques sans dépendances

## 📁 Structure du Projet

```
.
├── index.html      # Page principale
├── styles.css      # Styles et animations
├── script.js       # Interactions JavaScript
└── README.md       # Documentation
```

## 🎯 Fonctionnalités

### Animations & Effets
- ✨ Particules animées en arrière-plan
- 🎭 Animations au scroll (AOS)
- 🌊 Effet parallaxe sur le hero
- 💫 Transitions fluides sur tous les éléments
- 🎨 Effets hover interactifs
- 📱 Menu hamburger responsive

### Sections
1. **Hero** - Section d'accueil avec titre animé
2. **Problèmes** - Présentation des problèmes résolus
3. **Services** - Liste des services proposés
4. **Témoignage** - Citation client
5. **Prestations** - Offres Fondations et Sérénité
6. **Pourquoi** - Avantages de déléguer
7. **Contact** - Formulaire de contact

## 🎨 Palette de Couleurs

- **Primaire** : `#b56139` (Orange/Brun brûlé)
- **Secondaire** : `#56463b` (Brun foncé)
- **Accent** : `#cfc6be` (Beige/Gris clair)
- **Fond** : `#f7f5f2` (Blanc cassé)
- **Texte** : `#0f0f0f` (Noir)

## 🛠️ Installation & Utilisation

1. Ouvrir le projet dans VSCode
2. Ouvrir `index.html` dans un navigateur
3. Ou utiliser un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   ```

## 📱 Responsive Design

Le site s'adapte automatiquement à :
- 📱 Mobile (< 480px)
- 📱 Tablette (768px)
- 💻 Desktop (> 768px)

## ⚡ Performance

- Images optimisées (lazy loading)
- CSS minifié (à faire en production)
- JavaScript optimisé
- Animations performantes avec GPU acceleration

## 🔧 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #b56139;
    --secondary-color: #56463b;
    /* ... */
}
```

### Ajouter des animations
Utiliser les attributs `data-aos` dans le HTML :
```html
<div data-aos="fade-up" data-aos-delay="100">
    Contenu animé
</div>
```

## 📝 Notes

- Le formulaire de contact nécessite une intégration backend
- Les images peuvent être ajoutées dans un dossier `images/`
- Optimiser les images avant utilisation (WebP recommandé)

## 🌟 Fonctionnalités Futures Possibles

- [ ] Intégration d'un CMS
- [ ] Blog section
- [ ] Calendrier de réservation
- [ ] Chat en direct
- [ ] Multilingue (FR/EN)

---

**Créé avec ❤️ pour Claire Stehlin**
