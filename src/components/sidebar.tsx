import { FileText, Users, Settings } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <FileText className="h-5 w-5" />
          <span>Contracts</span>
        </Link>
        <Link
          href="/users"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Users className="h-5 w-5" />
          <span>Users</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}

