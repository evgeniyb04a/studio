import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MiniGamesPage() {
  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Gardariki Mini-Games</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Take a break from the main adventure and enjoy these side experiences set in the world of Gardariki.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Visual Novel Section */}
        <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
          <Image
            src="https://picsum.photos/600/400?random=mg1"
            alt="Visual Novel Scene"
            width={600}
            height={400}
            className="h-56 w-full object-cover"
            data-ai-hint="visual novel screenshot"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Tales of the Hearth</CardTitle>
            <CardDescription>Interactive visual novels exploring untold stories of Gardariki's inhabitants.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Make choices that shape the narrative and uncover hidden lore. Experience heartwarming tales and thrilling encounters from new perspectives.
            </p>
            {/* Link to actual visual novel section or external platform */}
            <Button variant="outline" disabled>
               Coming Soon
            </Button>
          </CardContent>
        </Card>

        {/* Board Game Section */}
        <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
          <Image
            src="https://picsum.photos/600/400?random=mg2"
            alt="Slavic Board Game"
            width={600}
            height={400}
            className="h-56 w-full object-cover"
            data-ai-hint="fantasy board game"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Kosti & Runes</CardTitle>
            <CardDescription>A strategic digital board game of chance and foresight inspired by ancient Slavic pastimes.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Challenge friends or AI opponents in this game of strategy. Roll the bones, interpret the runes, and outmaneuver your rivals to claim victory.
            </p>
             {/* Link to actual board game or information */}
             <Button variant="outline" disabled>
                Learn More (Coming Soon)
             </Button>
          </CardContent>
        </Card>

         {/* Placeholder for future mini-games */}
         {/*
         <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
           <CardHeader>
             <CardTitle className="text-2xl">More Games to Come!</CardTitle>
             <CardDescription>We're always working on new ways to experience Gardariki.</CardDescription>
           </CardHeader>
           <CardContent>
             <p className="text-sm text-muted-foreground">
               Stay tuned for more exciting mini-games and side activities!
             </p>
           </CardContent>
         </Card>
         */}
      </div>
    </div>
  );
}
