"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontSide from "./frontSide";
import BackSide from "./backSide";
import SingleFlashCard from "./singleCard";

export interface ICardProps {
  question: {
    image: string;
    keyword: string;
  };
  answer: string;
}

interface IFlashCardProps {
  card: Array<ICardProps>;
}

const FlashCard: React.FC<IFlashCardProps> = (props) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div className="grid grid-col-3 gap-5">
      {props.card.map((card, index) => (
        <SingleFlashCard key={index} {...card} />
      ))}
    </div>
  );
};

export default FlashCard;
