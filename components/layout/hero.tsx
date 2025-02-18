export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5BDownloader.la%5D-67b3dc9e43df7.jpg-FGSQ19Zv08v7OUsfaLmdInprA2h67v.jpeg"
          alt="Underwater scene with sunlight streaming through clear blue water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003B5C]/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="text-white text-sm tracking-wider mb-6 block">RENOVACIÓN Y NUTRICIÓN CELULAR</span>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-8">
          Descubre el poder del <span className="text-[#0096D6]">agua de mar</span> para la renovación celular y una
          nutrición integral, revitalizando tu salud desde el origen de la vida.
        </h1>
      </div>
    </section>
  )
}

