import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary text-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">Bienvenue sur TITOMEET</h1>
        <p className="text-lg mb-8">
          Planifiez, organisez et participez à des événements inoubliables ! TITOMEET vous permet de vous connecter avec des communautés, de découvrir des opportunités et de créer des moments uniques ensemble.
        </p>
        <div className="flex justify-center gap-4">

          <Link href="/confidentiality">
            <button className="bg-[#EE3540] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
              Politique de Confidentialité
            </button>
          </Link>

          <a href="/terms">
            <button className="bg-[#28B0E6] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
              Conditions Générales
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}
