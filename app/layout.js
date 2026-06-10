import './globals.css'

export const metadata = {
  title: 'LandingBuilder',
  description: 'Constructor de landing pages estilo WordPress — v0.4.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
