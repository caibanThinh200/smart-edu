import Image from "next/image";
import Testimonial from "./testimonial";

interface IHeroProps {}

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-nyanza relative">
      <div className="absolute top-11 left-0">
        <Image src={"/svg/star.svg"} width={300} height={300} alt="start" />
      </div>
      <div className="smart-edu-block relative z-10">
        <div className="flex gap-[60px]">
          <div className="flex flex-col gap-12 w-1/2">
            <div>
              <h3 className="font-bold">Nền tảng học trực tuyến</h3>
              <div className="mt-3">
                <h1 className="font-bold">Gia sư tài năng</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="487"
                  height="35"
                  viewBox="0 0 487 35"
                  fill="none"
                >
                  <path
                    d="M4 30.873C73.6307 11.2528 266.914 -16.2155 483 30.873"
                    stroke="#54BD95"
                    stroke-width="8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <p className="text-[20px] font-medium mt-4">
                Chào mừng bạn đến với trang web giáo dục trực tuyến dành cho học
                sinh cấp 2-3! Với khóa học đa dạng và tài liệu tham khảo chất
                lượng, chúng tôi giúp bạn học tập, phát triển và đạt thành công!
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-white p-3 rounded-md flex gap-3 items-center justify-between">
                <div>
                  <h2 className="text-primary-green">30+</h2>
                  <p>Khóa học chất lượng</p>
                </div>
                <div>
                  <Image
                    src={"/svg/book.svg"}
                    alt="book"
                    width={44}
                    height={44}
                  />
                </div>
              </div>
              <div className="bg-white p-3 rounded-md flex items-center justify-between">
                <div>
                  <h2 className="text-primary-green">100+</h2>
                  <p>Thầy cô nhiều kinh nghiệm</p>
                </div>
                <div>
                  <Image
                    src={"/svg/book.svg"}
                    alt="book"
                    width={44}
                    height={44}
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="flex gap-3 py-2.5 px-5 border border-primary-green text-primary-green rounded-full hover:bg-primary-green hover:text-white transition-all duration-300">
                Xem Video về chúng tôi
                <Image
                  src={"/svg/play-button.svg"}
                  alt="play button"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="relative w-1/2">
            <Image
              src="/svg/decor.svg"
              fill
              className="absolute -z-0 w-full h-full"
              alt="decor"
            />
            <Image
              className="absolute top-10 left-10 w-10/12"
              src={"/svg/hero-right.svg"}
              alt="student"
              width={500}
              height={500}
            />
            <Image
              className="absolute top-20 left-0"
              src={"/svg/decor-2.svg"}
              alt="decor 2"
              width={60}
              height={60}
            />
            <Image
              className="absolute top-5 right-0"
              src={"/svg/decor-1.svg"}
              alt="decor 1"
              width={60}
              height={60}
            />
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
