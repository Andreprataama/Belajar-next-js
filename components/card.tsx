import React from "react";
import { CardProps } from "@/types/card.type";

const Card = ({ name, desc }: CardProps) => {
  return (
    <div className="flex flex-col p-5 rounded-lg shadow-md bg-blue-500 text-white">
      <span>
        {name.first} {name.last}
      </span>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
