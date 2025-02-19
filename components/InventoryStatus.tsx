"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { get } from "../lib/axios"

type InventoryItem = {
  ingredient: string
  quantity: number
  icon: string
}

export function InventoryStatus() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchInventory = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await get("/inventory")
      setInventory(data)
    } catch (error) {
      console.error("Error fetching inventory:", error)
      setError("No se pudo cargar el inventario. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchInventory()
  }, [fetchInventory])

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Inventario de Bodega</CardTitle>
        <Button onClick={fetchInventory} disabled={isLoading} size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualizar
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
            <p className="mt-2 text-foreground">Cargando inventario...</p>
          </div>
        ) : error ? (
          <div className="text-center py-4 text-destructive">
            <p>{error}</p>
            <Button variant="link" onClick={fetchInventory} className="mt-2">
              Reintentar
            </Button>
          </div>
        ) : (
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
        )}
      </CardContent>
    </Card>
  )
}

