import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Placeholder News Data - Replace with actual data fetching/CMS integration
const newsItems = [
  { id: 1, title: "Представлен новый персонаж: Волх", date: "2024-07-20", category: "Персонажи", imageUrl: "https://picsum.photos/600/400?random=1", excerpt: "Познакомьтесь с Волхом, загадочным колдуном, присоединяющимся к битве...", slug: "/news/volkh-reveal" },
  { id: 2, title: "Исследуйте Морозные Пики", date: "2024-07-15", category: "Обновление мира", imageUrl: "https://picsum.photos/600/400?random=2", excerpt: "Новый регион уже скоро! Откройте для себя коварные Морозные Пики...", slug: "/news/frostfang-peaks" },
  { id: 3, title: "Событие: Фестиваль Летнего Солнцестояния", date: "2024-07-10", category: "События", imageUrl: "https://picsum.photos/600/400?random=3", excerpt: "Присоединяйтесь к празднованию! Участвуйте в ограниченных по времени активностях...", slug: "/events/summer-solstice" },
  { id: 4, title: "Выпущен патч 1.2.5", date: "2024-07-05", category: "Обновления", imageUrl: "https://picsum.photos/600/400?random=4", excerpt: "Прочтите полные детали последнего обновления игры, включая исправления ошибок и изменения баланса...", slug: "/news/patch-1-2-5" },
  { id: 5, title: "Дневник разработчика: Создание славянской атмосферы", date: "2024-06-28", category: "Дневник разработчика", imageUrl: "https://picsum.photos/600/400?random=5", excerpt: "Загляните за кулисы с командой художников, обсуждающих оживление мира Гардарики...", slug: "/news/dev-diary-atmosphere" },
  // Add more news items
];

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Новости и обновления Гардарики</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Будьте в курсе последних событий в мире Гардарики.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
            <Link href={item.slug} className="block">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                data-ai-hint={`${item.category} game news`}
              />
            </Link>
            <CardHeader className="flex-grow p-4">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <Badge variant="secondary">{item.category}</Badge>
              </div>
              <Link href={item.slug} className="block">
                <CardTitle className="text-lg hover:text-primary">{item.title}</CardTitle>
              </Link>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="mb-4 text-sm text-muted-foreground">{item.excerpt}</p>
              <Button variant="link" asChild className="p-0 text-primary">
                <Link href={item.slug}>Читать далее →</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for Pagination */}
      <div className="mt-12 text-center">
        <Button variant="outline" disabled>Загрузить еще</Button>
      </div>
    </div>
  );
}
