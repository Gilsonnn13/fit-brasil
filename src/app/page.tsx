import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, BarChart3, Users, Camera, ChefHat, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Apple className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">FitBrasil</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Entrar</Button>
            <Button>Cadastrar</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Seu Diário Alimentar <span className="text-green-600">Brasileiro</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Controle suas calorias com precisão, escaneando os produtos que você realmente encontra no supermercado
          e registrando sua feijoada favorita com medidas caseiras que você entende.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Começar Agora
          </Button>
          <Button size="lg" variant="outline">
            Saiba Mais
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Funcionalidades Principais</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Camera className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Scanner de Código de Barras</CardTitle>
              <CardDescription>
                Escaneie produtos brasileiros com 80% de precisão em supermercados comuns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <ChefHat className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Pratos Típicos Brasileiros</CardTitle>
              <CardDescription>
                Registre feijoada, moqueca, acarajé e outros pratos com medidas caseiras
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Metas Personalizadas</CardTitle>
              <CardDescription>
                Calcule seu déficit/superávit calórico com equações validadas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Informações ANVISA</CardTitle>
              <CardDescription>
                Dados nutricionais seguindo padrões da Agência Nacional de Vigilância Sanitária
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Comunidade Brasileira</CardTitle>
              <CardDescription>
                Compartilhe receitas saudáveis e dicas de exercícios em espaços brasileiros
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Apple className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>100% Brasileiro</CardTitle>
              <CardDescription>
                Linguagem acessível, culinária local e cultura fitness brasileira
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h4 className="text-2xl font-bold mb-4">Pronto para começar sua jornada?</h4>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de brasileiros que já transformaram seus hábitos alimentares.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Criar Conta Gratuita
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Apple className="h-6 w-6" />
            <span className="text-xl font-bold">FitBrasil</span>
          </div>
          <p className="text-gray-400">© 2024 FitBrasil. Feito do Brasil para o Brasil.</p>
        </div>
      </footer>
    </div>
  );
}