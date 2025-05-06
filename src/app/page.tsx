import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden md:h-[85vh]">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Главное изображение Гардарики"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="brightness-75"
          data-ai-hint="fantasy battle scene"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold drop-shadow-md md:text-6xl lg:text-7xl" style={{ fontFamily: "'Your Custom Font', sans-serif" }}>
            Начните Сагу о Гардарике
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-foreground/90 drop-shadow md:text-xl">
            Исследуйте мир, пропитанный славянской мифологией, выкуйте свою судьбу и разгадайте древние тайны.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/register">Играть сейчас</Link>
          </Button>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="container mx-auto max-w-screen-xl py-16 px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">Последние обновления и новости</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example News Card 1 */}
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
            <Image
              src="https://picsum.photos/600/400?random=1"
              alt="Миниатюра новости 1"
              width={600}
              height={400}
              className="h-48 w-full object-cover"
               data-ai-hint="game announcement poster"
            />
            <CardHeader>
              <CardTitle className="text-xl">Представлен новый персонаж: Волх</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">Познакомьтесь с Волхом, загадочным колдуном, присоединяющимся к битве в следующем обновлении. Узнайте о его способностях и предыстории.</p>
              <Button variant="link" asChild className="p-0 text-primary">
                <Link href="/news/volkh-reveal">Читать далее</Link>
              </Button>
            </CardContent>
          </Card>

           {/* Example News Card 2 */}
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
             <Image
              src="https://picsum.photos/600/400?random=2"
              alt="Миниатюра новости 2"
              width={600}
              height={400}
              className="h-48 w-full object-cover"
              data-ai-hint="fantasy landscape concept"
            />
            <CardHeader>
              <CardTitle className="text-xl">Исследуйте Морозные Пики</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">Новый регион уже скоро! Откройте для себя коварные Морозные Пики, полные испытаний и наград.</p>
               <Button variant="link" asChild className="p-0 text-primary">
                <Link href="/news/frostfang-peaks">Узнать больше</Link>
              </Button>
            </CardContent>
          </Card>

           {/* Example News Card 3 */}
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
             <Image
              src="https://picsum.photos/600/400?random=3"
              alt="Миниатюра новости 3"
              width={600}
              height={400}
              className="h-48 w-full object-cover"
              data-ai-hint="community event banner"
            />
            <CardHeader>
              <CardTitle className="text-xl">Событие: Фестиваль Летнего Солнцестояния</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">Присоединяйтесь к празднованию! Участвуйте в ограниченных по времени активностях и зарабатывайте эксклюзивные награды во время Фестиваля Летнего Солнцестояния.</p>
               <Button variant="link" asChild className="p-0 text-primary">
                <Link href="/events/summer-solstice">Подробнее о событии</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
           <Button variant="outline" asChild>
            <Link href="/news">Все новости</Link>
           </Button>
        </div>
      </section>

       <Separator className="my-12 bg-border/40" />

      {/* Game Features Section */}
       <section className="container mx-auto max-w-screen-xl py-16 px-4">
         <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">Откройте для себя Гардарику</h2>
         <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
               {/* Replace with Slavic-themed icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
               <h3 className="mb-2 text-xl font-semibold">Богатая славянская мифология</h3>
               <p className="text-muted-foreground">Погрузитесь в мир, вдохновленный древними славянскими мифами, легендами и божествами.</p>
            </div>
             <div className="text-center">
                {/* Replace with Slavic-themed icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-primary"><path d="M18 8L22 12L18 16"/><path d="M6 8L2 12L6 16"/><path d="M14.5 4L9.5 20"/></svg>
               <h3 className="mb-2 text-xl font-semibold">Динамичная Боевая Система</h3>
               <p className="text-muted-foreground">Освойте уникальную боевую систему, сочетающую традиционное оружие с мощной стихийной магией.</p>
            </div>
             <div className="text-center">
                {/* Replace with Slavic-themed icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-primary"><path d="M21.5 12a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z"/><path d="M12 21a9 9 0 0 0 7.5-14.5"/><path d="M12 3a9 9 0 0 1 7.5 14.5"/></svg>
               <h3 className="mb-2 text-xl font-semibold">Обширный Открытый Мир</h3>
               <p className="text-muted-foreground">Исследуйте разнообразные ландшафты, от зачарованных лесов до внушительных крепостей, полных секретов.</p>
            </div>
         </div>
       </section>
    </div>
  );
}
