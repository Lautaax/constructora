'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Phone, MapPin, Clock, ChevronRight, Home, Warehouse, Wrench, Zap, Leaf, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PaginaPrincipalComponent() {
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  const irASeccion = (seccionId: string) => {
    const elemento = document.getElementById(seccionId)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
      setSeccionActiva(seccionId)
    }
  }

  const abrirWhatsApp = () => {
    window.open('https://wa.me/+5492914184040?text=Hola, estoy interesado en sus servicios de construcción', '_blank')
  }

  return (
    <>
      <Head>
        <title>Constructora BB - Expertos en Construcción en Bahía Blanca</title>
        <meta name="description" content="Constructora BB ofrece servicios de construcción de alta calidad en Bahía Blanca. Especialistas en casas, ampliaciones y remodelaciones con más de 20 años de experiencia." />
        <meta name="keywords" content="construcción, Bahía Blanca, casas, ampliaciones, remodelaciones, Loma Negra, Cemento Avellaneda, Sika, Isover, Weber, Losa, Retak, Klaukol" />
        <link rel="canonical" href="https://www.constructorabb.com" />
      </Head>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-600 text-white">
        <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="#" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">Constructora BB</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {['inicio', 'servicios', 'tecnologia', 'marcas', 'contacto', 'faq'].map((item) => (
                <button
                  key={item}
                  onClick={() => irASeccion(item)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    seccionActiva === item ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
            <Button onClick={abrirWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-800/50">
              WhatsApp
            </Button>
          </div>
        </header>

        <main className="flex-1">
          <section id="inicio" className="py-20 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Fondo+Construcción')"}}>
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white text-shadow-lg">Tu Hogar, Nuestro Compromiso</h1>
              <p className="text-xl mb-8 text-white max-w-2xl mx-auto">Construimos el hogar de tus sueños con calidad, innovación y compromiso. Más de 20 años de experiencia en Bahía Blanca y alrededores.</p>
              <Button onClick={() => irASeccion('servicios')} size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-800/50 transform hover:scale-105 transition-all">
                Descubre Nuestros Servicios
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          <section id="servicios" className="py-20 bg-gradient-to-r from-emerald-950 to-emerald-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Nuestros Servicios</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Home, title: "Construcción de Casas", desc: "Diseñamos y construimos la casa de tus sueños." },
                  { icon: Warehouse, title: "Ampliaciones", desc: "Expandimos tu espacio con estilo y funcionalidad." },
                  { icon: Wrench, title: "Remodelaciones", desc: "Renovamos tu hogar para una nueva vida." },
                ].map((servicio, index) => (
                  <Card key={index} className="bg-gradient-to-br from-emerald-800 to-emerald-600 shadow-xl shadow-emerald-900/20 hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <servicio.icon className="h-12 w-12 mb-4 text-white" />
                      <h3 className="text-xl font-semibold mb-2 text-white">{servicio.title}</h3>
                      <p className="text-emerald-100">{servicio.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="tecnologia" className="py-20 bg-gradient-to-r from-emerald-950 to-emerald-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Tecnología y Materiales</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Zap, title: "Domótica", desc: "Sistemas inteligentes para el control de tu hogar." },
                  { icon: Leaf, title: "Eco-Friendly", desc: "Materiales sostenibles y eficiencia energética." },
                  { icon: Shield, title: "Alta Durabilidad", desc: "Materiales de primera calidad para una construcción duradera." },
                ].map((tech, index) => (
                  <Card key={index} className="bg-gradient-to-br from-emerald-800 to-emerald-600 shadow-xl shadow-emerald-900/20 hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <tech.icon className="h-12 w-12 mb-4 text-white" />
                      <h3 className="text-xl font-semibold mb-2 text-white">{tech.title}</h3>
                      <p className="text-emerald-100">{tech.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="marcas" className="py-20 bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-950">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Marcas de Confianza</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {['loma-negra', 'cemento-avellaneda', 'sika', 'isover', 'weber', 'cerro-negro-black', 'retak', 'klaukol'].map((marca) => (
                  <div key={marca} className="bg-white/10 backdrop-blur-md p-2 md:p-4 rounded-lg shadow-lg shadow-emerald-900/20 flex items-center justify-center">
                    <Image
                      src={`/logos/${marca}.png`}
                      alt={marca}
                      width={100}
                      height={50}
                      className="w-16 h-8 md:w-24 md:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contacto" className="py-20 bg-gradient-to-r from-emerald-950 to-emerald-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Contáctanos</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-gradient-to-br from-emerald-800 to-emerald-600 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <MapPin className="h-12 w-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Dirección</h3>
                    <p className="text-emerald-100">Sarmiento 956, Bahía Blanca, Argentina</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Phone className="h-12 w-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Teléfono</h3>
                    <p className="text-emerald-100">+54 291 4184040</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-emerald-800 to-emerald-600 shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-12 w-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Horario</h3>
                    <p className="text-emerald-100">Lun - Vie: 8:00 - 18:00</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 bg-gradient-to-r from-emerald-950 via-emerald-950 to-emerald-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Preguntas Frecuentes</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    { q: "¿Cuánto tiempo toma construir una casa?", a: "El tiempo de construcción varía según el proyecto, pero generalmente oscila entre 6 y 12 meses." },
                    { q: "¿Ofrecen garantía por sus trabajos?", a: "Sí, todos nuestros trabajos cuentan con una garantía de 5 años en estructura y 1 año en acabados." },
                    { q: "¿Trabajan en toda la provincia de Buenos Aires?", a: "Nos enfocamos principalmente en Bahía Blanca y alrededores, pero podemos considerar proyectos en otras áreas de la provincia." },
                  ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-emerald-700">
                      <AccordionTrigger className="text-xl font-semibold text-white hover:text-emerald-400 transition-colors py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-emerald-100 pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-emerald-950 to-emerald-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-bold">Constructora BB</h3>
                <p className="text-sm text-emerald-100">Construyendo sueños desde 2000</p>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-emerald-400 transition-colors">Facebook</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</Link>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-emerald-100">
              <p>&copy; {new Date().getFullYear()} Constructora BB. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        <Button
          onClick={abrirWhatsApp}
          className="fixed bottom-4 right-4 rounded-full p-4 shadow-xl shadow-emerald-900/30 bg-gradient-to-r from-emerald-800 to-emerald-600 hover:from-emerald-900 hover:to-emerald-700 text-white transform hover:scale-110 transition-all"
          size="icon"
        >
          <Image src="/placeholder.svg?height=24&width=24&text=WhatsApp" alt="WhatsApp" width={24} height={24} />
        </Button>
      </div>
    </>
  )
}