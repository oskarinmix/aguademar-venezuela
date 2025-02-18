import { Header } from "@/components/layout/header"
import { Hero } from "@/components/layout/hero"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}

