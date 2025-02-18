import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/layout/hero-background"
import { PhoneIcon as WhatsappIcon, MailIcon } from "lucide-react"

export default function TrabajaConNosotros() {
  return (
    <main className="relative min-h-screen">
      <HeroBackground />
      <Header />
      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white animate-fadeIn">
            Trabaja con Nosotros
          </h1>

          <div className="mb-12 animate-slideUp">
            <h2 className="text-2xl font-bold mb-4 text-[#0096D6]">La oferta laboral está cambiando aceleradamente</h2>
            <p className="mb-4">
              Por lo tanto, tenemos que adaptarnos a nuevas opciones rápidamente para poder seguir disfrutando de la
              vida. Los prósperos visualizan, hacen planes y los ejecutan. Sueños sin acción es igual a decepción, la
              incapacidad más grande está en la mente, no en el cuerpo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slideUp">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#0096D6]">Somos innovadores</h3>
              <p>
                Somos un Emprendimiento legal e innovador que promueve el consumo gastronómico de Agua de Mar y natural.
                Hemos generado oportunidades para quienes deseen tener nutrición saludable y quieran tener ingresos
                adicionales permanentemente.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="https://picsum.photos/seed/innovative/800/600"
                alt="Equipo innovador"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-12 animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-[#0096D6]">Te acompañamos</h3>
            <p>
              Para Trabajar con Nosotros es un plan nada que perder. Tienes más de 20 millones de potenciales clientes,
              no requieres hoja de vida, ni experiencia, ni comprar para llevar, ni tener inventarios, solo es un mínimo
              esfuerzo. Nosotros te acompañamos.
            </p>
          </div>

          <div className="mb-12 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6 text-center">Oportunidades de ganar</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#0096D6]">1. Plan referidos Agua de Mar Bax</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Gana dinero sin invertir, ni manejar inventarios</li>
                  <li>Te registras y recibes tu código para obtener comisiones</li>
                  <li>Recibe el Taller de inducción del Agua de Mar (gratis)</li>
                  <li>Gana 3$ por cada paca de 8 litros y 4$ por Garrafa de 20 litros</li>
                  <li>Haz publicidad en redes sociales, te damos el contenido sin costo</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#0096D6]">2. Distribuidor</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Puedes ganar desde $1200 o más en el mes</li>
                  <li>Te inscribes y recibes toda la información</li>
                  <li>Nosotros te ayudamos en todo el proceso</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6">¿Deseas aumentar tus ingresos?</h2>
            <p className="mb-4">
              Haz parte de nuestro equipo y comienza a recibir ingresos adicionales. Comunícate con nosotros o escribe
              en nuestro formulario de contacto para recibir más información.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://wa.me/584141845875"
                className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                <WhatsappIcon className="mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:baxnutrition@gmail.com"
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                <MailIcon className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

