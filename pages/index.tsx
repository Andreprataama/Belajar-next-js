import Card from "@/components/card";
import { CardProps } from "@/types/card.type";
import React from "react";
import Image from "next/image";
import HeavtC from "@/compotents/heavycomponents";
import { useState } from "react";

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

  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div className="font-bold text-shadow-black">Home Page</div>
      <Card name={data.name} desc={data.desc} />
      <Image
        src="/foto.jpg"
        alt="foto"
        width={3000}
        height={1000}
        className="rounded mt-5"
        priority
      />
      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => setShow(!show)}
      >
        Click Me
      </button>
      {show && <HeavtC />}
    </React.Fragment>
  );
}
