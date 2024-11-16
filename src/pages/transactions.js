import { useRouter } from "next/router";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Input } from "@/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import {
  DollarSign,
  Search,
  Filter,
  Plus,
  PieChart,
  CreditCard,
  Wallet,
  Target,
  LogOut,
} from "lucide-react";

export default function TransactionsPage() {
  const router = useRouter();

  const transactions = [
    {
      id: 1,
      date: "2023-04-01",
      description: "Grocery Shopping",
      amount: -120.5,
      category: "Food",
    },
    {
      id: 2,
      date: "2023-04-02",
      description: "Salary Deposit",
      amount: 3000.0,
      category: "Income",
    },
    {
      id: 3,
      date: "2023-04-03",
      description: "Electric Bill",
      amount: -85.2,
      category: "Utilities",
    },
    {
      id: 4,
      date: "2023-04-05",
      description: "Online Course",
      amount: -49.99,
      category: "Education",
    },
    {
      id: 5,
      date: "2023-04-07",
      description: "Restaurant Dinner",
      amount: -65.3,
      category: "Dining Out",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <aside className="w-60 bg-gray-800 p-4">
        <div className="flex items-center mt-2 ml-2 mb-5">
          <DollarSign className="h-8 w-8 text-green-500 mr-2" />
          <h1 className="text-2xl font-bold">BlackSite</h1>
        </div>
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start rounded-md hover:bg-gray-600"
            onClick={() => {
              router.push("/");
            }}
          >
            <PieChart className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start bg-gray-700 rounded-md hover:bg-gray-600"
            onClick={() => {
              router.push("/transactions");
            }}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Transactions
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-md hover:bg-gray-600"
            onClick={() => {
              router.push("/goals");
            }}
          >
            <Target className="mr-2 h-4 w-4" />
            Goals
          </Button>
          <div className="flex fixed bottom-7 w-60 left-0 right-0 px-4">
            <Button
              variant="ghost"
              className="w-full justify-start rounded-md bg-gray-700 hover:bg-gray-600 px-7 py-5 text-center"
              onClick={() => {
                router.push("/login");
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Transactions</h2>
          <Button className="bg-green-500 hover:bg-green-600 flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Add Transaction
          </Button>
        </div>

        <Card className="bg-gray-800 border border-gray-700 mb-6">
          <CardContent className="mt-6">
            <div className="flex space-x-4">
              <Input
                placeholder="Search transactions..."
                className="flex-1 bg-gray-700 border border-gray-600 text-gray-100"
              />
              <Button
                variant="outline"
                className="border border-gray-600 flex items-center p-6"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border border-gray-700 pt-3">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell
                      className={`text-right ${
                        transaction.amount > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      ₹{Math.abs(transaction.amount).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
