import Link from "next/link";

export default function Contact() {
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
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Contact et devis
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Besoin d'un certificat PEB pour votre bien situé en Wallonie ? Remplissez le formulaire ci-dessous ou contactez-moi directement.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Formulaire */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-6">Formulaire de contact</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/30"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/30"
                />
              </div>
              <div>
                <label htmlFor="commune" className="block text-sm font-medium text-gray-700 mb-2">
                  Commune
                </label>
                <input
                  type="text"
                  id="commune"
                  name="commune"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/30"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de bien
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/30"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-600/20 transition"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact direct */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Contact direct</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Téléphone :</strong><br />
                  <a href="tel:+32[À compléter]" className="text-green-600 hover:underline">
                    [À compléter]
                  </a>
                </p>
                <p>
                  <strong>WhatsApp :</strong><br />
                  <a href="https://wa.me/[À compléter]" className="text-green-600 hover:underline">
                    [À compléter]
                  </a>
                </p>
                <p>
                  <strong>Email :</strong><br />
                  <a href="mailto:[À compléter]" className="text-green-600 hover:underline">
                    [À compléter]
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Zones desservies</h2>
              <p className="text-gray-700 mb-3">
                Intervention dans toutes les communes wallonnes, avec priorité pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Namur et ses environs</li>
                <li>Liège et ses environs</li>
                <li>Charleroi et le Hainaut</li>
                <li>Nivelles et le Brabant wallon</li>
                <li>Arlon et le Luxembourg</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Horaires :</strong> Lundi - Vendredi 8h-18h<br />
                Interventions possibles le samedi sur demande
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
