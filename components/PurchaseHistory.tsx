"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { get } from "../lib/axios"

type Purchase = {
  id: number
  ingredient: string
  quantity: number
  date: string
  icon: string
}

export function PurchaseHistory() {
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPurchases = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await get("/purchases")
      setPurchases(data)
    } catch (error) {
      console.error("Error fetching purchases:", error)
      setError("No se pudo cargar el historial de compras. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPurchases()
  }, [fetchPurchases])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Historial de Compras</CardTitle>
        <Button onClick={fetchPurchases} disabled={isLoading} size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualizar
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
            <p className="mt-2 text-foreground">Cargando historial de compras...</p>
          </div>
        ) : error ? (
          <div className="text-center py-4 text-destructive">
            <p>{error}</p>
            <Button variant="link" onClick={fetchPurchases} className="mt-2">
              Reintentar
            </Button>
          </div>
        ) : (
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
        )}
      </CardContent>
    </Card>
  )
}

