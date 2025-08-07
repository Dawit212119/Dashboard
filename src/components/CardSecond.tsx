const cardsData = [
  {
    image: "https://picsum.photos/id/1005/400/300",
    techCategory: "Technology",
    subscribers: 218, // Net worth in USD
    language: "Elon Musk",
  },
  {
    image: "https://picsum.photos/id/1012/400/300",
    techCategory: "Retail",
    subscribers: 1770,
    language: "Jeff Bezos",
  },
  {
    image: "https://picsum.photos/id/1025/400/300",
    techCategory: "Fashion & Retail",
    subscribers: 1950,
    language: "Bernard Arnault",
  },
  {
    image: "https://picsum.photos/id/1037/400/300",
    techCategory: "Software",
    subscribers: 1340,
    language: "Bill Gates",
  },
  {
    image: "https://picsum.photos/id/1043/400/300",
    techCategory: "Investments",
    subscribers: 11900,
    language: "Warren Buffett",
  },
  {
    image: "https://picsum.photos/id/1050/400/300",
    techCategory: "Social Media",
    subscribers: 1110,
    language: "Mark Zuckerberg",
  },
  {
    image: "https://picsum.photos/id/1060/400/300",
    techCategory: "Media & Telecom",
    subscribers: 86456,
    language: "Carlos Slim Helu",
  },
  {
    image: "https://picsum.photos/id/1070/400/300",
    techCategory: "Energy",
    subscribers: 720,
    language: "Mukesh Ambani",
  },
];

import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

const CardSecond = () => {
  return (
    <div>
      <h1 className="font-bold mb-6  text-xl px-6">Peoples</h1>
      <ScrollArea className="max-h-[400px] overflow-y-auto">
        <div className="grid gap-3">
          {cardsData.map((card) => (
            <Card key={card.language} className="flex-row p-3">
              <CardContent className="flex flex-row gap-3 p-2">
                <Image
                  src={card.image}
                  width={40}
                  height={40}
                  alt=""
                  className="rounded-md  object-fill"
                />
                <div className="flex flex-col gap-2">
                  {" "}
                  <CardTitle className="text-sm"> {card.language} </CardTitle>
                  <Badge variant="outline">{card.techCategory}</Badge>{" "}
                </div>
              </CardContent>

              <CardFooter className="ml-auto text-sm">
                {card.subscribers / 1000}k+
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CardSecond;
