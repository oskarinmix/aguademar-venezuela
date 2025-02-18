import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/layout/hero-background"
import { Droplet, Filter, Map, Leaf, FlaskRoundIcon as Flask } from "lucide-react"

export default function AguaDeMar() {
  return (
    <main className="relative min-h-screen">
      <HeroBackground />
      <Header />
      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">Agua de Mar</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-slideUp">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0096D6]">Extracción</h2>
              <p className="mb-6">
                Nuestro proceso de extracción y tratamiento del Agua de Mar está diseñado para preservar sus propiedades
                naturales y garantizar la más alta calidad para nuestros consumidores.
              </p>
              <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Map className="mr-2 text-[#0096D6]" />
                  Dónde la Buscamos
                </h3>
                <p>
                  El Agua de Mar es extraída de la Costa Caribe mar adentro a más de 150 metros de profundidad en
                  lugares seleccionados por su alto valor biológico, pureza y equilibrio natural.
                </p>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="https://picsum.photos/seed/caribbean-sea/800/600"
                alt="Costa Caribe"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-slideUp">
            <div className="order-2 md:order-1 relative h-64 md:h-96">
              <Image
                src="https://picsum.photos/seed/water-treatment/800/600"
                alt="Proceso de tratamiento del agua de mar"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-[#0096D6]">Tratamiento</h2>
              <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 text-[#0096D6]" />
                  ¿Cómo la tratamos?
                </h3>
                <p>
                  El Agua de Mar extraída de la costa pasa por un proceso de decantación y microfiltración. Incluyendo
                  otros procesos, se consigue eliminar macropartículas, sin alterar la composición mineral y su riqueza
                  en oligoelementos, fitoplancton y zooplancton marino.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg shadow-lg animate-fadeIn mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0096D6]">Beneficios del Agua de Mar</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplet className="mx-auto mb-4 text-[#0096D6]" size={48} />
                <h3 className="text-xl font-semibold mb-2">Hidratación Profunda</h3>
                <p>Rica en minerales que ayudan a una hidratación más efectiva del organismo.</p>
              </div>
              <div className="text-center">
                <Leaf className="mx-auto mb-4 text-[#0096D6]" size={48} />
                <h3 className="text-xl font-semibold mb-2">Equilibrio Mineral</h3>
                <p>Aporta más de 78 minerales y oligoelementos en su forma más biodisponible.</p>
              </div>
              <div className="text-center">
                <Flask className="mx-auto mb-4 text-[#0096D6]" size={48} />
                <h3 className="text-xl font-semibold mb-2">Salud Celular</h3>
                <p>Contribuye al mantenimiento del equilibrio celular y la salud general.</p>
              </div>
            </div>
          </div>

          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0096D6]">
              Agua de Mar: Parte de la Comunidad de Promotores del Agua de Mar
            </h2>

            <div className="bg-white/10 p-8 rounded-lg shadow-lg mb-8">
              <p className="mb-4">
                Estamos complacidos de atenderte y de ayudarte a reforzar tu Sistema Inmunológico revisemos y reparemos
                nuestro templo...nuestro cuerpo.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#0096D6]">AGUA DE MAR</h3>
              <p className="mb-4">
                Según las hipótesis de geofísicos la edad de la atmósfera y de los océanos es de 4000 millones de años.
                Los océanos se habrían generado por actividad volcánica a partir de la misma masa gaseosa arrancada al
                sol; dicha masa al condensarse dió como resultado el agua líquida y la corteza sólida. La Tierra tiene
                4600 millones de años y se formó a partir de pequeños trozos desprendidos de la gran masa gaseosa. En
                los primeros 1000 millones de años ocurre un proceso de desgasificación a través de actividad volcánica
                que inyecta agua en la atmósfera y que se precipita en los océanos. La corteza que se solidificó en la
                Tierra es de 180 km de espesor y permite el volcanismo. A partir del rift de las dorsales centro -
                oceánicas (lugares en que el fondo del océano está expandiéndose a velocidad de varios centímetros por
                año), emergen lavas basálticas con aguas juveniles que contienen en solución muchos de los principales
                componentes del agua de mar: Cloro, Bromo, Yodo, Carbono y Nitrógeno.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#0096D6]">Propiedades químicas del agua del océano</h3>
              <p className="mb-4">
                El océano está formado por una compleja solución salina, con una concentración constante. El agua del
                mar es una solución en la que se encuentran un gran número de elementos químicos, gases disueltos y
                nutrientes. Las sales disueltas son electrolitos en solución acuosa ionizada, lo cual da al agua de mar
                propiedades físico - químicas complejas. La salinidad global de una muestra semejante es de 35o/oo.
                Otros elementos que se encuentran en solución son:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Elementos raros: yodo, sílice, estroncio, aluminio, hierro, cobre, oro, etc.</li>
                <li>Gases disueltos: oxígeno, nitrógeno y dióxido de carbono.</li>
                <li>Sales nutritivas (fosfatos) y sustancias orgánicas disueltas o coloidales.</li>
                <li>
                  Sales nutritivas esenciales para la vida animal y vegetal (fosfatos) y sustancias orgánicas disueltas
                  o coloidales.
                </li>
              </ul>
              <p>
                Debido a procesos químicos reguladores (por su estructura molecular, el agua de mar posee poder de
                disolución de las sustancias iónicas), los principales elementos se mantienen en proporciones constantes
                (intercambio de cationes y aniones). Así, la composición química del agua de mar es constante debido a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  Factores de solubilidad que hacen precipitar algunas sales que aparecen en exceso y las incorporan a
                  los sedimentos.
                </li>
                <li>
                  Debido a la circulación general de las masas de agua oceánicas ya que este fenómeno continuo en el
                  tiempo y en el espacio, asegura una agitación y mezcla constante del agua.
                </li>
                <li>
                  La actividad biológica de seres vivos que fijan selectivamente ciertas sales solubles (particularmente
                  carbonatos y silicatos) y las transforman en sales insolubles (como parte de sus cuerpos, conchas,
                  etc) y que a su muerte, se incorporan a los sedimentos.
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                Para ir por el atajo podríamos decir que el mar es, en lo que tiene de gustoso o saboroso y de saleroso,
                sapiente o sabio (que viene a ser todo uno) la mismísima tierra, pero en forma ingerible y directamente
                asimilable por los seres vivos. La más perfecta síntesis de nuestro hábitat: Tierra total, sin faltarle
                ni uno solo de sus componentes, disuelta en agua gracias a la acción de todas las arterias de la tierra,
                de todas las lluvias, torrentes, tormentas y glaciares que llevan millones y millones de años lamiendo y
                triturando los tesoros de su corteza y vertiéndolos al mar, que los mece, los disuelve, los agita y los
                vivifica, para hacer de cada una de sus gotas la más perfecta destilación de toda la tierra, el
                sabrosísimo caldo en que se cuece la vida de un infinidad de seres vivos.
              </p>
              <p className="mb-4">
                Pero como nuestro mundo está lleno de sabios más sabios que la naturaleza, he aquí que le enmendaron la
                plana a ésta "refinando" y "purificando" la sal que obtenían del mar. Y así, del mismo modo que hemos de
                andar buscando pan y cereales y pastas sin refinar y azúcar sin refinar, y aceite y tantos más otros
                alimentos sin refinar, hemos de buscar también "sal integral sin refinar", porque ésta es un alimento
                esencialísimo para los animales (vacas, caballos, ovejas…) que, como nosotros, necesitan un complemento
                mineral porque no obtienen los suficientes minerales de los alimentos que ingieren. Por cierto, es fácil
                ver que las cabras prefieren lamer agua de mar que piedras salitrosas.
              </p>
              <p className="mb-4">
                Y cuando examinamos todas las ofertas de sal que nos hace el mercado, caemos en la cuenta de que es
                imposible que ninguna sal supere al agua de mar en cuanto a oferta de minerales (la totalidad de los que
                componen la tierra y la casi totalidad de la Tabla periódica) directamente asimilables.
              </p>
              <p>
                El agua de mar es mucho más que esto, pero baste por ahora este primer paso para ir conociendo su
                verdadera naturaleza.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

