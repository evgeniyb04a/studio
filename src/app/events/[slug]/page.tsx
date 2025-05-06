import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Gift } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Placeholder function to fetch event data based on slug
async function getEventDetails(slug: string) {
  // Simulate fetching data
  await new Promise(resolve => setTimeout(resolve, 100));

  const events: { [key: string]: any } = {
    'summer-solstice': {
      title: "Событие: Фестиваль Летнего Солнцестояния",
      startDate: "2024-07-10",
      endDate: "2024-07-24",
      category: "Временное событие",
      imageUrl: "https://picsum.photos/1200/600?random=3",
      imageAiHint: "summer festival banner",
      description: `
        <p>Приближается самый длинный день в году! Присоединяйтесь к жителям Гардарики в праздновании Летнего Солнцестояния с пиршествами, играми и древними ритуалами. Это временное событие приносит новые активности и эксклюзивные награды.</p>
      `,
      activities: [
        { name: "Ритуал Солнечного Камня", description: "Помогите жрецам собрать Фрагменты Солнечного Камня, чтобы зажечь Маяк Солнцестояния и заработать валюту события." },
        { name: "Испытание Пламени", description: "Проверьте свое боевое мастерство против огненных духов в новом сложном домене события." },
        { name: "Мед и Веселье", description: "Участвуйте в мини-играх, таких как соревнования по стрельбе из лука и состязания по выпивке на фестивальных площадках." },
        { name: "Бонус за вход", description: "Получайте ежедневные награды просто за вход в игру во время периода события." }
      ],
      rewards: [
        { name: "Корона Солнцестояния (Косметика)", imageUrl: "https://picsum.photos/100/100?random=r1", dataAiHint: "golden crown icon" },
        { name: "Улучшение оружия Солнечный Лепесток", imageUrl: "https://picsum.photos/100/100?random=r2", dataAiHint: "glowing flower item" },
        { name: "Валюта события и материалы для улучшения", imageUrl: "https://picsum.photos/100/100?random=r3", dataAiHint: "gold coins pile" },
        { name: "Эксклюзивные рецепты еды", imageUrl: "https://picsum.photos/100/100?random=r4", dataAiHint: "recipe book icon" }
      ]
    },
    // Add more events
  };

  return events[slug] || null;
}

export default async function EventDetailsPage({ params }: { params: { slug: string } }) {
  const event = await getEventDetails(params.slug);

  if (!event) {
    return <div className="container mx-auto py-12 px-4 text-center">Событие не найдено.</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild>
          {/* Link back to a potential events list page or homepage news */}
          <Link href="/#news">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Link>
        </Button>
      </div>

      <article>
        <header className="mb-8">
           <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1.5 h-4 w-4" />
                <span>{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</span>
              </div>
              <Badge variant="default">{event.category}</Badge>
            </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{event.title}</h1>
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={1200}
            height={600}
            className="mb-6 w-full rounded-lg object-cover shadow-md"
            priority
            data-ai-hint={event.imageAiHint}
          />
        </header>

        <div className="prose prose-invert max-w-none dark:prose-invert prose-lg prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
             dangerouslySetInnerHTML={{ __html: event.description }} />

        {/* Activities Section */}
        <section className="mt-10">
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Активности События</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {event.activities.map((activity: any, index: number) => (
                     <Card key={index} className="shadow-sm">
                        <CardHeader>
                             <CardTitle className="text-xl">{activity.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{activity.description}</p>
                        </CardContent>
                     </Card>
                ))}
            </div>
        </section>

         {/* Rewards Section */}
        <section className="mt-10">
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Эксклюзивные Награды</h2>
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                 {event.rewards.map((reward: any, index: number) => (
                    <Card key={index} className="flex flex-col items-center p-4 text-center shadow-sm">
                        <Image
                            src={reward.imageUrl}
                            alt={reward.name}
                            width={80}
                            height={80}
                            className="mb-2 rounded-md"
                            data-ai-hint={reward.dataAiHint}
                        />
                        <p className="text-sm font-medium">{reward.name}</p>
                    </Card>
                 ))}
            </div>
        </section>

      </article>
    </div>
  );
}

// Generate static paths for known events if desired
// export async function generateStaticParams() {
//   const slugs = ['summer-solstice'];
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }
