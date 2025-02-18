"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-6 bg-[#003B5C]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-[#0096D6] transition-colors transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-[#0096D6] transition-colors transform hover:scale-110">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-[#0096D6] transition-colors transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link
              href="/donar"
              className="px-6 py-2 bg-[#0096D6] hover:bg-[#007bb2] transition-colors rounded-full text-sm font-medium transform hover:scale-105"
            >
              DONAR
            </Link>
            <Link
              href="/unete"
              className="px-6 py-2 border border-white hover:bg-white hover:text-[#003B5C] transition-all rounded-full text-sm font-medium transform hover:scale-105"
            >
              ÚNETE A NOSOTROS
            </Link>
            <Link
              href="/aliados"
              className="px-6 py-2 border border-white hover:bg-white hover:text-[#003B5C] transition-all rounded-full text-sm font-medium transform hover:scale-105"
            >
              SÉ NUESTRO ALIADO
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

