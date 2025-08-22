"use client";
import Wrapper from "../components/Wrapper";

export default function Guide() {
  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Guide d&apos;utilisation Mbombu</h1>
      
       {/* Section Catégories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🏷️</span>Etape 1 : Créer vos Catégories
          </h2>
          <div className="bg-base-200 rounded-lg p-6">
            <p className="mb-4">Optimisez votre classification :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Créez et gérez vos catégories</li>
              <li>Associez des produits aux catégories</li>
              <li>Visualisez les statistiques par catégorie</li>
              <li>Facilitez la recherche de produits</li>
            </ul>
          </div>
        </section>
        {/* Section Produits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📦</span>Etape 2 :  Créer et gérer vos Produits
          </h2>
          <div className="bg-base-200 rounded-lg p-6">
            <p className="mb-4">Comment gérer votre inventaire ? :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultez la liste complète des produits</li>
              <li>Ajoutez de nouveaux produits avec images</li>
              <li>Modifiez les informations des produits existants</li>
              <li>Suivez les niveaux de stock en temps réel</li>
            </ul>
          </div>
        </section>

 {/* Section Produits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📦</span>Etape 3 :  Gestion des Produits
          </h2>
          <div className="bg-base-200 rounded-lg p-6">
            <p className="mb-4">Comment gérer votre inventaire ? :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultez la liste complète des produits</li>
              <li>Ajoutez de nouveaux produits avec images</li>
              <li>Modifiez les informations des produits existants</li>
              <li>Suivez les niveaux de stock en temps réel</li>
            </ul>
          </div>
        </section>

       

        {/* Section Transactions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>Etape 4 :  Suivi des Transactions
          </h2>
          <div className="bg-base-200 rounded-lg p-6">
            <p className="mb-4">Gérez vos mouvements de stock :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enregistrez les entrées via &quot;Alimenter le stock&quot;</li>
              <li>Gérez les sorties avec l&quot;interface &quot;Donner&quot;</li>
              <li>Consultez l&apos;historique des transactions</li>
              <li>Analysez les tendances d&apos;utilisation</li>
            </ul>
          </div>
        </section>

        {/* Section Dashboard */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🏠</span>Etape 5 : Consulter le Tableau de Bord
          </h2>
          <div className="bg-base-200 rounded-lg p-6">
            <p className="mb-4">Votre point de départ pour gérer votre stock :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vue d&apos;ensemble des produits en stock</li>
              <li>Graphiques interactifs par catégorie</li>
              <li>Dernières transactions effectuées</li>
              <li>État des stocks en temps réel</li>
            </ul>
          </div>
        </section>



        {/* Astuces */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>Petites Astuces :
          </h2>
          <div className="bg-base-200 rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilisez la barre de recherche pour trouver rapidement des produits</li>
              <li>Consultez régulièrement le tableau de bord pour une vue d&apos;ensemble</li>
              <li>Mettez à jour les stocks dès qu&apos;un mouvement est effectué</li>
              <li>Vérifiez l&apos;historique des transactions pour le suivi</li>
            </ul>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
