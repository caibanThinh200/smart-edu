import Image from "next/image";

interface IBackSideProps {
  answer: string
}

const BackSide: React.FC<IBackSideProps> = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-nyanza smart-edu-block rounded-lg h-full w-full">
      <div className="flex flex-col justify-center gap-10 items-center h-full w-full">
        <div className="text-center">
          <h3>{props.answer}</h3>
        </div>
      </div>
    </div>
  );
};

export default BackSide;
