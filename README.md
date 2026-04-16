# 🎨 Portfolio Personnel - Svelte + Vite

Un portfolio moderne et performant construit avec Svelte et Vite, optimisé pour GitHub Pages.

## 🚀 Démarrage rapide

### Prérequis

- Node.js 16+ et npm (ou yarn/pnpm)

### Installation

```bash
# Cloner le repo (si pas déjà fait)
git clone <ton-repo>
cd portfolio

# Installer les dépendances
npm install
```

### Développement

```bash
# Démarrer le serveur de dev
npm run dev
```

puis visite `http://localhost:5173`

### Build pour production

```bash
# Générer la version optimisée
npm run build

# Prévisualiser la build
npm run preview
```

## 📝 Personnalisation

### 1. **Informations personnelles**

Édite [src/App.svelte](src/App.svelte) pour mettre à jour:

- Ton nom dans la navbar
- Le titre du site

### 2. **Section À propos**

Édite [src/components/About.svelte](src/components/About.svelte) pour:

- Ajouter ta biographie
- Mettre à jour tes intérêts et objectifs

### 3. **Compétences**

Édite [src/components/Skills.svelte](src/components/Skills.svelte):

- Ajoute/supprime des catégories de compétences
- Ajoute tes technologies

### 4. **Projets**

Édite [src/components/Projects.svelte](src/components/Projects.svelte):

- Remplace les projets d'exemple par tes vrais projets
- Ajoute des liens vers GitHub ou démos

### 5. **Expérience**

Édite [src/components/Experience.svelte](src/components/Experience.svelte):

- Ajoute tes expériences professionnelles
- Ajoute tes formations académiques

### 6. **Contact**

Édite [src/components/Contact.svelte](src/components/Contact.svelte):

- Met à jour ton email
- Ajoute tes liens GitHub, LinkedIn, Twitter, etc.

## 🌐 Déploiement sur GitHub Pages

### Option 1: Déploiement automatique (GitHub Actions)

Crée `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
    push:
        branches: ["main"]

jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3

            - name: Setup Node.js
              uses: actions/setup-node@v3
              with:
                  node-version: "18"

            - name: Install dependencies
              run: npm install

            - name: Build
              run: npm run build

            - name: Deploy to GitHub Pages
              uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./dist
```

### Option 2: Déploiement manuel

```bash
# Build
npm run build

# Deploy (nécessite gh-pages)
npm install --save-dev gh-pages

# Puis ajoute dans package.json:
# "deploy": "gh-pages -d dist"

npm run deploy
```

## 🎨 Personnalisation des couleurs

Édite [tailwind.config.js](tailwind.config.js):

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Couleur de fond
      secondary: '#1e293b',    // Couleur des cartes
      accent: '#3b82f6',       // Couleur d'accent
    },
  },
}
```

## 📱 Responsive Design

Le portfolio est entièrement responsive grâce à Tailwind CSS. Teste sur:

- Desktop
- Tablet
- Mobile

## ⚙️ Configuration GitHub Pages

1. Va dans **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` ou `main` (selon ta méthode)
4. **Folder**: `/root` ou `/docs` selon config
5. Clique **Save**

Ton portfolio sera accessible à: `https://[ton-username].github.io/portfolio/`

## 📦 Stack Technique

- **Svelte 4**: Framework réactif léger
- **Vite 5**: Build tool ultra-rapide
- **Tailwind CSS**: Utility-first CSS
- **PostCSS**: Processing CSS
- **Autoprefixer**: Compatibilité navigateurs

## 🔧 Tips & Tricks

- **Changer la base URL**: Édite `base` dans [vite.config.js](vite.config.js)
- **Ajouter des animations**: Inspire-toi de `.animate-fade-in` dans les composants
- **Améliorer les performances**: Tailwind purge auto le CSS non utilisé
- **SEO**: Édite le `<title>` et les `<meta>` dans [index.html](index.html)

## 📄 License

Libre d'utilisation - Modifie comme tu veux!

## 💡 Prochaines étapes

1. ✅ Installer les dépendances: `npm install`
2. ✅ Personnaliser les infos
3. ✅ Tester localement: `npm run dev`
4. ✅ Builder et commit: `git add . && git commit -m "Initial portfolio"`
5. ✅ Déployer sur GitHub Pages
6. ✅ Partagez! 🎉

---

Bon dev! 🚀
