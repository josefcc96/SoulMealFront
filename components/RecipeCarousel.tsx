"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Book } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Recipe = {
  name: string
  ingredients: { name: string; quantity: number; icon: string }[]
}

const recipes: Recipe[] = [
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
  {
    name: "Sopa de Tomate",
    ingredients: [
      { name: "tomato", quantity: 3, icon: "🍅" },
      { name: "onion", quantity: 1, icon: "🧅" },
      { name: "garlic", quantity: 2, icon: "🧄" },
    ],
  },
  {
    name: "Tacos de Pescado",
    ingredients: [
      { name: "fish", quantity: 2, icon: "🐟" },
      { name: "tortilla", quantity: 4, icon: "🌮" },
      { name: "avocado", quantity: 1, icon: "🥑" },
    ],
  },
  {
    name: "Lasaña Vegetariana",
    ingredients: [
      { name: "pasta", quantity: 1, icon: "🍝" },
      { name: "spinach", quantity: 2, icon: "🍃" },
      { name: "cheese", quantity: 2, icon: "🧀" },
    ],
  },
]

export function RecipeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recipes.length - 3 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipes.length - 3 : prevIndex - 1))
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Recetas Disponibles</h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          {recipes.slice(currentIndex, currentIndex + 3).map((recipe, index) => (
            <Card key={recipe.name} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4">
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
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

