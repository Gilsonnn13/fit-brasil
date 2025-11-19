import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Apple, BarChart3, Camera, ChefHat, Plus, Target } from "lucide-react";

export default function Dashboard() {
  // Dados mockados para demonstração
  const todayCalories = 1450;
  const targetCalories = 2000;
  const macros = {
    protein: { current: 85, target: 120 },
    carbs: { current: 150, target: 200 },
    fat: { current: 45, target: 65 }
  };

  const recentFoods = [
    { name: "Feijoada (1 concha média)", calories: 450, time: "12:30" },
    { name: "Arroz branco (1 concha)", calories: 200, time: "12:30" },
    { name: "Banana prata", calories: 105, time: "10:00" },
    { name: "Café com leite", calories: 120, time: "08:00" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Apple className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">FitBrasil</h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Dia 15 de 30</Badge>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                Scanner
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Progresso Diário
                </CardTitle>
                <CardDescription>
                  Seu consumo calórico de hoje
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{todayCalories} kcal</span>
                  <span className="text-gray-500">de {targetCalories} kcal</span>
                </div>
                <Progress value={(todayCalories / targetCalories) * 100} className="h-3" />
                <p className="text-sm text-gray-600">
                  Restam {targetCalories - todayCalories} kcal para hoje
                </p>
              </CardContent>
            </Card>

            {/* Macros */}
            <Card>
              <CardHeader>
                <CardTitle>Macronutrientes</CardTitle>
                <CardDescription>
                  Proteínas, Carboidratos e Gorduras
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{macros.protein.current}g</div>
                    <div className="text-sm text-gray-500">Proteína</div>
                    <Progress value={(macros.protein.current / macros.protein.target) * 100} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{macros.carbs.current}g</div>
                    <div className="text-sm text-gray-500">Carboidratos</div>
                    <Progress value={(macros.carbs.current / macros.carbs.target) * 100} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{macros.fat.current}g</div>
                    <div className="text-sm text-gray-500">Gordura</div>
                    <Progress value={(macros.fat.current / macros.fat.target) * 100} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Foods */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Alimentos de Hoje</CardTitle>
                    <CardDescription>
                      Últimas refeições registradas
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentFoods.map((food, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{food.name}</p>
                        <p className="text-sm text-gray-500">{food.time}</p>
                      </div>
                      <Badge variant="secondary">{food.calories} kcal</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Escanear Produto
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <ChefHat className="h-4 w-4 mr-2" />
                  Adicionar Receita
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Ver Relatórios
                </Button>
              </CardContent>
            </Card>

            {/* Popular Foods */}
            <Card>
              <CardHeader>
                <CardTitle>Alimentos Populares</CardTitle>
                <CardDescription>
                  Mais buscados hoje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">🍚 Arroz branco (1 concha)</div>
                  <div className="text-sm">🥩 Carne bovina (100g)</div>
                  <div className="text-sm">🍌 Banana prata</div>
                  <div className="text-sm">🥛 Leite integral (1 copo)</div>
                  <div className="text-sm">🍞 Pão francês</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}