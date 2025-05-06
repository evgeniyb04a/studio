import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-theme(spacing.14)-theme(spacing.14))] max-w-lg flex-col items-center justify-center py-12 px-4">
       {/* Adjusted min-height calculation for header/footer */}
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back to Gardariki</CardTitle>
          <CardDescription>Log in to continue your adventure.</CardDescription>
        </CardHeader>
        <CardContent>
           {/* This is a placeholder form. Login logic needs implementation. */}
          <form className="space-y-4">
             <div className="space-y-2">
              <Label htmlFor="email">Email or Username</Label>
              <Input id="email" placeholder="Enter your email or username" required />
            </div>
            <div className="space-y-2">
               <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                 <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                    Forgot password?
                 </Link>
               </div>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Log In
            </Button>
          </form>
           <p className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Register Now
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
