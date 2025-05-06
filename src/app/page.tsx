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
          alt="Gardariki Hero Image"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="brightness-75"
          data-ai-hint="fantasy battle scene"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold drop-shadow-md md:text-6xl lg:text-7xl" style={{ fontFamily: "'Your Custom Font', sans-serif" }}>
            Embark on the Saga of Gardariki
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-foreground/90 drop-shadow md:text-xl">
            Explore a world steeped in Slavic mythology, forge your destiny, and unravel ancient mysteries.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/register">Play Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="container mx-auto max-w-screen-xl py-16 px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">Latest Updates & News</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example News Card 1 */}
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
            <Image
              src="https://picsum.photos/600/400?random=1"
              alt="News Thumbnail 1"
              width={600}
              height={400}
              className="h-48 w-full object-cover"
               data-ai-hint="game announcement poster"
            />
            <CardHeader>
              <CardTitle className="text-xl">New Character Revealed: Volkh</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">Meet Volkh, the enigmatic sorcerer joining the fray in the next update. Learn about his abilities and backstory.</p>
              <Button variant="link" asChild className="p-0 text-primary">
                <Link href="/news/volkh-reveal">Read More</Link>
              </Button>
            </CardContent>
          </Card>

           {/* Example News Card 2 */}
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
             <Image
              src="https://picsum.photos/600/400?random=2"
              alt="News Thumbnail 2"
              width={600}
              height={400}
              className="h-48 w-full object-cover"
              data-ai-hint="fantasy landscape concept"
            />
            <CardHeader>
              <CardTitle className="text-xl">Explore the Frostfang Peaks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">A new region is coming! Discover the treacherous Frostfang Peaks, teeming with challenges and rewards.</p>
               <Button variant="link" asChild className="p-0 text-primary">
                <Link href="/news/frostfang-peaks">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

           {/* Example News Card 3 */}
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
             <Image
              src="https://picsum.photos/600/400?random=3"
              alt="News Thumbnail 3"
              width={600}
              height={400}
              className="h-48 w-full object-cover"
              data-ai-hint="community event banner"
            />
            <CardHeader>
              <CardTitle className="text-xl">Summer Solstice Festival Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">Join the celebration! Participate in limited-time activities and earn exclusive rewards during the Summer Solstice Festival.</p>
               <Button variant="link" asChild className="p-0 text-primary">
                <Link href="/events/summer-solstice">Event Details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
           <Button variant="outline" asChild>
            <Link href="/news">View All News</Link>
           </Button>
        </div>
      </section>

       <Separator className="my-12 bg-border/40" />

      {/* Game Features Section */}
       <section className="container mx-auto max-w-screen-xl py-16 px-4">
         <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">Discover Gardariki</h2>
         <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
               {/* Replace with Slavic-themed icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
               <h3 className="mb-2 text-xl font-semibold">Rich Slavic Mythology</h3>
               <p className="text-muted-foreground">Immerse yourself in a world inspired by ancient Slavic folklore, legends, and deities.</p>
            </div>
             <div className="text-center">
                {/* Replace with Slavic-themed icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-primary"><path d="M18 8L22 12L18 16"/><path d="M6 8L2 12L6 16"/><path d="M14.5 4L9.5 20"/></svg>
               <h3 className="mb-2 text-xl font-semibold">Dynamic Combat</h3>
               <p className="text-muted-foreground">Master a unique combat system blending traditional weaponry with powerful elemental magic.</p>
            </div>
             <div className="text-center">
                {/* Replace with Slavic-themed icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 h-12 w-12 text-primary"><path d="M21.5 12a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z"/><path d="M12 21a9 9 0 0 0 7.5-14.5"/><path d="M12 3a9 9 0 0 1 7.5 14.5"/></svg>
               <h3 className="mb-2 text-xl font-semibold">Vast Open World</h3>
               <p className="text-muted-foreground">Explore diverse landscapes, from enchanted forests to imposing fortresses, full of secrets.</p>
            </div>
         </div>
       </section>
    </div>
  );
}
