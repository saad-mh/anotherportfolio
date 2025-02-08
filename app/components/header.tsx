"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateVisibility = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 100)
    }

    window.addEventListener("scroll", updateVisibility)
    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const translateY = useTransform(scrollY, [0, 100], [-100, 0])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -100 }}
      style={{ opacity, y: translateY }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mohammed Saad
          </motion.h1>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}