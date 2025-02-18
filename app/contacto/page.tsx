"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/layout/hero-background"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a third-party service
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="relative min-h-screen">
      <HeroBackground />
      <Header />
      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white animate-fadeIn">Contáctanos</h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16 animate-slideUp">
            <div>
              <p className="mb-8 text-lg leading-relaxed">
                La Atención personalizada presencial y online para el re-establecimiento de su salud, que son nuestros
                objetivos. Verificar su estado de salud actual bajo la óptica de las medicinas homeopática, sinérgica,
                ancestral y sustentable, integrando lo holístico en nuestras para brindarle la mejor atención y las
                mejores oportunidades de salud.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-4 text-[#0096D6]" />
                  <span>+58 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-[#0096D6]" />
                  <span>info@aguademarvenezuela.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 text-[#0096D6]" />
                  <span>Caracas, Venezuela</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0096D6]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0096D6]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0096D6]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#0096D6] hover:bg-[#007bb2] text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center w-full"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

