import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contractData = {
  contractNumber: "OPSP-VEX-0054-2024",
  contractor: "Ricardo Javier Pupo Diaz",
  contractorId: "1.102.838.856 de Sincelejo",
  email: "rjpd1303@gmail.com",
  startDate: "2025-02-13",
  endDate: "2025-04-30",
  value: "$12,900,000",
  status: "Active",
  description:
    "Prestación de servicios profesionales independientes como Coinvestigador de las actividades 3.1.6, 4.1.3, 4.1.5 de los Objetivos 3 y 4 propias del proyecto de investigación ΒΡΙΝ 2020000100116...",
}

export function ContractDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contract {contractData.contractNumber}</CardTitle>
        <CardDescription>Professional Services Order</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Contractor</h3>
            <p className="mt-1 text-sm text-gray-900">{contractData.contractor}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">ID</h3>
            <p className="mt-1 text-sm text-gray-900">{contractData.contractorId}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className="mt-1 text-sm text-gray-900">{contractData.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
            <p className="mt-1 text-sm text-gray-900">{contractData.startDate}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">End Date</h3>
            <p className="mt-1 text-sm text-gray-900">{contractData.endDate}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Value</h3>
            <p className="mt-1 text-sm text-gray-900">{contractData.value}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <Badge variant="outline" className="mt-1">
              {contractData.status}
            </Badge>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500">Description</h3>
          <p className="mt-1 text-sm text-gray-900">{contractData.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

