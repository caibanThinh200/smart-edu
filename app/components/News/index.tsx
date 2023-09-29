/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

interface INewsBlock {}

const News: React.FC<INewsBlock> = (props) => {
  return (
    <div className="bg-gradient-to-b from-nyanza to-white">
      <div className=" smart-edu-block flex flex-col gap-y-12">
        <div className="font-bold text-independence text-center">
          <h2>
            Có hơn 30+ bài báo nói về{" "}
            <span className="relative">
              <span className="relative z-10">Founder</span>{" "}
              <svg
                className="absolute -bottom-1 left-0"
                width="207"
                height="21"
                viewBox="0 0 207 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.01893C27.378 7.00302 123.394 3.08224 202 9.01894C161.197 9.01894 108.033 9.61924 73.8031 15.873"
                  stroke="#FF8B1F"
                  stroke-width="10"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            của chúng tôi
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-x-6">
          <div className="p-4 bg-white rounded-lg flex flex-col gap-3">
            <div>
              <Image
                src={"/images/zing-news.png"}
                alt="zing new"
                className="h-[60px] object-contain"
                width={200}
                height={60}
              />
            </div>
            <div>
              <p className="text-charcoal text-center">
                “Soái ca” Bách Khoa chia sẻ về bí quyết học tập của mình, nên tự
                giác học tập nghiêm túc trên lớp, tìm những người bạn hợp cạ và
                thường xuyên tạo động lực cho bản thân.
              </p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg flex flex-col gap-3">
            <div>
              <Image
                src={"/images/vtv.png"}
                alt="zing new"
                className="h-[60px] object-contain"
                width={200}
                height={60}
              />
            </div>
            <div>
              <p className="text-charcoal text-center">
                Soái ca Bách khoa tốt nghiệp bằng xuất sắc với đam mê trở thành
                thầy giáo. Khởi nghiệp từ khi còn đi học!
              </p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg flex flex-col gap-3">
            <div>
              <Image
                src={"/images/thanh-nien.png"}
                alt="zing new"
                className="h-[60px] object-contain"
                width={200}
                height={60}
              />
            </div>
            <div>
              <p className="text-charcoal text-center">
                Bước ra khỏi “đứa trẻ” bên trong mình - sở hữu tấm bằng cử nhân
                xuất sắc, được mệnh danh là "soái ca" Đại học Bách Khoa ngàn
                người ngưỡng mộ.
              </p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg flex flex-col gap-3">
            <div>
              <Image
                src={"/images/kenh-14.png"}
                alt="zing new"
                className="h-[60px] object-contain"
                width={200}
                height={60}
              />
            </div>
            <div>
              <p className="text-charcoal text-center">
                “Soái ca” Bách Khoa chia sẻ về bí quyết học tập của mình, nên tự
                giác học tập nghiêm túc trên lớp, tìm những người bạn hợp cạ và
                thường xuyên tạo động lực cho bản thân.
              </p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg flex flex-col gap-3">
            <div>
              <Image
                src={"/images/dan-tri.png"}
                alt="zing new"
                className="h-[60px] object-contain"
                width={200}
                height={60}
              />
            </div>
            <div>
              <p className="text-charcoal text-center">
                “Soái ca” Bách Khoa chia sẻ về bí quyết học tập của mình, nên tự
                giác học tập nghiêm túc trên lớp, tìm những người bạn hợp cạ và
                thường xuyên tạo động lực cho bản thân.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
