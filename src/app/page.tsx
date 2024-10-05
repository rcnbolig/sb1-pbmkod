import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Moderne hjem"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
              Find dit drømmehjem med rcnbolig
            </h1>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Vores services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sælg din bolig</h3>
            <p className="mb-4">Få en gratis salgsvurdering og professionel rådgivning til at sælge din bolig.</p>
            <Link href="/saelg-bolig" className="btn-primary">Få en vurdering</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Køb en bolig</h3>
            <p className="mb-4">Lad os hjælpe dig med at finde den perfekte bolig, der passer til dine behov og ønsker.</p>
            <Link href="/koeb-bolig" className="btn-primary">Se boliger til salg</Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Hvorfor vælge rcnbolig?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Over 20 års erfaring i ejendomsmarkedet</li>
          <li>Personlig og professionel rådgivning</li>
          <li>Stort netværk af potentielle købere</li>
          <li>Moderne markedsføringsstrategier</li>
          <li>Dedikeret team af eksperter</li>
        </ul>
      </section>
    </div>
  )
}