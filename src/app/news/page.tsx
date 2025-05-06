import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Placeholder News Data - Replace with actual data fetching/CMS integration
const newsItems = [
  { id: 1, title: "New Character Revealed: Volkh", date: "2024-07-20", category: "Characters", imageUrl: "https://picsum.photos/600/400?random=1", excerpt: "Meet Volkh, the enigmatic sorcerer joining the fray...", slug: "/news/volkh-reveal" },
  { id: 2, title: "Explore the Frostfang Peaks", date: "2024-07-15", category: "World Update", imageUrl: "https://picsum.photos/600/400?random=2", excerpt: "A new region is coming! Discover the treacherous Frostfang Peaks...", slug: "/news/frostfang-peaks" },
  { id: 3, title: "Summer Solstice Festival Event", date: "2024-07-10", category: "Events", imageUrl: "https://picsum.photos/600/400?random=3", excerpt: "Join the celebration! Participate in limited-time activities...", slug: "/events/summer-solstice" },
  { id: 4, title: "Patch Notes 1.2.5 Released", date: "2024-07-05", category: "Updates", imageUrl: "https://picsum.photos/600/400?random=4", excerpt: "Read the full details of the latest game update, including bug fixes and balance changes...", slug: "/news/patch-1-2-5" },
  { id: 5, title: "Developer Diary: Crafting Slavic Atmosphere", date: "2024-06-28", category: "Dev Diary", imageUrl: "https://picsum.photos/600/400?random=5", excerpt: "Go behind the scenes with the art team as they discuss bringing Gardariki's world to life...", slug: "/news/dev-diary-atmosphere" },
  // Add more news items
];

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Gardariki News & Updates</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Stay informed about the latest happenings in the world of Gardariki.
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
                <Link href={item.slug}>Read More →</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for Pagination */}
      <div className="mt-12 text-center">
        <Button variant="outline" disabled>Load More</Button>
      </div>
    </div>
  );
}
