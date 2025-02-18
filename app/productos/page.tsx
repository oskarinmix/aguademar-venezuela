import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/layout/hero-background"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    name: "Ormus Marino",
    description: "Oro Monoatómico del Mar Caribe",
    image: "https://picsum.photos/seed/ormus-marino/800/600",
  },
  {
    name: "Ormus 777",
    description: "Fórmula especial de Ormus",
    image: "https://picsum.photos/seed/ormus-777/800/600",
  },
  {
    name: "Agua de Mar Profunda",
    description: "Garrafa de 20 litros",
    image: "https://picsum.photos/seed/agua-de-mar/800/600",
  },
]

export default function Productos() {
  return (
    <main className="relative min-h-screen">
      <HeroBackground />
      <Header />
      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">
            Nuestros Productos
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-[#0096D6]">{product.name}</h2>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="bg-[#0096D6] hover:bg-[#007bb2] text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center w-full">
                    <ShoppingCart className="mr-2" size={20} />
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 p-8 rounded-lg shadow-lg animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#0096D6]">¿Por qué elegir nuestros productos?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Calidad Premium</h3>
                <p>
                  Nuestros productos son cuidadosamente seleccionados y procesados para garantizar la más alta calidad y
                  pureza.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Beneficios para la Salud</h3>
                <p>Descubre los increíbles beneficios del agua de mar y el Ormus para tu salud y bienestar general.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Sostenibilidad</h3>
                <p>
                  Nos comprometemos con prácticas sostenibles en la obtención y procesamiento de nuestros productos
                  marinos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovación Constante</h3>
                <p>
                  Continuamente investigamos y desarrollamos nuevas formas de aprovechar los recursos marinos para tu
                  beneficio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

