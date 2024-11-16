import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Progress } from "@/components/progress";
import {
  DollarSign,
  PieChart,
  CreditCard,
  Wallet,
  Plus,
  Target,
  LogOut,
} from "lucide-react";

export default function GoalSettingPage() {
  const router = useRouter();

  const [goals, setGoals] = useState([
    {
      id: 1,
      name: "Emergency Fund",
      target: 10000,
      current: 5000,
      deadline: "2023-12-31",
    },
    {
      id: 2,
      name: "New Car",
      target: 25000,
      current: 15000,
      deadline: "2024-06-30",
    },
    {
      id: 3,
      name: "Vacation",
      target: 5000,
      current: 2000,
      deadline: "2023-08-31",
    },
  ]);

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
            className="w-full justify-start bg-gray-700 rounded-md hover:bg-gray-600"
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
          <h2 className="text-3xl font-bold">Financial Goals</h2>
        </div>

        <Card className="bg-gray-800 border-gray-700 mb-6 flex-1 justify-center items-center">
          <CardHeader>
            <CardTitle>Add New Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goal-name">Goal Name</Label>
                  <Input
                    id="goal-name"
                    placeholder="e.g., Emergency Fund"
                    className="bg-gray-700 border-gray-600 text-white"
                    required={true}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-amount">Target Amount</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    placeholder="10000"
                    className="bg-gray-700 border-gray-600 text-white"
                    required={true}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-deadline">Deadline</Label>
                  <Input
                    id="goal-deadline"
                    type="date"
                    className="bg-gray-700 border-gray-600 text-white"
                    required={true}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-type">Goal Type</Label>
                  <Input
                    id="goal-type"
                    type="test"
                    placeholder="Eg., Debt Payoff, Savings, Investment, etc."
                    className="bg-gray-700 border-gray-600 text-white"
                    required={true}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600"
                >
                  Create Goal
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <Card key={goal.id} className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle>{goal.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Progress</span>
                    <span>
                      {((goal.current / goal.target) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <Progress
                    value={(goal.current / goal.target) * 100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>${goal.current}</span>
                    <span>${goal.target}</span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <span className="text-sm text-gray-400">Deadline</span>
                    <span className="text-sm">{goal.deadline}</span>
                  </div>
                  <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
                    Update Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
