import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
const cardsData = [
  {
    image: "https://picsum.photos/id/1011/400/300",
    techCategory: "Frontend",
    subscribers: 12000,
    language: "React",
  },
  {
    image: "https://picsum.photos/id/1021/400/300",
    techCategory: "Backend",
    subscribers: 8500,
    language: "Node.js",
  },
  {
    image: "https://picsum.photos/id/1033/400/300",
    techCategory: "Database",
    subscribers: 5000,
    language: "PostgreSQL",
  },
  {
    image: "https://picsum.photos/id/1044/400/300",
    techCategory: "Full Stack",
    subscribers: 15000,
    language: "Next.js",
  },
];

export default function CardComponent() {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl mb-4">Tech Stack</h1>
      </div>
      <div className="grid gap-2">
        {cardsData.map((card) => (
          <Card
            key={card.language}
            className="flex-row justify-around items-center gap-4 px-2-"
          >
            <CardContent className="flex justify-center items-center flex-row p-0 gap-3">
              <Image
                src={card.image}
                width={50}
                height={50}
                alt={card.language}
                className="object-fill rounded-md"
              ></Image>
              <div className=" flex flex-col items-center gap-2">
                {" "}
                <CardTitle className="text-sm"> {card.language} </CardTitle>
                <Badge variant="outline">{card.techCategory} </Badge>
              </div>
            </CardContent>
            <CardFooter className="">{card.subscribers / 1000}k+</CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
