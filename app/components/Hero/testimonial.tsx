import Image from "next/image";

interface ITestimonialProps {}

const Testimonial: React.FC<ITestimonialProps> = (props) => {
  return (
    <div className="bg-white absolute w-10/12 bottom-10 right-0 rounded-lg shadow-lg p-3 flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <Image
          className="rounded-full"
          src={"/images/user.png"}
          alt="user"
          width={30}
          height={30}
        />
        <p className="font-bold">Nguyen An</p>
      </div>
      <div>
        Trang web giáo dục này đã cung cấp cho con tôi một nền tảng học tập
        tuyệt vời và cộng đồng học tập tích cực.
      </div>
    </div>
  );
};

export default Testimonial;
