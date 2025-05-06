import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

// Placeholder data - replace with actual media URLs and descriptions
const trailers = [
  { id: 1, title: "Гардарики - Официальный трейлер-анонс", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnailUrl: "https://picsum.photos/640/360?random=t1", description: "Первый взгляд на мир и геймплей Гардарики." },
  { id: 2, title: "В центре внимания: Светлана", videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0", thumbnailUrl: "https://picsum.photos/640/360?random=t2", description: "Погрузитесь в способности и историю Светланы." },
  // Add more trailers
];

const screenshots = [
  { id: 1, alt: "Скриншот Солнечных Степей", imageUrl: "https://picsum.photos/1280/720?random=s1", dataAiHint: "fantasy landscape steppe" },
  { id: 2, alt: "Скриншот динамичного боя", imageUrl: "https://picsum.photos/1280/720?random=s2", dataAiHint: "action game combat" },
  { id: 3, alt: "Скриншот Шепчущего Леса", imageUrl: "https://picsum.photos/1280/720?random=s3", dataAiHint: "enchanted forest game" },
  { id: 4, alt: "Скриншот кастомизации персонажа", imageUrl: "https://picsum.photos/1280/720?random=s4", dataAiHint: "character creation screen" },
  { id: 5, alt: "Скриншот деревни", imageUrl: "https://picsum.photos/1280/720?random=s5", dataAiHint: "medieval village rpg" },
  { id: 6, alt: "Скриншот битвы с боссом", imageUrl: "https://picsum.photos/1280/720?random=s6", dataAiHint: "fantasy boss battle" },
  // Add more screenshots
];

const conceptArt = [
  { id: 1, alt: "Концепт-арт Володара", imageUrl: "https://picsum.photos/800/1000?random=c1", dataAiHint: "wizard character concept" },
  { id: 2, alt: "Концепт-арт Ледяной Цитадели", imageUrl: "https://picsum.photos/1200/700?random=c2", dataAiHint: "ice castle environment" },
  { id: 3, alt: "Концепт-арт мифического существа", imageUrl: "https://picsum.photos/900/900?random=c3", dataAiHint: "fantasy creature design" },
  { id: 4, alt: "Ранние наброски персонажей", imageUrl: "https://picsum.photos/1000/800?random=c4", dataAiHint: "character design sketches" },
  // Add more concept art
];


export default function MediaPage() {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Медиа Галерея</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Оцените красоту и динамику Гардарики через трейлеры, скриншоты и концепт-арты.
      </p>

      <Tabs defaultValue="trailers" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="trailers">Трейлеры</TabsTrigger>
          <TabsTrigger value="screenshots">Скриншоты</TabsTrigger>
          <TabsTrigger value="concept-art">Концепт-арт</TabsTrigger>
        </TabsList>

        {/* Trailers Tab */}
        <TabsContent value="trailers">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {trailers.map((trailer) => (
              <Card key={trailer.id} className="overflow-hidden shadow-md">
                <div className="aspect-video">
                   <iframe
                    width="100%"
                    height="100%"
                    src={trailer.videoUrl}
                    title={trailer.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 font-semibold">{trailer.title}</h3>
                  <p className="text-sm text-muted-foreground">{trailer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Screenshots Tab */}
        <TabsContent value="screenshots">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((ss) => (
              <Card key={ss.id} className="group relative overflow-hidden shadow-md">
                <Image
                  src={ss.imageUrl}
                  alt={ss.alt}
                  width={1280}
                  height={720}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={ss.dataAiHint}
                />
                 {/* Future enhancement: Add lightbox functionality on click */}
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Concept Art Tab */}
        <TabsContent value="concept-art">
           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conceptArt.map((art) => (
              <Card key={art.id} className="group relative overflow-hidden shadow-md">
                <Image
                  src={art.imageUrl}
                  alt={art.alt}
                  width={1200}
                  height={800} // Adjust based on typical concept art aspect ratios
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" // Adjust aspect ratio as needed
                  data-ai-hint={art.dataAiHint}
                />
                 {/* Future enhancement: Add lightbox functionality on click */}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
