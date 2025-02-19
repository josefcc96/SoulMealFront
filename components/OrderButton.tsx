"use client"

import { useState } from "react"
import { Utensils } from "lucide-react"
import { post } from "../lib/axios"
import { Button } from "@/components/ui/button"

export function OrderButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOrder = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await post("/order", { type: "random" })
      console.log("Pedido enviado:", response)
      // Here you could show a success toast or notification
    } catch (error) {
      console.error("Error al enviar el pedido:", error)
      setError("No se pudo procesar el pedido. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mb-8">
      <Button onClick={handleOrder} disabled={isLoading} className="w-full py-6 text-lg">
        <Utensils size={22} className="mr-2" />
        <span>{isLoading ? "Enviando..." : "Pedir Plato Aleatorio"}</span>
      </Button>
      {error && <p className="mt-2 text-sm text-destructive text-center">{error}</p>}
    </div>
  )
}

