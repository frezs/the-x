import '@/styles/globals.css'

export const metadata = {
  title: 'App Title',
  description: 'App'
}

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
