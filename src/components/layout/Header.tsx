import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainIcon } from 'lucide-react'; // Using a placeholder icon

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for Gardariki Logo/Icon */}
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Гардарики</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/game-info"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Об игре
          </Link>
          <Link
            href="/profile"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Профиль
          </Link>
          <Link
            href="/media"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Медиа
          </Link>
          <Link
            href="/mini-games"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Мини-игры
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Replace with actual registration link/modal logic */}
          <Button asChild variant="default" size="sm">
            <Link href="/register">Регистрация</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
