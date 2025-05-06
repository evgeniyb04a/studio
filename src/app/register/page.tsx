import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-theme(spacing.14)-theme(spacing.14))] max-w-lg flex-col items-center justify-center py-12 px-4">
       {/* Adjusted min-height calculation for header/footer */}
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create Your Gardariki Account</CardTitle>
          <CardDescription>Join the adventure! Sign up to start playing.</CardDescription>
        </CardHeader>
        <CardContent>
           {/* This is a placeholder form. Registration logic needs implementation. */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Choose your hero name" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Choose a strong password" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="Retype your password" required />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Register
            </Button>
          </form>
           <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Log In
            </Link>
          </p>
           <p className="mt-2 text-center text-xs text-muted-foreground">
            By registering, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and{' '}
            <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
