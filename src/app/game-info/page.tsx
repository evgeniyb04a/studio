import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function GameInfoPage() {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Explore the World of Gardariki</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Delve into the rich lore, meet the heroes, and discover the vast lands of Gardariki.
      </p>

      <Tabs defaultValue="world" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="world">The World</TabsTrigger>
          <TabsTrigger value="characters">Characters</TabsTrigger>
          <TabsTrigger value="history">History & Lore</TabsTrigger>
        </TabsList>

        {/* World Tab */}
        <TabsContent value="world">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Discover the Realms</CardTitle>
              <CardDescription>An overview of the diverse lands that make up Gardariki.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="https://picsum.photos/800/500?random=10"
                    alt="World Map Snippet"
                    width={800}
                    height={500}
                    className="mb-4 rounded-lg shadow-md"
                    data-ai-hint="fantasy world map"
                  />
                  <h3 className="mb-2 text-xl font-semibold">A Land of Myth and Legend</h3>
                  <p className="text-muted-foreground">
                    Gardariki is a sprawling continent where ancient forests whisper secrets, towering mountains pierce the clouds, and mystical rivers carve through the land. It's a realm shaped by powerful deities and inhabited by creatures both wondrous and terrifying. From the sun-drenched plains of Yav to the shadowed swamps of Nav, adventure awaits in every corner.
                  </p>
                </div>
                 <div>
                  <h4 className="mb-4 text-lg font-semibold">Key Regions:</h4>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>The Sunstone Steppes</AccordionTrigger>
                      <AccordionContent>
                        Vast, open plains bathed in eternal sunlight, home to nomadic tribes and ancient megalithic structures. Beware the roaming griffins.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Whispering Woods of Leshy</AccordionTrigger>
                      <AccordionContent>
                        An ancient, enchanted forest protected by the enigmatic Leshy. Strange flora and fauna thrive here, but not all are friendly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>The Frozen Citadel of Chernobog</AccordionTrigger>
                      <AccordionContent>
                        A formidable fortress carved into a glacier, said to be the domain of the dark god Chernobog. Only the bravest venture near.
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                      <AccordionTrigger>Nav, the Shadow Mire</AccordionTrigger>
                      <AccordionContent>
                        A treacherous swamp where the veil between worlds is thin. Spirits linger, and dangerous beasts lurk beneath the murky waters.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Characters Tab */}
        <TabsContent value="characters">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Meet the Heroes</CardTitle>
              <CardDescription>The brave souls who shape the destiny of Gardariki.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                 {/* Character Card 1 */}
                <Card className="overflow-hidden text-center">
                   <Image
                    src="https://picsum.photos/400/500?random=21"
                    alt="Character Portrait 1"
                    width={400}
                    height={500}
                    className="h-64 w-full object-cover object-top"
                    data-ai-hint="female warrior portrait"
                  />
                  <CardHeader className="p-4">
                    <CardTitle>Svetlana, Shieldmaiden of Perun</CardTitle>
                    <CardDescription className="text-sm text-primary">Thunder's Fury</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">A valiant warrior blessed by the god of thunder, fiercely protective of her homeland.</p>
                  </CardContent>
                </Card>
                 {/* Character Card 2 */}
                 <Card className="overflow-hidden text-center">
                   <Image
                    src="https://picsum.photos/400/500?random=22"
                    alt="Character Portrait 2"
                    width={400}
                    height={500}
                    className="h-64 w-full object-cover object-top"
                    data-ai-hint="male rogue archer"
                  />
                  <CardHeader className="p-4">
                    <CardTitle>Ratibor, the Silent Arrow</CardTitle>
                     <CardDescription className="text-sm text-primary">Forest's Shadow</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">A master archer and tracker raised in the Whispering Woods, moving unseen and striking true.</p>
                  </CardContent>
                </Card>
                 {/* Character Card 3 */}
                 <Card className="overflow-hidden text-center">
                   <Image
                    src="https://picsum.photos/400/500?random=23"
                    alt="Character Portrait 3"
                    width={400}
                    height={500}
                    className="h-64 w-full object-cover object-top"
                    data-ai-hint="old wise wizard"
                  />
                  <CardHeader className="p-4">
                    <CardTitle>Volodar, Keeper of Runes</CardTitle>
                     <CardDescription className="text-sm text-primary">Ancient Wisdom</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">An ancient sage wielding powerful runic magic, seeking to preserve the balance of the world.</p>
                  </CardContent>
                </Card>
                 {/* Add more character cards as needed */}
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">The Saga Unfolds</CardTitle>
              <CardDescription>Fragments of Gardariki's long and tumultuous past.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div>
                  <h3 className="mb-2 text-xl font-semibold">The Age of Creation</h3>
                   <p className="text-muted-foreground">
                    In the beginning, the primordial gods Rod and Rozhanitsy shaped the cosmos from chaos. They birthed Svarog, the celestial smith, who forged the heavens and the earth. Perun, Veles, and other powerful deities emerged, establishing their domains and shaping the mortal realm of Gardariki.
                  </p>
               </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">The Great Schism</h3>
                   <p className="text-muted-foreground">
                    A cataclysmic conflict erupted between the gods of light (Prav) and darkness (Nav), led by Perun and Veles respectively. This divine war scarred the land, sundered alliances, and left behind powerful artifacts and lingering magical energies that continue to influence the world today.
                  </p>
               </div>
               <div>
                  <h3 className="mb-2 text-xl font-semibold">The Rise of Heroes</h3>
                   <p className="text-muted-foreground">
                    Through ages of strife and prosperity, mortal heroes rose to prominence. Guided by fate or chosen by the gods, these individuals performed legendary deeds, battled monstrous beasts, and founded the great strongholds (gards) that dot the landscape. Their stories are sung by bards and etched into the very stones of Gardariki.
                  </p>
               </div>
                {/* Add more historical periods/lore sections */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
