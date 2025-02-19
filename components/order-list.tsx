import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, History } from "lucide-react"

// Mock data
const orders = [
  { id: 1, status: "en preparación", dish: "Arroz con pollo", time: "10:30 AM" },
  { id: 2, status: "finalizada", dish: "Ensalada César", time: "10:15 AM" },
  { id: 3, status: "finalizada", dish: "Pasta Alfredo", time: "10:00 AM" },
]

export function OrderList() {
  return (
    <Tabs defaultValue="preparation" className="w-full">
      <TabsList className="grid w-full grid-cols-3 rounded-lg bg-muted">
        <TabsTrigger value="preparation" className="data-[state=active]:bg-background rounded-lg transition-all">
          <Clock className="mr-2" size={16} />
          En Preparación
        </TabsTrigger>
        <TabsTrigger value="finished" className="data-[state=active]:bg-background rounded-lg transition-all">
          <CheckCircle className="mr-2" size={16} />
          Finalizadas
        </TabsTrigger>
        <TabsTrigger value="history" className="data-[state=active]:bg-background rounded-lg transition-all">
          <History className="mr-2" size={16} />
          Histórico
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preparation">
        <OrderCards orders={orders.filter((o) => o.status === "en preparación")} />
      </TabsContent>
      <TabsContent value="finished">
        <OrderCards orders={orders.filter((o) => o.status === "finalizada")} />
      </TabsContent>
      <TabsContent value="history">
        <OrderCards orders={orders} />
      </TabsContent>
    </Tabs>
  )
}

function OrderCards({ orders }) {
  return (
    <div className="grid gap-4 mt-4">
      {orders.map((order) => (
        <Card key={order.id} className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Pedido #{order.id}</CardTitle>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                order.status === "en preparación" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
              }`}
            >
              {order.status}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{order.time}</p>
            <p className="font-medium mt-1">{order.dish}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

