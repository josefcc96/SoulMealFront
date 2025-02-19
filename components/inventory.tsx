import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"

// Mock data
const inventory = [
  { ingredient: "tomato", quantity: 5, icon: "🍅" },
  { ingredient: "lemon", quantity: 3, icon: "🍋" },
  { ingredient: "potato", quantity: 7, icon: "🥔" },
  { ingredient: "rice", quantity: 10, icon: "🍚" },
  { ingredient: "chicken", quantity: 4, icon: "🍗" },
]

export function InventoryStatus() {
  return (
    <Card className="mb-8 bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Inventario de Bodega</CardTitle>
        <Package size={24} className="text-primary" />
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2">
          {inventory.map((item) => (
            <li key={item.ingredient} className="flex items-center justify-between bg-muted rounded-lg p-2">
              <span className="flex items-center">
                <span className="mr-2 text-2xl">{item.icon}</span>
                {item.ingredient}
              </span>
              <span className="font-semibold bg-background px-2 py-1 rounded-full">{item.quantity}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

