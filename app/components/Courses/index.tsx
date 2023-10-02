import Image from "next/image";

interface ICoursesProps {}

const Course: React.FC<ICoursesProps> = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-nyanza">
      <div className="smart-edu-block flex flex-col gap-12">
        <div className="text-independence font-bold text-center">
          <h4>khóa học cho học sinh</h4>
          <h3 className="text-primary-green flex gap-2 items-center justify-center">
            <Image
              src={"/svg/plane-departure.svg"}
              alt="plan"
              width={64}
              height={64}
            />
            <span>cấp 2 - cấp 3</span>
          </h3>
        </div>
        <div className="flex gap-6 justify-center">
          <button className="px-4 rounded-md border border-independence">
            Lớp 6
          </button>
          <button className="px-4 rounded-md border border-independence">
            Lớp 7
          </button>
          <button className="px-4 rounded-md border border-independence">
            Lớp 8
          </button>
          <button className="px-4 rounded-md border border-independence">
            Lớp 9
          </button>
          <button className="px-4 rounded-md border border-independence">
            Lớp 10
          </button>
          <button className="px-4 rounded-md border border-independence">
            Lớp 11
          </button>
          <button className="px-4 rounded-md border border-independence">
            Lớp 12
          </button>
          <button className="px-4 rounded-md border border-independence">
            Ôn thi THPT
          </button>
          <button className="px-4 rounded-md border border-independence">
            Ôn thi Đại Học
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="h-[265px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/images/course-1.png"}
                className="w-full h-full object-cover"
                alt="Phạm Thị Phương"
                width={410}
                height={265}
              />
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-bold text-independence">
                  Khóa ôn lớp 6 - Nền tảng vững chắc
                </h5>
                <p className="font-light text-independence">
                  Xây dựng nền tảng vững chắc, sẵn sàng tiếp bước vào cấp trung
                  học
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                  <Image
                    src={"/images/lecture.png"}
                    alt="Phạm Thị Phương"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-bold text-independence">Phạm Thị Phương</p>
              </div>
              <button className="rounded-full px-[20px] py-[10px] text-white bg-gradient-green">
                Đăng kí giữ chỗ
              </button>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="h-[265px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/images/course-1.png"}
                className="w-full h-full object-cover"
                alt="Phạm Thị Phương"
                width={410}
                height={265}
              />
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-bold text-independence">
                  Khóa ôn lớp 6 - Nền tảng vững chắc
                </h5>
                <p className="font-light text-independence">
                  Xây dựng nền tảng vững chắc, sẵn sàng tiếp bước vào cấp trung
                  học
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                  <Image
                    src={"/images/lecture.png"}
                    alt="Phạm Thị Phương"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-bold text-independence">Phạm Thị Phương</p>
              </div>
              <button className="rounded-full px-[20px] py-[10px] text-white bg-gradient-green">
                Đăng kí giữ chỗ
              </button>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="h-[265px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/images/course-1.png"}
                className="w-full h-full object-cover"
                alt="Phạm Thị Phương"
                width={410}
                height={265}
              />
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-bold text-independence">
                  Khóa ôn lớp 6 - Nền tảng vững chắc
                </h5>
                <p className="font-light text-independence">
                  Xây dựng nền tảng vững chắc, sẵn sàng tiếp bước vào cấp trung
                  học
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                  <Image
                    src={"/images/lecture.png"}
                    alt="Phạm Thị Phương"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-bold text-independence">Phạm Thị Phương</p>
              </div>
              <button className="rounded-full px-[20px] py-[10px] text-white bg-gradient-green">
                Đăng kí giữ chỗ
              </button>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="h-[265px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/images/course-1.png"}
                className="w-full h-full object-cover"
                alt="Phạm Thị Phương"
                width={410}
                height={265}
              />
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-bold text-independence">
                  Khóa ôn lớp 6 - Nền tảng vững chắc
                </h5>
                <p className="font-light text-independence">
                  Xây dựng nền tảng vững chắc, sẵn sàng tiếp bước vào cấp trung
                  học
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                  <Image
                    src={"/images/lecture.png"}
                    alt="Phạm Thị Phương"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-bold text-independence">Phạm Thị Phương</p>
              </div>
              <button className="rounded-full px-[20px] py-[10px] text-white bg-gradient-green">
                Đăng kí giữ chỗ
              </button>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="h-[265px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/images/course-1.png"}
                className="w-full h-full object-cover"
                alt="Phạm Thị Phương"
                width={410}
                height={265}
              />
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-bold text-independence">
                  Khóa ôn lớp 6 - Nền tảng vững chắc
                </h5>
                <p className="font-light text-independence">
                  Xây dựng nền tảng vững chắc, sẵn sàng tiếp bước vào cấp trung
                  học
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                  <Image
                    src={"/images/lecture.png"}
                    alt="Phạm Thị Phương"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-bold text-independence">Phạm Thị Phương</p>
              </div>
              <button className="rounded-full px-[20px] py-[10px] text-white bg-gradient-green">
                Đăng kí giữ chỗ
              </button>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="h-[265px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/images/course-1.png"}
                className="w-full h-full object-cover"
                alt="Phạm Thị Phương"
                width={410}
                height={265}
              />
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
              <div>
                <h5 className="font-bold text-independence">
                  Khóa ôn lớp 6 - Nền tảng vững chắc
                </h5>
                <p className="font-light text-independence">
                  Xây dựng nền tảng vững chắc, sẵn sàng tiếp bước vào cấp trung
                  học
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                  <Image
                    src={"/images/lecture.png"}
                    alt="Phạm Thị Phương"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-bold text-independence">Phạm Thị Phương</p>
              </div>
              <button className="rounded-full px-[20px] py-[10px] text-white bg-gradient-green">
                Đăng kí giữ chỗ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
