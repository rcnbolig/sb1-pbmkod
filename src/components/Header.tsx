import Link from 'next/link'
import { Home } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Home size={24} className="text-blue-600" />
          <span className="text-xl font-bold text-gray-800">rcnbolig</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/saelg-bolig" className="text-gray-600 hover:text-blue-600">Sælg bolig</Link></li>
            <li><Link href="/koeb-bolig" className="text-gray-600 hover:text-blue-600">Køb bolig</Link></li>
            <li><Link href="/boliger" className="text-gray-600 hover:text-blue-600">Boliger til salg</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header