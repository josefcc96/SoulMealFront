import { Header } from "../components/Header"
import { OrderButton } from "../components/OrderButton"
import { OrderList } from "../components/OrderList"
import { InventoryStatus } from "../components/InventoryStatus"
import { PurchaseHistory } from "../components/PurchaseHistory"
import { RecipeCarousel } from "../components/RecipeCarousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <OrderButton />
            <OrderList />
          </div>
          <div>
            <InventoryStatus />
            <PurchaseHistory />
          </div>
        </div>
        <RecipeCarousel />
      </main>
    </div>
  )
}

