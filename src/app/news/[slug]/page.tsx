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
      title: "Представлен новый персонаж: Волх",
      date: "2024-07-20",
      category: "Персонажи",
      imageUrl: "https://picsum.photos/1200/600?random=1",
      imageAiHint: "character reveal splash",
      content: `
        <p>Готовьтесь, герои Гардарики! Новая сила появляется из тени – Волх, Загадочный Колдун, скоро присоединится к играбельному составу в обновлении 1.3!</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Мастер иллюзий и проклятий</h2>
        <p>Волх владеет силами, почерпнутыми из сумеречных миров, специализируясь на магии иллюзий и ослабляющих проклятиях. Его уникальные способности позволяют ему манипулировать полем боя, обращая сильные стороны врагов против них самих и сея хаос в их рядах.</p>
        <ul class="list-disc space-y-2 pl-6 my-4">
          <li><strong>Шаг в тень:</strong> Кратковременно станьте невидимым и переместитесь, оставив позади взрывающуюся приманку.</li>
          <li><strong>Шепот Нави:</strong> Прокляните область, замедляя врагов и делая их уязвимыми к магическому урону.</li>
          <li><strong>Сумрачный Пакт (Ультимейт):</strong> Высвободите волну темной энергии, временно очаровывая слабых врагов, чтобы они сражались за вас.</li>
        </ul>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Прошлое, окутанное тайной</h2>
        <p>О происхождении Волха известно мало, кроме шепота, связывающего его с древними пактами, заключенными в глубинах Нави. Некоторые говорят, что он ищет искупления, другие утверждают, что он преследует запретные знания. Раскройте его историю через квестовую линию персонажа, которая появится в обновлении.</p>
        <p>Приготовьтесь овладеть тенями, когда прибудет Волх! Следите за новостями для получения дополнительной информации об обновлении 1.3.</p>
      `
    },
    'frostfang-peaks': {
        title: "Исследуйте Морозные Пики",
        date: "2024-07-15",
        category: "Обновление мира",
        imageUrl: "https://picsum.photos/1200/600?random=2",
        imageAiHint: "snowy mountain landscape",
        content: `
        <p>Бросьте вызов леденящим ветрам и коварным тропам Морозных Пиков, огромного нового региона, который скоро появится в Гардарике! Это обновление значительно расширяет карту мира, предлагая часы новых исследований и испытаний.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Царство льда и легенд</h2>
        <p>Расположенные на неумолимом севере, Морозные Пики доминируют towering, покрытыми льдом горами, замерзшими реками и древними руинами, поглощенными ледниками. Легенды говорят о могущественных духах мороза и дремлющих титанах в этих пиках.</p>
        <h3 class="mt-4 mb-2 text-xl font-semibold">Новые возможности:</h3>
        <ul class="list-disc space-y-2 pl-6 my-4">
            <li><strong>Динамическая система погоды:</strong> Испытайте метели и бураны, влияющие на видимость и геймплей.</li>
            <li><strong>Новые типы врагов:</strong> Сразитесь с Ледяными Йотунами, Морозными Вивернами и неуловимыми Снежными Барсами.</li>
            <li><strong>Сложные подземелья:</strong> Погрузитесь в замерзшие пещеры и древние крипты, полные головоломок и могущественных боссов.</li>
            <li><strong>Уникальные ресурсы:</strong> Собирайте Морозные Соли, Ледниковые Руды и другие материалы, необходимые для новых рецептов крафта.</li>
        </ul>
        <p>Готовьте самую теплую экипировку и точите клинки! Морозные Пики ждут вашего открытия.</p>
      `
    },
     // Add more articles corresponding to slugs
     'patch-1-2-5': {
      title: "Выпущены заметки к патчу 1.2.5",
      date: "2024-07-05",
      category: "Обновления",
      imageUrl: "https://picsum.photos/1200/600?random=4",
      imageAiHint: "game update scroll",
      content: `
        <p>Версия Гардарики 1.2.5 теперь доступна! Этот патч сосредоточен на учете отзывов сообщества, исправлении ошибок и внедрении нескольких улучшений качества жизни.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Основные моменты:</h2>
        <ul class="list-disc space-y-2 pl-6 my-4">
          <li><strong>Балансировка боя:</strong> Скорректированы значения урона для способности Ратибора 'Тихая стрела'. Увеличена стоимость выносливости для тяжелых атак.</li>
          <li><strong>Исправления ошибок:</strong> Устранена проблема, из-за которой игроки могли застрять в ландшафте возле Шепчущего Леса. Исправлена ошибка, из-за которой маркеры квестов не отображались корректно в определенных условиях. Устранены несколько незначительных визуальных сбоев.</li>
          <li><strong>Улучшения производительности:</strong> Оптимизировано время загрузки при входе в крупные поселения. Улучшена стабильность частоты кадров во время масштабных столкновений.</li>
          <li><strong>Улучшения интерфейса:</strong> Добавлена функция поиска на экране инвентаря. Улучшена четкость значков статусных эффектов.</li>
        </ul>
        <p>Спасибо за ваши постоянные отзывы! Пожалуйста, обратитесь к разделу заметок к патчу в игре для получения полного списка изменений.</p>
        <p>Удачных приключений!</p>
      `
    },
    'dev-diary-atmosphere': {
      title: "Дневник разработчика: Создание славянской атмосферы",
      date: "2024-06-28",
      category: "Дневник разработчика",
      imageUrl: "https://picsum.photos/1200/600?random=5",
      imageAiHint: "game art moodboard",
      content: `
        <p>Привет, сообщество Гардарики! Сегодня члены наших команд по арту и нарративу хотят поделиться некоторыми мыслями о том, как мы подходим к созданию уникальной славянской атмосферы игры.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Черпая из фольклора</h2>
        <p>Наше основное вдохновение исходит непосредственно из славянских мифов, легенд и народных сказок. Мы погружаемся в истории божеств, таких как Перун и Велес, лесных духов, таких как Леший, домовых хранителей, таких как Домовой, и водяных нимф, таких как Русалки. Эти фигуры влияют не только на дизайн наших персонажей, но и на повествование через окружение и квестовые нарративы.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Визуальный язык: Вышивка и резьба по дереву</h2>
        <p>Визуально мы включаем традиционные славянские мотивы, особенно те, что встречаются в вышивке (вышиванка) и резьбе по дереву. Вы увидите эти узоры, интегрированные в одежду персонажей, архитектурные детали, дизайн оружия и даже элементы интерфейса. Это помогает создать целостную и аутентичную визуальную идентичность.</p>
        <h2 class="mt-6 mb-3 text-2xl font-semibold">Звук и музыка</h2>
        <p>Звуковой ландшафт имеет решающее значение. Наши композиторы смешивают традиционные славянские народные инструменты (такие как балалайка, гусли и различные флейты) с современными оркестровыми аранжировками, чтобы создать партитуру, которая ощущается одновременно древней и эпической. Окружающие звуки отражают природный мир, описанный в фольклоре – шелест листьев зачарованных лесов, крики мифических птиц, шепот, несомый степными ветрами.</p>
        <p>Создание этой атмосферы – это непрерывный процесс, тщательный баланс исследований, творчества и уважения к исходному материалу. Мы надеемся, что вы почувствуете погружение в мир, который мы строим!</p>
        <p><em>- Команды по арту и нарративу Clockwork Drakkar</em></p>
      `
    },
  };

  return articles[slug] || null;
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = await getNewsArticle(params.slug);

  if (!article) {
    // Handle not found case, maybe redirect or show a 404 component
    return <div className="container mx-auto py-12 px-4 text-center">Статья не найдена.</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/news">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к новостям
          </Link>
        </Button>
      </div>

      <article>
        <header className="mb-8">
           <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Опубликовано: {new Date(article.date).toLocaleDateString()}</span>
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
