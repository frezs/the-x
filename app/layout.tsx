import '@/styles/globals.css'

export const metadata = {
  title: 'App Home',
  description: 'Home'
}

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="max-w-1070px m-auto">{children}</body>
    </html>
  )
}
