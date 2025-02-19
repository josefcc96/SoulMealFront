import { UtensilsCrossed } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <UtensilsCrossed size={32} />
          <h1 className="text-3xl font-bold">Jornada de Almuerzo Gratis</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

