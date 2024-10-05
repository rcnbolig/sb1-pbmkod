import Image from 'next/image'
import Link from 'next/link'

// Mock data for a single property (in a real application, this would come from an API or database)
const property = {
  id: 1,
  title: 'Moderne villa i Nordsjælland',
  address: 'Skovvej 123, 3480 Fredensborg',
  price: 4995000,
  size: 180,
  rooms: 5,
  type: 'Villa',
  description: 'Denne smukke moderne villa er beliggende i et eftertragtet område i Nordsjælland. Med sine 180 kvadratmeter og 5 værelser er der god plads til hele familien. Villaen byder på et stort, lyst køkken-alrum, en hyggelig stue med pejs, og en privat have med terrasse.',
  features: [
    'Moderne køkken med højkvalitets hvidevarer',
    'Gulvvarme i hele huset',
    'Dobbelt garage',
    'Sydvendt terrasse',
    'Tæt på skole og indkøbsmuligheder'
  ],
  images: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  ]
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the property data based on the ID
  // For now, we'll just use our mock data
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-xl text-gray-600 mb-4">{property.address}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src={property.images[0]}
            alt={property.title}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-2xl font-bold mb-4">{property.price.toLocaleString()} kr.</p>
          <ul className="space-y-2">
            <li><strong>Boligareal:</strong> {property.size} m²</li>
            <li><strong>Antal værelser:</strong> {property.rooms}</li>
            <li><strong>Boligtype:</strong> {property.type}</li>
          </ul>
          <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Kontakt mægler</button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Beskrivelse</h2>
        <p>{property.description}</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Faciliteter</h2>
        <ul className="list-disc list-inside">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Flere billeder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {property.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${property.title} - Billede ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <Link href="/boliger" className="text-blue-600 hover:underline">
          ← Tilbage til alle boliger
        </Link>
      </div>
    </div>
  )
}