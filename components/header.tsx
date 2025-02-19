import { UtensilsCrossed } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <UtensilsCrossed size={28} />
          <h1 className="text-2xl font-semibold">Jornada de Almuerzo Gratis</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Contacto
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

