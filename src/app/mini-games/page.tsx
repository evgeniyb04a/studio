import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MiniGamesPage() {
  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Мини-игры Гардарики</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Отдохните от основного приключения и насладитесь этими побочными развлечениями в мире Гардарики.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Visual Novel Section */}
        <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
          <Image
            src="https://picsum.photos/600/400?random=mg1"
            alt="Сцена визуальной новеллы"
            width={600}
            height={400}
            className="h-56 w-full object-cover"
            data-ai-hint="visual novel screenshot"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Сказания Очага</CardTitle>
            <CardDescription>Интерактивные визуальные новеллы, раскрывающие нерассказанные истории жителей Гардарики.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Принимайте решения, которые формируют повествование и раскрывают скрытую историю. Переживите трогательные истории и захватывающие встречи с новых точек зрения.
            </p>
            {/* Link to actual visual novel section or external platform */}
            <Button variant="outline" disabled>
               Скоро
            </Button>
          </CardContent>
        </Card>

        {/* Board Game Section */}
        <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
          <Image
            src="https://picsum.photos/600/400?random=mg2"
            alt="Славянская настольная игра"
            width={600}
            height={400}
            className="h-56 w-full object-cover"
            data-ai-hint="fantasy board game"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Кости и Руны</CardTitle>
            <CardDescription>Стратегическая цифровая настольная игра на удачу и предвидение, вдохновленная древними славянскими развлечениями.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Бросьте вызов друзьям или ИИ-оппонентам в этой стратегической игре. Бросайте кости, толкуйте руны и перехитрите своих соперников, чтобы одержать победу.
            </p>
             {/* Link to actual board game or information */}
             <Button variant="outline" disabled>
                Узнать больше (Скоро)
             </Button>
          </CardContent>
        </Card>

         {/* Placeholder for future mini-games */}
         {/*
         <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
           <CardHeader>
             <CardTitle className="text-2xl">Скоро будет больше игр!</CardTitle>
             <CardDescription>Мы всегда работаем над новыми способами познакомиться с Гардарикой.</CardDescription>
           </CardHeader>
           <CardContent>
             <p className="text-sm text-muted-foreground">
               Следите за новостями о других захватывающих мини-играх и побочных активностях!
             </p>
           </CardContent>
         </Card>
         */}
      </div>
    </div>
  );
}
