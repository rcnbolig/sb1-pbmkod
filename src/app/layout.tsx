import React from 'react'
import App from '../App'
import '../index.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body>
        <App>{children}</App>
      </body>
    </html>
  )
}