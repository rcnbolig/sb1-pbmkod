import Link from 'next/link'

export default function KoebBolig() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Køb bolig med rcnbolig</h1>
      <p className="mb-6">Lad os hjælpe dig med at finde dit drømmehjem. Vi har et bredt udvalg af boliger og erfarne ejendomsmæglere, der kan guide dig gennem hele købsprocessen.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Søg efter boliger</h2>
          <p className="mb-4">Brug vores avancerede søgefunktion til at finde boliger, der matcher dine kriterier.</p>
          <Link href="/boliger" className="btn-primary">Se boliger til salg</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Få købsrådgivning</h2>
          <p className="mb-4">Book en samtale med en af vores erfarne ejendomsmæglere for personlig rådgivning.</p>
          <Link href="#book-samtale" className="btn-primary">Book en samtale</Link>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sådan hjælper vi dig med at købe bolig</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Vi lytter til dine ønsker og behov for din nye bolig</li>
          <li>Vi finder relevante boliger, der matcher dine kriterier</li>
          <li>Vi arrangerer fremvisninger af de boliger, du er interesseret i</li>
          <li>Vi rådgiver dig om boligens stand, pris og potentiale</li>
          <li>Vi hjælper dig med at forhandle den bedste pris</li>
          <li>Vi guider dig gennem hele købsprocessen, fra bud til overtagelse</li>
        </ol>
      </section>

      <section id="book-samtale">
        <h2 className="text-2xl font-bold mb-4">Book en uforpligtende samtale</h2>
        <p className="mb-4">Udfyld formularen nedenfor, så kontakter vi dig for at aftale et tidspunkt, der passer dig.</p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Navn
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Dit fulde navn" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="din@email.dk" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Telefon
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="12345678" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Besked (valgfri)
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Skriv eventuelle spørgsmål eller kommentarer her..."></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn-primary" type="button">
              Book samtale
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}