'use client';

import { useState } from 'react'

export default function SaelgBolig() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    propertyType: '',
    size: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Tak for din henvendelse! Vi vil kontakte dig snarest muligt.')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Sælg din bolig med rcnbolig</h1>
      <p className="mb-6">Udfyld formularen nedenfor for at bestille en gratis salgsvurdering af din bolig. Vi vil kontakte dig hurtigst muligt for at aftale et tidspunkt.</p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Form fields remain unchanged */}
        {/* ... */}
      </form>
    </div>
  )
}