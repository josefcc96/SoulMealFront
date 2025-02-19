import { Clock, CheckCircle, History } from "lucide-react"

// Mock data
const orders = [
  { id: 1, status: "en preparación", dish: "Arroz con pollo", time: "10:30 AM" },
  { id: 2, status: "finalizada", dish: "Ensalada César", time: "10:15 AM" },
  { id: 3, status: "finalizada", dish: "Pasta Alfredo", time: "10:00 AM" },
]

export function OrderList() {
  return (
    <div className="w-full">
      <div className="flex mb-4 bg-accent rounded-lg">
        <button className="flex-1 py-2 px-4 rounded-lg flex items-center justify-center text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-colors">
          <Clock className="mr-2" size={16} />
          En Preparación
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg flex items-center justify-center text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-colors">
          <CheckCircle className="mr-2" size={16} />
          Finalizadas
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg flex items-center justify-center text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-colors">
          <History className="mr-2" size={16} />
          Histórico
        </button>
      </div>
      <OrderCards orders={orders} />
    </div>
  )
}

function OrderCards({ orders }) {
  return (
    <div className="grid gap-4 mt-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-medium">Pedido #{order.id}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                order.status === "en preparación" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
              }`}
            >
              {order.status}
            </span>
          </div>
          <p className="text-sm text-muted">{order.time}</p>
          <p className="font-medium mt-1">{order.dish}</p>
        </div>
      ))}
    </div>
  )
}

