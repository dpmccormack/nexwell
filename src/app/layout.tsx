import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexWell Health Partners | MSO Services for Specialty Practices',
  description: 'NexWell Health Partners provides management services, telehealth integration, and hospital partnerships for specialty medical practices. Focus on patients. We handle the business.',
  openGraph: {
    title: 'NexWell Health Partners | MSO Services for Specialty Practices',
    description: 'NexWell Health Partners provides management services, telehealth integration, and hospital partnerships for specialty medical practices.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-dark-text">{children}</body>
    </html>
  )
}
