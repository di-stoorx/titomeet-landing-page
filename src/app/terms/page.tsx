import Head from 'next/head'
import Link from 'next/link'

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Conditions Générales | TITOMEET</title>
                <meta
                    name="description"
                    content="Conditions légales d'utilisation de TITOMEET : obligations des utilisateurs, conformité européenne et règlement des litiges."
                />
            </Head>

            <main className="min-h-screen text-white py-10 max-w-full">
                <div className="max-w-[80%] mx-auto">
                    <h1 className="text-4xl font-bold mb-2">{`Conditions Générales d’Utilisation`}</h1>
                    <p className="text-white/70 mb-8">{`Dernière mise à jour : 18 juin 2025`}</p>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">1. Accord Légal</h2>
                        <p className="text-white/90 text-justify">
                            {`En accédant ou en utilisant `}
                            <strong>TITOMEET</strong>
                            {` (le « Service »), vous acceptez les présentes Conditions, conclues avec `}
                            <strong>Optimatech</strong>
                            {`. Si vous refusez, vous devez cesser immédiatement toute utilisation.`}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">2. Éligibilité</h2>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>{`Avoir `}<strong>au moins 18 ans</strong>{` (ou l’âge légal dans votre pays).`}</li>
                            <li>Capacité légale à conclure un contrat.</li>
                            <li>{`Interdit aux personnes ou entités sanctionnées par le droit de l’UE.`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">3. Création de Compte</h2>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>{`Fournir des informations `}<strong>exactes et à jour</strong>{`.`}</li>
                            <li>Protéger la confidentialité de vos identifiants.</li>
                            <li>{`Vous êtes `}<strong>responsable</strong>{` de toutes les activités sous votre compte.`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">4. Utilisation Acceptable</h2>
                        <h3 className="text-xl font-medium mt-4 mb-2">{`Il est interdit de :`}</h3>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>
                                {`Publier du contenu :`}
                                <ul className="list-disc pl-5 mt-1">
                                    <li>Illégal (ex. haine, exploitation d’enfants)</li>
                                    <li>Frauduleux ou trompeur</li>
                                    <li>Violant des droits d’auteur ou marques déposées</li>
                                </ul>
                            </li>
                            <li>Utiliser des bots pour extraire des données ou simuler des interactions.</li>
                            <li>Détourner des restrictions géographiques ou systèmes de sécurité.</li>
                            <li>Harceler ou menacer d’autres utilisateurs.</li>
                        </ul>
                        <p className="text-white/90 mt-2">
                            {`Toute violation peut entraîner `}
                            <strong>suppression immédiate du compte</strong>
                            {` et signalement légal conformément à la Directive européenne DSA.`}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">5. Propriété du Contenu</h2>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>Vous conservez vos droits sur vos contenus publiés.</li>
                            <li>En publiant, vous nous accordez une licence <strong>non exclusive, mondiale</strong> pour afficher votre contenu dans le cadre du Service.</li>
                            <li>Signalez toute violation : <span className="underline">copyright@titomeet.com</span>.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">6. Données &amp; Vie Privée</h2>
                        <p className="text-white/90">
                            {`Notre traitement des données est conforme au `}
                            <strong>RGPD</strong>
                            {`. Consultez notre `}
                            <Link href="/confidentiality" className="underline hover:text-white/70">
                                Politique de Confidentialité
                            </Link>
                            {`.`}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">7. Modifications du Service</h2>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>Nous pouvons mettre à jour ou interrompre certaines fonctionnalités avec <strong>préavis de 30 jours</strong>.</li>
                            <li>Tout changement tarifaire pour services premium sera annoncé avant renouvellement.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">8. Exclusions de Responsabilité</h2>
                        <p className="text-white/90">
                            {`Le Service est fourni `}
                            <strong>« tel quel »</strong>
                            {`, sans garantie légale ou implicite, sauf obligations prévues par la loi.`}
                        </p>
                    </section>

                    {/* <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">9. Limitation de Responsabilité</h2>
            <p className="text-white/90">
              Notre responsabilité est limitée à <strong>500 €</strong> ou au montant payé sur 12 derniers mois, sauf négligence grave.
            </p>
          </section> */}

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">9. Loi Applicable</h2>
                        <p className="text-white/90">
                            {`Les présentes conditions sont régies par le droit français. Les litiges relèvent des juridictions françaises, après tentative de médiation via la `}
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                className="underline hover:text-white/70"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                plateforme ODR de l&apos;UE
                            </a>
                            {`.`}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
                        <p className="text-white/90">
                            {`Pour toute question juridique ou signalement :`}
                            <br />
                            <strong>Email :</strong> legal@titomeet.com
                        </p>
                    </section>

                    <div className="mt-10">
                        <Link href="/">
                            <span className="underline hover:text-white/70">← Retour à l&apos;accueil</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
