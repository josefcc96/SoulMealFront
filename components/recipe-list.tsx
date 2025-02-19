import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book } from "lucide-react"

// Mock data
const recipes = [
  {
    name: "Arroz con Pollo",
    ingredients: [
      { name: "rice", quantity: 2, icon: "🍚" },
      { name: "chicken", quantity: 1, icon: "🍗" },
      { name: "tomato", quantity: 1, icon: "🍅" },
    ],
  },
  {
    name: "Ensalada César",
    ingredients: [
      { name: "lettuce", quantity: 1, icon: "🥬" },
      { name: "chicken", quantity: 1, icon: "🍗" },
      { name: "cheese", quantity: 1, icon: "🧀" },
    ],
  },
  {
    name: "Pasta Alfredo",
    ingredients: [
      { name: "pasta", quantity: 2, icon: "🍝" },
      { name: "cheese", quantity: 1, icon: "🧀" },
      { name: "chicken", quantity: 1, icon: "🍗" },
    ],
  },
]

export function RecipeList() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Recetas Disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.name} className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">{recipe.name}</CardTitle>
              <Book size={24} className="text-primary" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name} className="flex items-center justify-between bg-muted rounded-lg p-2">
                    <span className="flex items-center">
                      <span className="mr-2 text-2xl">{ingredient.icon}</span>
                      {ingredient.name}
                    </span>
                    <span className="font-semibold bg-background px-2 py-1 rounded-full">{ingredient.quantity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

