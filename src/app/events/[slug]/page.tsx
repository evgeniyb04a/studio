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
      title: "Summer Solstice Festival Event",
      startDate: "2024-07-10",
      endDate: "2024-07-24",
      category: "Limited-Time Event",
      imageUrl: "https://picsum.photos/1200/600?random=3",
      imageAiHint: "summer festival banner",
      description: `
        <p>The longest day of the year approaches! Join the inhabitants of Gardariki in celebrating the Summer Solstice with feasting, games, and ancient rituals. This limited-time event brings new activities and exclusive rewards.</p>
      `,
      activities: [
        { name: "Sunstone Ritual", description: "Help the priests gather Sunstone Fragments to power the Solstice Beacon and earn event currency." },
        { name: "Trial of Flames", description: "Test your combat prowess against fiery spirits in a challenging new event domain." },
        { name: "Mead & Merriment", description: "Participate in mini-games like archery contests and drinking competitions in the festival grounds." },
        { name: "Log-in Bonus", description: "Receive daily rewards just for logging in during the event period." }
      ],
      rewards: [
        { name: "Solstice Crown (Cosmetic)", imageUrl: "https://picsum.photos/100/100?random=r1", dataAiHint: "golden crown icon" },
        { name: "Sunpetal Weapon Augment", imageUrl: "https://picsum.photos/100/100?random=r2", dataAiHint: "glowing flower item" },
        { name: "Event Currency & Upgrade Materials", imageUrl: "https://picsum.photos/100/100?random=r3", dataAiHint: "gold coins pile" },
        { name: "Exclusive Food Recipes", imageUrl: "https://picsum.photos/100/100?random=r4", dataAiHint: "recipe book icon" }
      ]
    },
    // Add more events
  };

  return events[slug] || null;
}

export default async function EventDetailsPage({ params }: { params: { slug: string } }) {
  const event = await getEventDetails(params.slug);

  if (!event) {
    return <div className="container mx-auto py-12 px-4 text-center">Event not found.</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild>
          {/* Link back to a potential events list page or homepage news */}
          <Link href="/#news">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
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
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Event Activities</h2>
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
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Exclusive Rewards</h2>
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
