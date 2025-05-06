import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

// Placeholder Data - Replace with actual data fetching
const userProfile = {
  nickname: "ДоблестныйГерой42",
  avatarUrl: "https://picsum.photos/100/100?random=user",
  joinDate: "2023-05-15",
  overallProgress: 78,
  achievementsUnlocked: 152,
  totalPlaytime: "350 часов",
};

const characters = [
  { id: 1, name: "Светлана", level: 65, rarity: "Эпический", imageUrl: "https://picsum.photos/150/200?random=char1", progress: 85, role: "Танк/Поддержка", element: "Гром" },
  { id: 2, name: "Ратибор", level: 70, rarity: "Легендарный", imageUrl: "https://picsum.photos/150/200?random=char2", progress: 92, role: "ДПС/Дальний бой", element: "Природа" },
  { id: 3, name: "Володар", level: 60, rarity: "Редкий", imageUrl: "https://picsum.photos/150/200?random=char3", progress: 70, role: "Контроль/Магия", element: "Руна" },
  // Add more characters
];

const playerStats = {
  battlesWon: 1230,
  questsCompleted: 450,
  regionsExplored: "85%",
  highestDamage: 25890,
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Профиль Игрока</h1>

      {/* Profile Summary Card */}
      <Card className="mb-8 overflow-hidden shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-4 bg-muted/30 p-6">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <AvatarImage src={userProfile.avatarUrl} alt={userProfile.nickname} data-ai-hint="player avatar"/>
            <AvatarFallback>{userProfile.nickname.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-3xl">{userProfile.nickname}</CardTitle>
            <CardDescription>Присоединился: {new Date(userProfile.joinDate).toLocaleDateString()}</CardDescription>
            <div className="mt-2 flex items-center space-x-2">
              <Badge variant="secondary">Уровень {Math.floor(userProfile.overallProgress / 2)}</Badge> {/* Example level calculation */}
              <Badge variant="outline">{userProfile.totalPlaytime}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
           <h3 className="mb-2 text-lg font-semibold">Общий Прогресс</h3>
           <Progress value={userProfile.overallProgress} className="w-full" />
           <p className="mt-1 text-right text-sm text-muted-foreground">{userProfile.overallProgress}% Завершено</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Character Roster */}
        <Card className="lg:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle>Состав Персонажей</CardTitle>
            <CardDescription>Ваша коллекция героев в Гардарике.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {characters.map((char) => (
                <Card key={char.id} className="group overflow-hidden transition-all hover:shadow-primary/20 hover:scale-105">
                  <Image
                    src={char.imageUrl}
                    alt={char.name}
                    width={150}
                    height={200}
                    className="h-48 w-full object-cover"
                    data-ai-hint={`${char.role} character fantasy`}
                  />
                  <div className="p-4">
                    <h4 className="mb-1 font-semibold">{char.name}</h4>
                    <p className="text-sm text-muted-foreground">Уровень {char.level}</p>
                    <Badge
                      variant={char.rarity === 'Легендарный' ? 'default' : char.rarity === 'Эпический' ? 'secondary' : 'outline'}
                      className={`mt-1 ${char.rarity === 'Легендарный' ? 'bg-yellow-600 text-white' : char.rarity === 'Эпический' ? 'bg-purple-600 text-white' : ''}`}
                    >
                      {char.rarity}
                    </Badge>
                     <Badge variant="outline" className="ml-1">{char.element}</Badge>
                     <Progress value={char.progress} className="mt-2 h-2" />
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Player Statistics */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Статистика Игрока</CardTitle>
            <CardDescription>Ваши заметные достижения и статистика.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Выиграно Битв</TableCell>
                  <TableCell className="text-right">{playerStats.battlesWon.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Завершено Квестов</TableCell>
                  <TableCell className="text-right">{playerStats.questsCompleted.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Исследовано Регионов</TableCell>
                  <TableCell className="text-right">{playerStats.regionsExplored}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Наибольший Нанесенный Урон</TableCell>
                  <TableCell className="text-right text-primary font-semibold">{playerStats.highestDamage.toLocaleString()}</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell className="font-medium">Разблокировано Достижений</TableCell>
                  <TableCell className="text-right">{userProfile.achievementsUnlocked}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
