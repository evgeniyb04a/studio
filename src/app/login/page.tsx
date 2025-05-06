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
          <CardTitle className="text-2xl">С возвращением в Гардарику</CardTitle>
          <CardDescription>Войдите, чтобы продолжить свое приключение.</CardDescription>
        </CardHeader>
        <CardContent>
           {/* This is a placeholder form. Login logic needs implementation. */}
          <form className="space-y-4">
             <div className="space-y-2">
              <Label htmlFor="email">Эл. почта или имя пользователя</Label>
              <Input id="email" placeholder="Введите вашу эл. почту или имя пользователя" required />
            </div>
            <div className="space-y-2">
               <div className="flex items-center justify-between">
                <Label htmlFor="password">Пароль</Label>
                 <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                    Забыли пароль?
                 </Link>
               </div>
              <Input id="password" type="password" placeholder="Введите ваш пароль" required />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Войти
            </Button>
          </form>
           <p className="mt-4 text-center text-sm text-muted-foreground">
            Нет аккаунта?{' '}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Зарегистрируйтесь сейчас
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
