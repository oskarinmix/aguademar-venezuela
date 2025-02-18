"use client"

import Link from "next/link"
import { Logo } from "@/components/shared/logo"

export function Header() {
  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-[#003B5C]/90 backdrop-blur-sm h-20 font-ttlake">
      <div className="mx-auto px-4 h-full container">
        <nav className="flex justify-between items-center h-full text-white">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-12 h-12">
              <Logo />
            </div>
            <div className="flex flex-col">
              <span className="group-hover:text-[#0096D6] md:block hidden font-bold text-lg transition-colors">
                AGUA DE MAR
              </span>
              <span className="group-hover:text-white md:block hidden text-[#0096D6] text-xs transition-colors">
                VENEZUELA
              </span>
            </div>
          </Link>

          <div className="md:flex items-center space-x-8 hidden">
            <Link href="/agua-de-mar" className="hover:text-[#0096D6] hover-underline-animation transition-colors">
              AGUA DE MAR
            </Link>
            <Link href="/productos" className="hover:text-[#0096D6] hover-underline-animation transition-colors">
              PRODUCTOS
            </Link>
            <Link href="/nutricion-marina" className="hover:text-[#0096D6] hover-underline-animation transition-colors">
              NUTRICIÓN MARINA
            </Link>
            <Link href="/bax-nutrition" className="hover:text-[#0096D6] hover-underline-animation transition-colors">
              BAX NUTRITION
            </Link>
            <Link
              href="/trabaja-con-nosotros"
              className="hover:text-[#0096D6] hover-underline-animation transition-colors"
            >
              TRABAJA CON NOSOTROS
            </Link>
            <Link href="/contacto" className="hover:text-[#0096D6] hover-underline-animation transition-colors">
              CONTACTO
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

