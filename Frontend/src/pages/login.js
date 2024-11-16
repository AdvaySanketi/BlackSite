import { useRouter } from "next/router";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { DollarSign } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="flex flex-col items-center">
          <div className="bg-green-500 p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl text-center">
            BlackSite Finance
          </CardTitle>
          <CardDescription className="text-gray-400">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 -mt-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              className="bg-gray-700 border-gray-600 text-white"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-gray-700 border-gray-600 text-white"
              required={true}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
