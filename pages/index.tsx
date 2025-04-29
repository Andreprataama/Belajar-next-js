import Card from "@/components/card";
import { CardProps } from "@/types/card.type";
import React from "react";

const cardData: CardProps = {
  name: {
    first: "John",
    last: "Doe",
  },
  desc: "This is a description",
};

const getCardData = () => {
  return cardData;
};

export default function Home() {
  const data = getCardData();

  return (
    <React.Fragment>
      <div className="font-bold text-shadow-black">Home Page</div>
      <Card name={data.name} desc={data.desc} />
    </React.Fragment>
  );
}
