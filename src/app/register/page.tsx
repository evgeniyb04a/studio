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
          <CardTitle className="text-2xl">Создайте свой аккаунт в Гардарике</CardTitle>
          <CardDescription>Присоединяйтесь к приключению! Зарегистрируйтесь, чтобы начать играть.</CardDescription>
        </CardHeader>
        <CardContent>
           {/* This is a placeholder form. Registration logic needs implementation. */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Имя пользователя</Label>
              <Input id="username" placeholder="Выберите имя героя" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="email">Адрес эл. почты</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" placeholder="Выберите надежный пароль" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтвердите пароль</Label>
              <Input id="confirm-password" type="password" placeholder="Введите пароль еще раз" required />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Зарегистрироваться
            </Button>
          </form>
           <p className="mt-4 text-center text-sm text-muted-foreground">
            Уже есть аккаунт?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Войти
            </Link>
          </p>
           <p className="mt-2 text-center text-xs text-muted-foreground">
            Регистрируясь, вы соглашаетесь с нашими{' '}
            <Link href="/terms" className="underline hover:text-primary">Условиями обслуживания</Link> и{' '}
            <Link href="/privacy" className="underline hover:text-primary">Политикой конфиденциальности</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
