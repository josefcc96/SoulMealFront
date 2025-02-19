"use client"

import { useState, useEffect, useCallback } from "react"
import { Clock, CheckCircle, History, RefreshCw } from "lucide-react"
import { get } from "../lib/axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Order = {
  id: number
  status: string
  dish: string
  time: string
}

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("preparation")

  const fetchOrders = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await get("/orders")
      setOrders(data)
    } catch (error) {
      console.error("Error fetching orders:", error)
      setError("No se pudieron cargar los pedidos. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchOrders()
    // Refresh orders every 30 seconds
    const interval = setInterval(fetchOrders, 30000)
    return () => clearInterval(interval)
  }, [fetchOrders])

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "preparation") return order.status === "en preparación"
    if (activeTab === "finished") return order.status === "finalizada"
    return true // 'history' tab shows all orders
  })

  return (
    <div className="w-full">
      <div className="flex mb-4 bg-secondary rounded-lg">
        <Button
          variant={activeTab === "preparation" ? "default" : "ghost"}
          onClick={() => setActiveTab("preparation")}
          className="flex-1 rounded-r-none"
        >
          <Clock className="mr-2" size={16} />
          En Preparación
        </Button>
        <Button
          variant={activeTab === "finished" ? "default" : "ghost"}
          onClick={() => setActiveTab("finished")}
          className="flex-1 rounded-none"
        >
          <CheckCircle className="mr-2" size={16} />
          Finalizadas
        </Button>
        <Button
          variant={activeTab === "history" ? "default" : "ghost"}
          onClick={() => setActiveTab("history")}
          className="flex-1 rounded-l-none"
        >
          <History className="mr-2" size={16} />
          Histórico
        </Button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Pedidos</h2>
        <Button onClick={fetchOrders} disabled={isLoading}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualizar
        </Button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
          <p className="mt-2 text-foreground">Cargando pedidos...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-destructive">
          <p>{error}</p>
          <Button variant="link" onClick={fetchOrders} className="mt-4">
            Reintentar
          </Button>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>
            No hay pedidos{" "}
            {activeTab === "preparation"
              ? "en preparación"
              : activeTab === "finished"
                ? "finalizados"
                : "en el histórico"}
          </p>
        </div>
      ) : (
        <OrderCards orders={filteredOrders} />
      )}
    </div>
  )
}

function OrderCards({ orders }: { orders: Order[] }) {
  return (
    <div className="grid gap-4 mt-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Pedido #{order.id}</CardTitle>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                order.status === "en preparación"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                  : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
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

