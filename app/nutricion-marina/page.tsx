import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NutricionMarina() {
  return (
    <main className="relative min-h-screen bg-[#003B5C] text-white">
      <Header />
      <div className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fadeIn">Nutrición Marina</h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12 animate-slideUp">
            <div>
              <p className="mb-4">
                La Terapia Marina es el uso de agua de mar con fines terapéuticos, que ha seguido un protocolo
                específico de recogida y elaboración definido por el propio René Quinton hace más de 100 años.
              </p>
              <p>
                Iniciada por René Quinton y avalada por más de cien años de clínica hospitalaria, la Terapia Marina
                demuestra una gran eficacia en el manejo de enfermedades en el ámbito de fisioterapia respiratoria,
                otorrinolaringología, pediatría, gastroenterología, endocrinología, medicina deportiva, oftalmología,
                dermatología, etc.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="https://picsum.photos/seed/marine1/800/600"
                alt="Terapia Marina"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12 animate-slideUp">
            <div className="order-2 md:order-1 relative h-64 md:h-full">
              <Image
                src="https://picsum.photos/seed/marine2/800/600"
                alt="Célula marina"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-4">
                A lo largo de la historia clínica se ha tratado de mostrar que la ingesta de agua de mar, elaborada bajo
                el protocolo de René Quinton, consigue equilibrar el organismo, regenerando las células y devolviéndoles
                su vitalidad. Todo ello hace que puedan tratarse numerosas dolencias con Terapia Marina, ya que al curar
                a la "célula" estamos curando el "órgano".
              </p>
              <p>
                Se ha demostrado que el agua de mar según la metodología Rene Quinton tiene la capacidad de restablecer
                la homeostasis de nuestro organismo. La alteración de este equilibrio (homeostasis) es muchas veces la
                causa de la que derivan infinidad de patologías.
              </p>
            </div>
          </div>

          <div className="bg-[#0096D6]/10 p-6 rounded-lg shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">¿Sabías que?</h2>
            <p>
              La ballena boreal presenta mutaciones y copias extra de genes relacionados con el ciclo celular. Esto
              podría estar relacionado con su longevidad y resistencia a enfermedades.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

