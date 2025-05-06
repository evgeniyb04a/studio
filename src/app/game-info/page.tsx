import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function GameInfoPage() {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Исследуйте мир Гардарики</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Погрузитесь в богатую историю, познакомьтесь с героями и откройте для себя обширные земли Гардарики.
      </p>

      <Tabs defaultValue="world" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="world">Мир</TabsTrigger>
          <TabsTrigger value="characters">Персонажи</TabsTrigger>
          <TabsTrigger value="history">История и Лор</TabsTrigger>
        </TabsList>

        {/* World Tab */}
        <TabsContent value="world">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Откройте для себя Царства</CardTitle>
              <CardDescription>Обзор разнообразных земель, составляющих Гардарику.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="https://picsum.photos/800/500?random=10"
                    alt="Фрагмент карты мира"
                    width={800}
                    height={500}
                    className="mb-4 rounded-lg shadow-md"
                    data-ai-hint="fantasy world map"
                  />
                  <h3 className="mb-2 text-xl font-semibold">Земля Мифов и Легенд</h3>
                  <p className="text-muted-foreground">
                    Гардарика – это обширный континент, где древние леса шепчут тайны, высокие горы пронзают облака, а мистические реки прорезают землю. Это царство, сформированное могущественными божествами и населенное как чудесными, так и ужасающими существами. От залитых солнцем равнин Яви до тенистых болот Нави, приключения ждут в каждом уголке.
                  </p>
                </div>
                 <div>
                  <h4 className="mb-4 text-lg font-semibold">Ключевые Регионы:</h4>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Солнечные Степи</AccordionTrigger>
                      <AccordionContent>
                        Обширные, открытые равнины, залитые вечным солнечным светом, дом кочевых племен и древних мегалитических сооружений. Остерегайтесь бродячих грифонов.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Шепчущие Леса Лешего</AccordionTrigger>
                      <AccordionContent>
                        Древний, зачарованный лес, охраняемый загадочным Лешим. Здесь процветает странная флора и фауна, но не все они дружелюбны.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Ледяная Цитадель Чернобога</AccordionTrigger>
                      <AccordionContent>
                        Грозная крепость, высеченная в леднике, которая, как говорят, является владением темного бога Чернобога. Лишь самые храбрые приближаются к ней.
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                      <AccordionTrigger>Навь, Сумрачное Болото</AccordionTrigger>
                      <AccordionContent>
                        Коварное болото, где завеса между мирами тонка. Здесь обитают духи, а под мутными водами скрываются опасные звери.
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
              <CardTitle className="text-2xl">Познакомьтесь с Героями</CardTitle>
              <CardDescription>Храбрые души, формирующие судьбу Гардарики.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                 {/* Character Card 1 */}
                <Card className="overflow-hidden text-center">
                   <Image
                    src="https://picsum.photos/400/500?random=21"
                    alt="Портрет персонажа 1"
                    width={400}
                    height={500}
                    className="h-64 w-full object-cover object-top"
                    data-ai-hint="female warrior portrait"
                  />
                  <CardHeader className="p-4">
                    <CardTitle>Светлана, Щитоносец Перуна</CardTitle>
                    <CardDescription className="text-sm text-primary">Гнев Грома</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">Доблестный воин, благословленный богом грома, яростно защищающая свою родину.</p>
                  </CardContent>
                </Card>
                 {/* Character Card 2 */}
                 <Card className="overflow-hidden text-center">
                   <Image
                    src="https://picsum.photos/400/500?random=22"
                    alt="Портрет персонажа 2"
                    width={400}
                    height={500}
                    className="h-64 w-full object-cover object-top"
                    data-ai-hint="male rogue archer"
                  />
                  <CardHeader className="p-4">
                    <CardTitle>Ратибор, Тихая Стрела</CardTitle>
                     <CardDescription className="text-sm text-primary">Тень Леса</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">Мастер-лучник и следопыт, выросший в Шепчущих Лесах, двигающийся незаметно и бьющий точно в цель.</p>
                  </CardContent>
                </Card>
                 {/* Character Card 3 */}
                 <Card className="overflow-hidden text-center">
                   <Image
                    src="https://picsum.photos/400/500?random=23"
                    alt="Портрет персонажа 3"
                    width={400}
                    height={500}
                    className="h-64 w-full object-cover object-top"
                    data-ai-hint="old wise wizard"
                  />
                  <CardHeader className="p-4">
                    <CardTitle>Володар, Хранитель Рун</CardTitle>
                     <CardDescription className="text-sm text-primary">Древняя Мудрость</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">Древний мудрец, владеющий могущественной рунической магией, стремящийся сохранить равновесие мира.</p>
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
              <CardTitle className="text-2xl">Сага Разворачивается</CardTitle>
              <CardDescription>Фрагменты долгой и бурной истории Гардарики.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div>
                  <h3 className="mb-2 text-xl font-semibold">Эпоха Сотворения</h3>
                   <p className="text-muted-foreground">
                    В начале, первобытные боги Род и Рожаницы сформировали космос из хаоса. Они породили Сварога, небесного кузнеца, который выковал небеса и землю. Появились Перун, Велес и другие могущественные божества, установившие свои владения и формирующие смертный мир Гардарики.
                  </p>
               </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Великий Раскол</h3>
                   <p className="text-muted-foreground">
                    Разразился катаклизмический конфликт между богами света (Правь) и тьмы (Навь), возглавляемыми соответственно Перуном и Велесом. Эта божественная война оставила шрамы на земле, разорвала союзы и оставила после себя могущественные артефакты и остаточные магические энергии, которые продолжают влиять на мир сегодня.
                  </p>
               </div>
               <div>
                  <h3 className="mb-2 text-xl font-semibold">Восхождение Героев</h3>
                   <p className="text-muted-foreground">
                    Сквозь века раздоров и процветания смертные герои поднимались к славе. Ведомые судьбой или избранные богами, эти личности совершали легендарные подвиги, сражались с чудовищными зверями и основали великие крепости (гарды), которые усеивают ландшафт. Их истории поют барды и высечены на самих камнях Гардарики.
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
