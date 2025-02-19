import { OrderButton } from "./components/order-button"
import { OrderList } from "./components/oreder-list"
import { InventoryStatus } from "./components/inventory"
import { PurchaseHistory } from "./components/purchase-history"
import { RecipeList } from "./components/recipe-list"
import { Header } from "./components/header"

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
        <RecipeList />
      </main>
    </div>
  )
}

