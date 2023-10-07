import Image from "next/image";

interface IFrontSideProps {
  question: {
    image: string;
    keyword: string;
  };
}

const FrontSide: React.FC<IFrontSideProps> = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-nyanza smart-edu-block rounded-lg h-full w-full border  drop-shadow-lg">
      <div className="flex flex-col gap-10 items-center">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <Image
            width={500}
            height={500}
            className="h-full w-full object-contain"
            src={props.question.image}
            alt="question image"
          />
        </div>
        <div className="text-center">
          <p className="text-2xl text-primary-green font-semibold">
            {props.question.keyword}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontSide;
