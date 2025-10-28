import Link from "next/link";

export default function About() {
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
        <h1 className="text-4xl font-bold text-green-900 mb-8">
          À propos
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-12">
          <div className="bg-green-100 p-6 rounded-lg border border-green-200 mb-6">
            <p className="text-lg text-gray-700 mb-6">
              Je suis certificateur PEB agréé par la Région wallonne depuis plusieurs années. Je réalise vos certificats avec rigueur, clarté et pédagogie dans toute la Wallonie.
            </p>
            
            <p className="text-gray-700">
              Mon engagement : vous fournir un service rapide, professionnel et compréhensible. Chaque certificat est l'occasion de vous apporter des conseils concrets pour améliorer les performances énergétiques de votre bien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg">Fiabilité</h3>
              <p className="text-gray-700 text-sm">
                Certificats conformes à la réglementation wallonne
              </p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg">Clarté</h3>
              <p className="text-gray-700 text-sm">
                Rapports détaillés et conseils facilement compréhensibles
              </p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg">Réactivité</h3>
              <p className="text-gray-700 text-sm">
                Intervention rapide et remise sous 48h
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Certification et agrément
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Numéro d'agrément :</strong> [À compléter]
            </p>
            <p>
              <strong>Organisme de certification :</strong> Région wallonne
            </p>
            <p>
              <strong>Zones d'intervention :</strong> Toute la Wallonie (Namur, Liège, Hainaut, Luxembourg, Brabant wallon)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-green-600 px-8 py-4 text-white font-semibold shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-600/20 transition"
          >
            Demander un devis
          </Link>
        </div>
      </main>
    </div>
  );
}
