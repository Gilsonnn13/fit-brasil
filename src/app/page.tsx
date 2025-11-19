'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">FB</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">FitBrasil</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-600 hover:text-green-600">Recursos</a>
            <a href="#about" className="text-gray-600 hover:text-green-600">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Seu Diário Alimentar
            <span className="text-green-600"> Brasileiro</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Controle suas calorias com precisão, escaneando os produtos que você realmente encontra no supermercado
            e registrando sua feijoada favorita com medidas caseiras que você entende.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/signup">Começar Agora</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Já tenho conta</Link>
            </Button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Scanner Inteligente</h3>
            <p className="text-gray-600">
              Escaneie códigos de barras de produtos brasileiros e obtenha informações nutricionais precisas.
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Receitas Brasileiras</h3>
            <p className="text-gray-600">
              Registre pratos típicos como feijoada, moqueca e açaí com medidas caseiras familiares.
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Acompanhamento Detalhado</h3>
            <p className="text-gray-600">
              Monitore calorias, macronutrientes e progresso com gráficos intuitivos e motivacionais.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 FitBrasil. Seu diário alimentar brasileiro.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}