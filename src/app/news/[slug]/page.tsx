import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

// Placeholder function to fetch news article data based on slug
// In a real app, this would fetch from a database or CMS
async function getNewsArticle(slug: string) {
  // Simulate fetching data
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network delay

  const articles: { [key: string]: any } = {
    'volkh-reveal': {
      title: "New Character Revealed: Volkh",
      date: "2024-07-20",
      category: "Characters",
      imageUrl: "https://picsum.photos/1200/600?random=1",
      imageAiHint: "character reveal splash",
      content: `
        <p>Prepare yourselves, heroes of Gardariki! A new force emerges from the shadows – Volkh, the Enigmatic Sorcerer, will soon join the playable roster in update 1.3!</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Master of Illusions and Hexes</h2>
        <p>Volkh wields powers drawn from the twilight realms, specializing in illusion magic and debilitating curses. His unique abilities allow him to manipulate the battlefield, turning enemies' strengths against them and sowing confusion in their ranks.</p>
        <ul class="list-disc space-y-2 pl-6 my-4">
          <li><strong>Shadow Step:</strong> Briefly become invisible and reposition, leaving behind a decoy that explodes.</li>
          <li><strong>Whispers of Nav:</strong> Curse an area, slowing enemies and making them vulnerable to magical damage.</li>
          <li><strong>Umbral Pact (Ultimate):</strong> Unleash a wave of dark energy, temporarily charming weaker enemies to fight for you.</li>
        </ul>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">A Past Shrouded in Mystery</h2>
        <p>Little is known about Volkh's origins, other than whispers connecting him to ancient pacts made in the depths of Nav. Some say he seeks redemption, others claim he pursues forbidden knowledge. Unravel his story through his character questline coming in the update.</p>
        <p>Get ready to master the shadows when Volkh arrives! Stay tuned for more details on update 1.3.</p>
      `
    },
    'frostfang-peaks': {
        title: "Explore the Frostfang Peaks",
        date: "2024-07-15",
        category: "World Update",
        imageUrl: "https://picsum.photos/1200/600?random=2",
        imageAiHint: "snowy mountain landscape",
        content: `
        <p>Brave the chilling winds and treacherous paths of the Frostfang Peaks, a massive new region coming soon to Gardariki! This update expands the world map significantly, offering hours of new exploration and challenges.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">A Realm of Ice and Legend</h2>
        <p>Located in the unforgiving north, the Frostfang Peaks are dominated by towering, ice-capped mountains, frozen rivers, and ancient ruins swallowed by glaciers. Legends speak of powerful frost spirits and slumbering titans within these peaks.</p>
        <h3 class="mt-4 mb-2 text-xl font-semibold">New Features:</h3>
        <ul class="list-disc space-y-2 pl-6 my-4">
            <li><strong>Dynamic Weather System:</strong> Experience blizzards and whiteouts that affect visibility and gameplay.</li>
            <li><strong>New Enemy Types:</strong> Face off against Ice Jotuns, Frost Wyverns, and the elusive Snow Leopards.</li>
            <li><strong>Challenging Dungeons:</strong> Delve into frozen caverns and ancient crypts filled with puzzles and powerful bosses.</li>
            <li><strong>Unique Resources:</strong> Gather Frost Salts, Glacial Ores, and other materials needed for new crafting recipes.</li>
        </ul>
        <p>Prepare your warmest gear and sharpen your blades! The Frostfang Peaks await your discovery.</p>
      `
    },
     // Add more articles corresponding to slugs
     'patch-1-2-5': {
      title: "Patch Notes 1.2.5 Released",
      date: "2024-07-05",
      category: "Updates",
      imageUrl: "https://picsum.photos/1200/600?random=4",
      imageAiHint: "game update scroll",
      content: `
        <p>Gardariki version 1.2.5 is now live! This patch focuses on addressing community feedback, fixing bugs, and implementing several quality-of-life improvements.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Highlights:</h2>
        <ul class="list-disc space-y-2 pl-6 my-4">
          <li><strong>Combat Balancing:</strong> Adjusted damage values for Ratibor's 'Silent Arrow' ability. Increased stamina cost for heavy attacks.</li>
          <li><strong>Bug Fixes:</strong> Resolved an issue where players could get stuck in the terrain near Whispering Woods. Fixed a bug causing quest markers not to display correctly in certain conditions. Addressed several minor visual glitches.</li>
          <li><strong>Performance Improvements:</strong> Optimized loading times when entering major settlements. Improved frame rate stability during large-scale encounters.</li>
          <li><strong>UI Enhancements:</strong> Added a search function to the inventory screen. Improved clarity of status effect icons.</li>
        </ul>
        <p>Thank you for your continued feedback! Please refer to the in-game patch notes section for a complete list of changes.</p>
        <p>Happy adventuring!</p>
      `
    },
    'dev-diary-atmosphere': {
      title: "Developer Diary: Crafting Slavic Atmosphere",
      date: "2024-06-28",
      category: "Dev Diary",
      imageUrl: "https://picsum.photos/1200/600?random=5",
      imageAiHint: "game art moodboard",
      content: `
        <p>Hello Gardariki community! Today, members of our art and narrative teams want to share some insights into how we approach building the unique Slavic atmosphere of the game.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Drawing from Folklore</h2>
        <p>Our primary inspiration comes directly from Slavic myths, legends, and folk tales. We delve into stories of deities like Perun and Veles, forest spirits like the Leshy, house guardians like the Domovoy, and water nymphs like the Rusalki. These figures inform not only our character designs but also the environmental storytelling and quest narratives.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Visual Language: Embroidery and Woodcraft</h2>
        <p>Visually, we incorporate traditional Slavic motifs, particularly those found in embroidery (vyshyvanka) and wood carving. You'll see these patterns integrated into character clothing, architectural details, weapon designs, and even the UI elements. This helps create a cohesive and authentic visual identity.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Sound and Music</h2>
        <p>The soundscape is crucial. Our composers blend traditional Slavic folk instruments (like the balalaika, gusli, and various flutes) with modern orchestral arrangements to create a score that feels both ancient and epic. Ambient sounds reflect the natural world described in folklore – the rustling leaves of enchanted forests, the calls of mythical birds, the whispers carried on the steppe winds.</p>
        <p>Creating this atmosphere is an ongoing process, a careful balance of research, creativity, and respect for the source material. We hope you feel immersed in the world we're building!</p>
        <p><em>- The Clockwork Drakkar Art & Narrative Teams</em></p>
      `
    },
  };

  return articles[slug] || null;
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = await getNewsArticle(params.slug);

  if (!article) {
    // Handle not found case, maybe redirect or show a 404 component
    return <div className="container mx-auto py-12 px-4 text-center">Article not found.</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/news">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>
      </div>

      <article>
        <header className="mb-8">
           <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Published on: {new Date(article.date).toLocaleDateString()}</span>
              <Badge variant="secondary">{article.category}</Badge>
            </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{article.title}</h1>
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={1200}
            height={600}
            className="mb-6 w-full rounded-lg object-cover shadow-md"
            priority // Prioritize loading the main image
            data-ai-hint={article.imageAiHint}
          />
        </header>

        <div
            className="prose prose-invert max-w-none dark:prose-invert prose-lg prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-md prose-img:shadow-sm prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: article.content }}
         />


      </article>
    </div>
  );
}

// Generate static paths for known news articles if desired for performance
// export async function generateStaticParams() {
//   // Fetch slugs from your CMS or database
//   const slugs = ['volkh-reveal', 'frostfang-peaks', 'patch-1-2-5', 'dev-diary-atmosphere'];
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

