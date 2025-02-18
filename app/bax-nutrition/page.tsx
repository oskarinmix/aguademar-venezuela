import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/layout/hero-background"

export default function BaxNutrition() {
  return (
    <main className="relative min-h-screen">
      <HeroBackground />
      <Header />
      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white animate-fadeIn">BAX NUTRITION</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-[#0096D6] animate-fadeIn">
            Renovación y Nutrición Celular
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slideUp">
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#0096D6]">MISIÓN</h3>
              <p>
                Somos un grupo conformado por médicos, terapeutas, psicólogos, licenciados y profesionales certificados
                organizados. Brindamos diferentes tipos de servicios en el MÉTODO MARINO y NUTRICIÓN EPIGENÉTICA.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#0096D6]">VISIÓN</h3>
              <p>
                Implementar los recursos necesarios para regenerar la parte física, mental y emocional del individuo; y
                así lograr los objetivos y un enfoque hacia la medicina cuántica basada en la HOMEOSTASIS CELULAR del
                MÉTODO MARINO comprobado científicamente.
              </p>
            </div>
          </div>

          <div className="mb-12 animate-slideUp">
            <h3 className="text-2xl font-bold mb-6 text-center">Renovación y Nutrición Celular</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  La renovación y nutrición celular es un proceso fundamental para mantener la salud y vitalidad de
                  nuestro organismo. A través del Método Marino y la Nutrición Epigenética, BAX NUTRITION ofrece
                  soluciones innovadoras para potenciar este proceso natural.
                </p>
                <p>
                  Nuestro enfoque se basa en la utilización de los componentes del agua de mar, ricos en minerales y
                  oligoelementos, para nutrir las células y favorecer su regeneración. Esto, combinado con principios de
                  nutrición epigenética, permite influir positivamente en la expresión de nuestros genes para una salud
                  óptima.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="https://picsum.photos/seed/bax1/800/600"
                  alt="Renovación celular"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fadeIn">
            <div className="bg-[#0096D6]/10 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Método Marino</h4>
              <p>
                Utilizamos los beneficios del agua de mar para restaurar el equilibrio mineral de nuestro organismo,
                favoreciendo la homeostasis celular y potenciando nuestras defensas naturales.
              </p>
            </div>
            <div className="bg-[#0096D6]/10 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Nutrición Epigenética</h4>
              <p>
                A través de una alimentación consciente y personalizada, influimos positivamente en la expresión de
                nuestros genes, promoviendo la salud y previniendo enfermedades.
              </p>
            </div>
            <div className="bg-[#0096D6]/10 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Medicina Cuántica</h4>
              <p>
                Integramos principios de la física cuántica en nuestro enfoque terapéutico, reconociendo la
                interconexión entre mente, cuerpo y energía en el proceso de sanación.
              </p>
            </div>
          </div>

          <div className="text-center animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">Nuestro Compromiso</h3>
            <p className="max-w-2xl mx-auto">
              En BAX NUTRITION, nos comprometemos a ofrecer soluciones integrales para la salud, combinando
              conocimientos ancestrales con los últimos avances científicos. Nuestro objetivo es empoderar a cada
              individuo en su camino hacia una salud óptima y un bienestar duradero.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

