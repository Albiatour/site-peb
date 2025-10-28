import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-green-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold text-green-900">PEB Wallonie</Link>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-green-700 underline">Accueil</Link>
              <Link href="/services" className="text-gray-700 hover:text-green-700 underline">Services</Link>
              <Link href="/a-propos" className="text-gray-700 hover:text-green-700 underline">À propos</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-700 underline">Contact</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-700 underline">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-green-900 mb-12">
          Guides PEB
        </h1>
        
        <div className="space-y-8">
          {/* Article 1 */}
          <article className="card">
            <h2 className="text-2xl font-bold mb-3">
              Prix et délais d'un certificat PEB en Wallonie
            </h2>
            <p className="text-gray-700 mb-4">
              Guide complet sur les tarifs des certificats PEB en Wallonie. Facteurs influençant le prix, délais d'intervention et remise du certificat. Informations à jour sur la réglementation wallonne.
            </p>
            <p className="text-gray-700 mb-6">
              Prix variables selon la superficie et la complexité du bien. Délai moyen de 3 à 5 jours ouvrés pour la visite, certificat remis sous 48h.
            </p>
            <button className="text-green-600 font-semibold hover:underline hover:text-green-700">
              Lire l'article →
            </button>
          </article>

          {/* Article 2 */}
          <article className="card">
            <h2 className="text-2xl font-bold mb-3">
              Quels documents préparer pour un certificat PEB ?
            </h2>
            <p className="text-gray-700 mb-4">
              Liste des documents nécessaires pour votre certificat PEB. Titre de propriété, cadastre, attestations de travaux... Découvrez comment bien vous préparer pour faciliter la certification.
            </p>
            <p className="text-gray-700 mb-6">
              Certains documents peuvent être récupérés par le certificateur lors de la visite. Préparer à l'avance accélère le processus.
            </p>
            <button className="text-green-600 font-semibold hover:underline hover:text-green-700">
              Lire l'article →
            </button>
          </article>

          {/* Article 3 */}
          <article className="card">
            <h2 className="text-2xl font-bold mb-3">
              Comment améliorer son score PEB avant la visite ?
            </h2>
            <p className="text-gray-700 mb-4">
              Conseils pratiques pour améliorer votre score PEB sans travaux lourds. Isolation, chauffage, ventilation : les actions rapides et efficaces pour optimiser vos performances énergétiques.
            </p>
            <p className="text-gray-700 mb-6">
              Un meilleur score PEB peut augmenter la valeur de votre bien et réduire vos futures factures énergétiques.
            </p>
            <button className="text-green-600 font-semibold hover:underline hover:text-green-700">
              Lire l'article →
            </button>
          </article>
        </div>
      </main>
    </div>
  );
}
