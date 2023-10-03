import Image from "next/image";

interface IMacBrowserProps {}

const MacBrowser: React.FC<IMacBrowserProps> = (props) => {
  return (
    <div className="bg-white rounded-xl p-2 ml-auto max-w-[600px] relative z-10">
      <div className="flex gap-2.5 py-1">
        <div className="w-[12px] h-[12px] bg-[#E11D48] rounded-full"></div>
        <div className="w-[12px] h-[12px] bg-[#FBBF24] rounded-full"></div>
        <div className="w-[12px] h-[12px] bg-[#22C55E] rounded-full"></div>
      </div>
      <div className="h-[350px] w-full rounded-xl overflow-hidden">
        <Image
          src={"/images/class.png"}
          className="w-full h-full object-cover"
          alt="class"
          height={350}
          width={600}
        />
      </div>
    </div>
  );
};

export default MacBrowser;
