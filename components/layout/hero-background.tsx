import Image from "next/image"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5BDownloader.la%5D-67b3dc9e43df7.jpg-FGSQ19Zv08v7OUsfaLmdInprA2h67v.jpeg"
        alt="Underwater scene with sunlight streaming through clear blue water"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-[#003B5C]/80 mix-blend-multiply" />
    </div>
  )
}

