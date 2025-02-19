import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

// Mock data
const purchases = [
  { id: 1, ingredient: "tomato", quantity: 10, date: "2023-05-01", icon: "🍅" },
  { id: 2, ingredient: "lemon", quantity: 5, date: "2023-05-02", icon: "🍋" },
  { id: 3, ingredient: "potato", quantity: 15, date: "2023-05-03", icon: "🥔" },
]

export function PurchaseHistory() {
  return (
    <Card className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Historial de Compras</CardTitle>
        <ShoppingCart size={24} className="text-primary" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {purchases.map((purchase) => (
            <li key={purchase.id} className="bg-muted rounded-lg p-2 flex items-center justify-between">
              <span className="flex items-center">
                <span className="mr-2 text-2xl">{purchase.icon}</span>
                <span>
                  {purchase.quantity} {purchase.ingredient}(s)
                </span>
              </span>
              <span className="text-sm text-muted-foreground">{purchase.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

