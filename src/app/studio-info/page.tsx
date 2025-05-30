import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Linkedin, Globe } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

export default function StudioInfoPage() {
  return (
    <div className="container mx-auto max-w-screen-lg py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Студия Clockwork Drakkar</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Познакомьтесь с командой, стоящей за Гардарикой, и узнайте больше о нашей страсти к созданию захватывающих миров.
      </p>

      <Card className="overflow-hidden shadow-lg">
         <Image
            src="https://picsum.photos/1200/400?random=studio"
            alt="Баннер студии Clockwork Drakkar"
            width={1200}
            height={400}
            className="h-56 w-full object-cover"
            data-ai-hint="game development studio"
          />
        <CardHeader className="p-6">
          <CardTitle className="text-2xl">Наша Миссия</CardTitle>
          <CardDescription>Создание уникального опыта, основанного на богатых повествованиях и увлекательном геймплее.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="mb-6 text-muted-foreground">
            Clockwork Drakkar - независимая студия разработки игр, базирующаяся в [Местоположение студии - например, Санкт-Петербург, Россия]. Мы - команда преданных своему делу художников, программистов и рассказчиков, объединенных любовью к славянской культуре, мифологии и искусству интерактивных развлечений. Гардарика - наш флагманский проект, рожденный из желания донести увлекательный мир славянских легенд до мировой аудитории через современный RPG-опыт.
          </p>

          <Separator className="my-6" />

          <h3 className="mb-4 text-xl font-semibold">Свяжитесь с Нами</h3>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>[Адрес студии, например, Невский проспект 1, Санкт-Петербург, Россия]</span>
            </div>
             <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <Link href="mailto:contact@clockworkdrakkar.example.com" className="hover:text-foreground">
                contact@clockworkdrakkar.example.com {/* Замените на реальный email */}
              </Link>
            </div>
             <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>+7 [Ваш номер телефона]</span> {/* Замените на реальный телефон */}
            </div>
             <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 flex-shrink-0 text-primary" />
               <Link href="https://clockworkdrakkar.example.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                 clockworkdrakkar.example.com {/* Замените на реальный веб-сайт */}
              </Link>
            </div>
             <div className="flex items-center space-x-3">
              <Linkedin className="h-5 w-5 flex-shrink-0 text-primary" />
               <Link href="https://linkedin.com/company/clockwork-drakkar-example" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                 Профиль LinkedIn {/* Замените на реальный LinkedIn */}
              </Link>
            </div>
          </div>

           <Separator className="my-6" />

           <h3 className="mb-4 text-xl font-semibold">Следите за Нашим Путем</h3>
            <p className="mb-4 text-muted-foreground">Будьте в курсе разработки Гардарики и новостей студии:</p>
             {/* Reuse Footer social links or add specific ones */}
           <div className="flex space-x-4">
            {/* Links copied from Footer - ensure consistency */}
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </Link>
             <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
