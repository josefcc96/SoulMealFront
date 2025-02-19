import { Button } from "@/components/ui/button"
import { Utensils } from "lucide-react"

export function OrderButton() {
  const handleOrder = async () => {
    // Implementar lógica para enviar pedido al backend
    console.log("Pedido enviado")
  }

  return (
    <div className="mb-8">
      <Button
        onClick={handleOrder}
        className="w-full py-8 text-xl bg-accent hover:bg-accent/90 text-accent-foreground transition-colors duration-300 shadow-lg rounded-xl flex items-center justify-center space-x-2"
      >
        <Utensils size={24} />
        <span>Pedir Plato Aleatorio</span>
      </Button>
    </div>
  )
}

