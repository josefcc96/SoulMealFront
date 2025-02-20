import { UtensilsCrossed } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <UtensilsCrossed size={28} />
          <h1 className="text-2xl font-semibold">SoulMeal</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Acerca de
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jose-f-campo-campo/" className="hover:text-accent transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

