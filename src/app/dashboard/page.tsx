'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Apple, BarChart3, Camera, ChefHat, Plus, Target, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Food {
  id: number
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  serving_size: number
  serving_unit: string
}

interface Meal {
  id: number
  food_id: number
  quantity: number
  meal_type: string
  created_at: string
  foods: Food
}

interface UserProfile {
  name: string
  goal: string
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [meals, setMeals] = useState<Meal[]>([])
  const [todayCalories, setTodayCalories] = useState(0)
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fat: 0 })
  const router = useRouter()

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      setUser(user)
      getProfile(user.id)
      getTodayMeals(user.id)
    } else {
      router.push('/login')
    }
  }

  const getProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (data) {
      setProfile(data)
    }
  }

  const getTodayMeals = async (userId: string) => {
    const today = new Date().toISOString().split('T')[0]
    const { data, error } = await supabase
      .from('user_meals')
      .select(`
        *,
        foods (*)
      `)
      .eq('user_id', userId)
      .eq('date', today)

    if (data) {
      setMeals(data)
      calculateTotals(data)
    }
  }

  const calculateTotals = (meals: Meal[]) => {
    let calories = 0
    let protein = 0
    let carbs = 0
    let fat = 0

    meals.forEach(meal => {
      const factor = meal.quantity / meal.foods.serving_size
      calories += meal.foods.calories * factor
      protein += meal.foods.protein * factor
      carbs += meal.foods.carbs * factor
      fat += meal.foods.fat * factor
    })

    setTodayCalories(Math.round(calories))
    setMacros({
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat)
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const targetCalories = 2000 // Pode ser calculado baseado no perfil
  const targetMacros = { protein: 120, carbs: 200, fat: 65 } // Exemplo

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
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
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
                    <div className="text-2xl font-bold text-blue-600">{macros.protein}g</div>
                    <div className="text-sm text-gray-500">Proteína</div>
                    <Progress value={(macros.protein / targetMacros.protein) * 100} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{macros.carbs}g</div>
                    <div className="text-sm text-gray-500">Carboidratos</div>
                    <Progress value={(macros.carbs / targetMacros.carbs) * 100} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{macros.fat}g</div>
                    <div className="text-sm text-gray-500">Gordura</div>
                    <Progress value={(macros.fat / targetMacros.fat) * 100} className="mt-2" />
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
                  {meals.map((meal) => (
                    <div key={meal.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{meal.foods.name} ({meal.quantity} {meal.foods.serving_unit})</p>
                        <p className="text-sm text-gray-500">{new Date(meal.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                      <Badge variant="secondary">{Math.round(meal.foods.calories * (meal.quantity / meal.foods.serving_size))} kcal</Badge>
                    </div>
                  ))}
                  {meals.length === 0 && (
                    <p className="text-gray-500 text-center py-4">Nenhuma refeição registrada hoje</p>
                  )}
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
  )
}