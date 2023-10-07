"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontSide from "./frontSide";
import BackSide from "./backSide";
import { ICardProps } from ".";

interface ISingleFlashCardProps extends ICardProps {}

const SingleFlashCard: React.FC<ISingleFlashCardProps> = (props) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="flex flex-col gap-10 items-center"
    >
      <ReactCardFlip
        containerStyle={{
          height: 500,
          overflowY: "auto",
          width: "50%",
        }}
        infinite
        flipDirection="vertical"
        containerClassName="w-fit"
        isFlipped={flipped}
      >
        <FrontSide question={props.question} />
        <BackSide answer={props.answer} />
      </ReactCardFlip>

      {/* <button onClick={() => setFlipped(!flipped)}>Flip</button> */}
    </div>
  );
};

export default SingleFlashCard;
