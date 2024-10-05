import Link from 'next/link'
import Image from 'next/image'

// Mock data for properties
const properties = [
  {
    id: 1,
    title: 'Moderne villa i Nordsjælland',
    address: 'Skovvej 123, 3480 Fredensborg',
    price: 4995000,
    size: 180,
    rooms: 5,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Charmerende lejlighed i Københavns centrum',
    address: 'Nørregade 45, 1165 København K',
    price: 3250000,
    size: 85,
    rooms: 3,
    type: 'Lejlighed',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Rummelig familievilla i Aarhus',
    address: 'Skovbrynet 78, 8000 Aarhus C',
    price: 5750000,
    size: 210,
    rooms: 6,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  // Add more properties as needed
]

export default function Boliger() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Boliger til salg</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Link href={`/boliger/${property.id}`} key={property.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
                <p className="text-gray-600 mb-2">{property.address}</p>
                <p className="text-lg font-bold mb-2">{property.price.toLocaleString()} kr.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.size} m²</span>
                  <span>{property.rooms} værelser</span>
                  <span>{property.type}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}