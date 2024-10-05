const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Om rcnbolig</h3>
            <p className="text-sm">rcnbolig er din pålidelige partner i ejendomshandel. Vi hjælper dig med at finde dit drømmehjem eller sælge din nuværende bolig.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-sm">Telefon: +45 12 34 56 78</p>
            <p className="text-sm">Email: info@rcnbolig.dk</p>
            <p className="text-sm">Adresse: Hovedgaden 123, 1234 København</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Følg os</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">Facebook</a>
              <a href="#" className="text-white hover:text-blue-400">Instagram</a>
              <a href="#" className="text-white hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 rcnbolig. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer