"use client"

import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

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

          {isMenuOpen && (
            <div className="md:hidden fixed top-20 left-0 right-0 bg-[#003B5C] shadow-lg">
              <div className="flex flex-col space-y-4 p-6">
                <Link href="/agua-de-mar" className="hover:text-[#0096D6] transition-colors">
                  AGUA DE MAR
                </Link>
                <Link href="/productos" className="hover:text-[#0096D6] transition-colors">
                  PRODUCTOS
                </Link>
                <Link href="/nutricion-marina" className="hover:text-[#0096D6] transition-colors">
                  NUTRICIÓN MARINA
                </Link>
                <Link href="/bax-nutrition" className="hover:text-[#0096D6] transition-colors">
                  BAX NUTRITION
                </Link>
                <Link href="/trabaja-con-nosotros" className="hover:text-[#0096D6] transition-colors">
                  TRABAJA CON NOSOTROS
                </Link>
                <Link href="/contacto" className="hover:text-[#0096D6] transition-colors">
                  CONTACTO
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
