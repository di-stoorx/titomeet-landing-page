import Head from 'next/head'
import Link from 'next/link'

export default function ConfidentialityPage() {
    return (
        <>
            <Head>
                <title>Politique de Confidentialité | TITOMEET</title>
                <meta
                    name="description"
                    content="Politique de confidentialité conforme au RGPD pour TITOMEET. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles."
                />
            </Head>

            <main className="min-h-screen text-white py-10 max-w-full">
                <div className="max-w-[80%] mx-auto">
                    <h1 className="text-4xl font-bold mb-2">Politique de Confidentialité</h1>
                    <p className="text-white/70 mb-8">{`Dernière mise à jour : 18 juin 2025`}</p>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">1. Responsable du Traitement</h2>
                        <p className="text-white/90 text-justify">
                            {`TITOMEET, édité par Optimatech, est responsable du traitement des données conformément au Règlement Général sur la Protection des Données (RGPD).`}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">2. Données Collectées & Base Légale</h2>
                        <table className="w-full border-collapse text-white/90 mb-4">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left py-2">Type de Donnée</th>
                                    <th className="text-left py-2">Utilisation</th>
                                    <th className="text-left py-2">Base Légale (Art. 6 RGPD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-3">Informations compte (nom, email, téléphone)</td>
                                    <td>Inscription, sécurisation du compte</td>
                                    <td>Nécessité contractuelle</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-3">{`Photos & médias (via accès à la galerie)`}</td>
                                    <td>Personnalisation de votre profil, partage dans l’application</td>
                                    <td>Consentement explicite</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-3">Données techniques (ID appareil, IP)</td>
                                    <td>Sécurité, analytics, prévention des fraudes</td>
                                    <td>Intérêt légitime</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-white/80 mt-2 text-sm">
                            {`⚠️ Aucune donnée de localisation continue : l’application n’utilise que les médias via permissions Android/IOS (pas de suivi caméra, pas d’audio).`}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">3. Permissions Utilisées</h2>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>Accès à la galerie photo : pour partager vos images avec vos amis et vos événements</li>
                            <li>Lecture/écriture du stockage : pour charger et sauvegarder vos fichiers médias</li>
                            <li>Accès à la localisation des médias : uniquement pour enrichir vos contenus (facultatif)</li>
                            <li>Pas d’accès à la caméra ni au micro</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">4. Conservation des Données</h2>
                        <ul className="list-disc pl-5 text-white/90 space-y-1">
                            <li>{`Compte actif : données conservées jusqu’à suppression volontaire`}</li>
                            <li>Médias supprimés : effacés définitivement des serveurs</li>
                            <li>{`Obligations légales : jusqu’à 10 ans (ex. documents fiscaux)`}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">5. Vos Droits RGPD</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-medium mb-2">Accès & Portabilité</h3>
                                <p className="text-sm text-white/80">Obtenez une copie de vos données en format lisible</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-medium mb-2">Rectification</h3>
                                <p className="text-sm text-white/80">Corrigez vos informations erronées</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-medium mb-2">Suppression</h3>
                                <p className="text-sm text-white/80">Supprimez définitivement votre compte</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg">
                                <h3 className="font-medium mb-2">Opposition</h3>
                                <p className="text-sm text-white/80">Limitez ou refusez certains traitements</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
                        <p className="text-white/90">
                            Pour toute demande, contactez notre DPO : <span className="underline">privacy@titomeet.com</span>
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
