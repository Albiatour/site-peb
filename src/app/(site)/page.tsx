import Link from "next/link";
import ParallaxY from '@/components/ParallaxY';

export default function Home() {
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
        {/* Badge agréé */}
        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          ♻️ PEB agréé Région wallonne
        </div>

        <h1 className="text-4xl font-bold text-green-900 mb-4">
          Certificat PEB rapide et fiable en Wallonie
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Certificats pour vente ou location — intervention rapide, rapport clair et conseils personnalisés.
        </p>
      </main>

      {/* SECTION ATOUTS — pleine largeur + parallax + vague */}
      <section className="relative w-full bg-green-50 -mt-10">
        <div
          className="relative z-10 mx-auto max-w-6xl px-6 pt-6 pb-10 md:pt-8 md:pb-12"
          style={{ minHeight: "280px", display: "grid", placeItems: "center" }}
        >
          <ParallaxY amplitude={36}>
            <div className="grid w-full gap-6 md:grid-cols-3">
              {[
                {
                  t: "Rendez-vous sous 3 à 5 jours",
                  d: "Intervention rapide dans tout le territoire wallon",
                },
                {
                  t: "Agréé Région wallonne",
                  d: "Certificateur agréé conformément à la législation wallonne",
                },
                {
                  t: "Conseils concrets pour améliorer votre PEB",
                  d: "Des recommandations personnalisées pour optimiser votre bien",
                },
              ].map((c) => (
                <div key={c.t} className="card">
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              ))}
            </div>
          </ParallaxY>
        </div>

        {/* Vague collée et relevée */}
        <div className="pointer-events-none absolute bottom-[-2px] left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 200"
            className="h-14 w-full md:h-20 lg:h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="#f9fafb"
              d="M0,160L80,154.7C160,149,320,139,480,128C640,117,800,107,960,106.7C1120,107,1280,117,1360,122.7L1440,128V200H1360C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200H0Z"
            />
          </svg>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Comment ça marche */}
        <section className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-16">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-green-200 text-green-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg mb-2">
                Vous prenez contact
              </h3>
              <p className="text-gray-700">
                Remplissez le formulaire en ligne ou contactez-nous directement
              </p>
            </div>
            <div className="card">
              <div className="bg-green-200 text-green-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg mb-2">
                Visite sur place
              </h3>
              <p className="text-gray-700">
                Analyse détaillée de votre bien avec prise de mesures
              </p>
            </div>
            <div className="card">
              <div className="bg-green-200 text-green-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg mb-2">
                Vous recevez votre certificat sous 48h
              </h3>
              <p className="text-gray-700">
                Certificat valide et conforme à la réglementation wallonne
              </p>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-16">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Zones d'intervention</h2>
          <p className="text-gray-700 mb-4">
            Nous intervenons dans toute la Wallonie, avec une disponibilité prioritaire dans les zones suivantes :
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Namur</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Brabant wallon</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Liège</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Hainaut</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Luxembourg</span>
          </div>
        </section>

        {/* AVIS CLIENTS */}
        <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-green-200">
          <h2 className="text-2xl font-bold text-green-900">
            Ce qu'en disent nos clients
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sophie — Namur",
                text: "Service impeccable ! Certificat reçu très rapidement. Explications claires et contact professionnel.",
              },
              {
                name: "Jean-Marc — Brabant wallon",
                text: "Très réactif, ponctuel et sympathique. J'ai pu vendre mon bien sans stress grâce à lui.",
              },
              {
                name: "Isabelle — Liège",
                text: "Un travail précis et des conseils utiles pour améliorer mon PEB. Je recommande vivement !",
              },
            ].map((a) => (
              <div key={a.name} className="card">
                <div className="text-yellow-500 mb-2" aria-hidden>★★★★★</div>
                <p className="italic text-gray-700">"{a.text}"</p>
                <p className="mt-4 font-semibold text-green-800">{a.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
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
