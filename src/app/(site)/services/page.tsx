import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Nos services PEB en Wallonie
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          En tant que certificateur agréé, nous réalisons tous types de certificats PEB pour vos biens situés en Wallonie.
        </p>

        {/* Services */}
        <div className="space-y-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              PEB pour la vente
            </h2>
            <p className="text-gray-700 mb-3">
              Le certificat PEB est obligatoire pour toute vente de bien immobilier en Wallonie. Il informe l'acheteur sur les performances énergétiques du bien et ses émissions de CO2.
            </p>
            <p className="text-gray-700">
              <strong>Documents nécessaires :</strong> titre de propriété, plan de cadastre, attestations de construction/rénovation le cas échéant.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              PEB pour la location
            </h2>
            <p className="text-gray-700 mb-3">
              Si vous louez un bien, vous devez disposer d'un certificat PEB valide. Ce certificat permet au locataire de connaître la consommation énergétique attendue.
            </p>
            <p className="text-gray-700">
              <strong>Documents nécessaires :</strong> contrat de bail ou titre de propriété, plans du bien.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Audit ou conseils énergétiques
            </h2>
            <p className="text-gray-700">
              Au-delà du certificat obligatoire, nous pouvons vous proposer des recommandations détaillées pour améliorer les performances énergétiques de votre bien. Analyse des ponts thermiques, conseils d'isolation, proposition de solutions durables.
            </p>
          </div>
        </div>

        {/* Tarifs */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-16">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Tarifs indicatifs</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-green-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold">Type de bien</th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold">Tarif indicatif</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-100">
                  <td className="py-3 px-4 text-gray-700">Appartement</td>
                  <td className="py-3 px-4 text-gray-700">À partir de 150€</td>
                </tr>
                <tr className="border-b border-green-100">
                  <td className="py-3 px-4 text-gray-700">Maison</td>
                  <td className="py-3 px-4 text-gray-700">À partir de 200€</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Autre</td>
                  <td className="py-3 px-4 text-gray-700">Devis sur mesure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            * Tarifs variables selon la superficie et la complexité du bien
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100 mb-16">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Questions fréquentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Combien de temps pour recevoir mon certificat ?
              </h3>
              <p className="text-gray-700">
                Vous recevez votre certificat PEB dans les 48 heures suivant la visite sur place. Le délai moyen entre la prise de contact et la remise du certificat est de 3 à 5 jours ouvrés.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Quels documents dois-je fournir ?
              </h3>
              <p className="text-gray-700">
                Les documents essentiels sont : le titre de propriété, le cadastre, et toute attestation de travaux effectués (isolation, remplacement de chaudière, etc.). Si certains documents manquent, nous pouvons nous en charger lors de la visite.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Mon certificat est-il valable pour la vente et la location ?
              </h3>
              <p className="text-gray-700">
                Oui, un même certificat PEB est valable pour la vente et la location. Sa durée de validité est de 10 ans, sauf en cas de travaux importants modifiant les performances énergétiques.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Comment améliorer mon score PEB ?
              </h3>
              <p className="text-gray-700">
                Le certificat PEB inclut des recommandations personnalisées. Les actions les plus efficaces concernent généralement l'isolation (toit, murs, sols), le remplacement du système de chauffage, et l'installation d'une ventilation performante.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
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
