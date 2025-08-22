# Asso-Stock - Application de Gestion de Stock pour Associations

## 📝 Description

Asso-Stock est une application web moderne construite avec Next.js 15.3 qui permet aux associations de gérer efficacement leur inventaire et leurs transactions. L'application offre une interface utilisateur intuitive pour gérer les produits, les catégories et suivre les mouvements de stock.

## 🚀 Fonctionnalités

- **Authentification Sécurisée**
  - Système d'authentification intégré avec Clerk
  - Pages de connexion et d'inscription personnalisées

- **Gestion des Produits**
  - Ajout de nouveaux produits avec images
  - Modification des informations produits
  - Suivi des quantités en stock
  - Vue détaillée des produits

- **Gestion des Catégories**
  - Organisation des produits par catégories
  - Tableaux de bord par catégorie
  - Statistiques visuelles (avec Recharts)

- **Transactions**
  - Enregistrement des entrées et sorties de stock
  - Historique des transactions
  - Vue d'ensemble des mouvements récents

- **Interface Responsive**
  - Design moderne avec Tailwind CSS et DaisyUI
  - Expérience utilisateur optimisée

## 🏗 Architecture Technique

### Technologies Principales

- **Frontend**: Next.js 15.3, React 19
- **Base de données**: SQLite avec Prisma ORM
- **UI**: Tailwind CSS, DaisyUI
- **Authentification**: Clerk
- **Graphiques**: Recharts

### Structure de la Base de Données

- **Association**: Entité principale représentant l'organisation
- **Product**: Gestion des produits avec leurs caractéristiques
- **Category**: Classification des produits
- **Transaction**: Suivi des mouvements de stock

## 🛠 Installation

1. Cloner le projet

```bash
git clone [url-du-repo]
cd asso-stock
```

1. Installer les dépendances

```bash
pnpm install
```

1. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Remplir les variables nécessaires dans .env

1. Initialiser la base de données

```bash
pnpm prisma generate
pnpm prisma migrate dev
```

1. Lancer l'application en développement

```bash
pnpm dev
```

## 📱 Pages Principales et Parcours Utilisateur

### 🏠 Dashboard Principal (/)
Le tableau de bord offre une vue d'ensemble complète de votre stock :

- **Vue générale des produits** : Statistiques et indicateurs clés
- **Graphiques par catégorie** : Visualisation de la répartition du stock
- **Transactions récentes** : Aperçu des derniers mouvements
- **Tableau récapitulatif** : État actuel des stocks par produit

### 📦 Gestion des Produits (/products)
Page centrale pour la gestion de l'inventaire :
- Liste complète des produits avec filtres et recherche
- Informations détaillées : nom, description, prix, quantité
- Actions rapides : modifier, supprimer, voir les détails
- Indicateurs visuels de niveau de stock

### ➕ Ajout de Produit (/new-product)
Interface intuitive pour l'ajout de nouveaux articles :
- Formulaire structuré pour les informations produit
- Upload d'images avec prévisualisation
- Sélection de catégorie avec possibilité d'en créer
- Configuration du stock initial

### 🏷️ Gestion des Catégories (/category)
Organisation et suivi par catégorie :
- Vue d'ensemble des catégories existantes
- Statistiques par catégorie
- Création et modification des catégories
- Association des produits aux catégories

### 📊 Historique des Transactions (/transactions)
Suivi détaillé des mouvements de stock :
- Journal chronologique des entrées/sorties
- Filtres par date, type et produit
- Détails des modifications de stock
- Export des données de transactions

### 📤 Interface de Sortie (/give)
Gestion simplifiée des sorties de stock :
- Sélection rapide des produits
- Ajustement des quantités
- Validation en un clic
- Confirmation immédiate des sorties

### 📚 Guide d'Utilisation (/guide)
Documentation interactive de l'application :
- Présentation des fonctionnalités principales
- Instructions détaillées par section
- Astuces d'utilisation
- Guide pas à pas du workflow

## 🔐 Sécurité

- Authentification sécurisée via Clerk
- Protection des routes
- Validation des données côté serveur

## 🔄 Workflow des Transactions

1. Création d'un produit avec quantité initiale
2. Enregistrement des entrées/sorties via les transactions
3. Mise à jour automatique des quantités en stock
4. Historique complet des mouvements

## 📊 Fonctionnalités de Reporting

- Graphiques de stock par catégorie
- Tableau récapitulatif des stocks
- Historique des transactions récentes
- Vue d'ensemble de l'état du stock;
