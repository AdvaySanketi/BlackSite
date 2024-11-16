import { useRouter } from "next/router";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  PieChart,
  CreditCard,
  Wallet,
  Target,
  FileText,
  TrendingUp,
  TrendingDown,
  LogOut,
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function DashboardPage() {
  const router = useRouter();

  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -120.5,
      date: "2023-04-15",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 3000.0,
      date: "2023-04-01",
    },
    { id: 3, description: "Electric Bill", amount: -85.2, date: "2023-04-10" },
    { id: 4, description: "Online Course", amount: -49.99, date: "2023-04-05" },
    {
      id: 5,
      description: "Restaurant Dinner",
      amount: -65.3,
      date: "2023-04-08",
    },
  ];

  const spendingData = [
    { category: "Housing", amount: 1200 },
    { category: "Food", amount: 400 },
    { category: "Transportation", amount: 200 },
    { category: "Utilities", amount: 150 },
    { category: "Entertainment", amount: 100 },
    { category: "Healthcare", amount: 300 },
    { category: "Misc", amount: 150 },
  ];

  const monthlySpendingData = [
    { name: "Jan", amount: 2500 },
    { name: "Feb", amount: 2300 },
    { name: "Mar", amount: 2800 },
    { name: "Apr", amount: 2400 },
    { name: "May", amount: 2600 },
    { name: "Jun", amount: 2200 },
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
            className="w-full justify-start bg-gray-700 rounded-md hover:bg-gray-600"
            onClick={() => {
              router.push("/");
            }}
          >
            <PieChart className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-md hover:bg-gray-600"
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
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Balance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345.67</div>
              <p className="text-xs text-gray-400">+2.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Income</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,567.89</div>
              <p className="text-xs text-gray-400">+10% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expenses</CardTitle>
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,345.67</div>
              <p className="text-xs text-gray-400">-5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings</CardTitle>
              <Wallet className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,222.00</div>
              <p className="text-xs text-gray-400">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="mt-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger
              value="overview"
              className="px-4 py-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="px-4 py-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="px-4 py-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-green-500"
            >
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription className="text-gray-400">
                  Your latest financial activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell
                          className={`text-right ${
                            transaction.amount > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle>Spending by Category</CardTitle>
                  <CardDescription className="text-gray-400">
                    Your expense distribution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={spendingData}>
                      <XAxis
                        dataKey="category"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Bar
                        dataKey="amount"
                        fill="#adfa1d"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle>Monthly Spending Trend</CardTitle>
                  <CardDescription className="text-gray-400">
                    Your spending over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlySpendingData}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Bar
                        dataKey="amount"
                        fill="#2563eb"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription className="text-gray-400">
                  Summary of your financial reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 mr-2 text-blue-500" />
                      <div>
                        <h3 className="font-semibold">Monthly Summary</h3>
                        <p className="text-sm text-gray-400">April 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <TrendingUp className="h-6 w-6 mr-2 text-green-500" />
                      <div>
                        <h3 className="font-semibold">Income Report</h3>
                        <p className="text-sm text-gray-400">Last 3 months</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <TrendingDown className="h-6 w-6 mr-2 text-red-500" />
                      <div>
                        <h3 className="font-semibold">Expense Analysis</h3>
                        <p className="text-sm text-gray-400">Year to date</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
