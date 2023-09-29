/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Youtube from "react-youtube";

interface IStoryProps {}

const Story: React.FC<IStoryProps> = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-nyanza">
      <div className="smart-edu-block">
        <div className="flex justify-between">
          <div className="w-7/12 relative">
            <svg
              className="absolute right-10 -top-10"
              width="421"
              height="475"
              viewBox="0 0 421 475"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M71.4318 112.13C34.5406 153.46 2.85018 215.835 0.477362 281.458C-1.89546 347.082 34.1567 394.243 94.053 432.854C206.44 505.301 349.149 470.931 388.756 415.947C425.751 364.59 430.186 324.417 402.956 265.539C375.725 206.662 357.082 164.985 362.968 112.382C368.768 60.5593 363.964 27.9112 331.751 13.0047C296.91 -3.11759 255.114 -5.33587 208.752 13.0044C161.453 31.7152 105.751 73.6814 71.4318 112.13Z"
                fill="url(#paint0_linear_1013_7861)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1013_7861"
                  x1="434.36"
                  y1="352.639"
                  x2="122.647"
                  y2="65.7313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#54AB72" />
                  <stop offset="1" stop-color="#4E9447" />
                </linearGradient>
              </defs>
            </svg>

            <Youtube className="z-10 relative w-full" videoId="q5DKkk1xkiM" />
          </div>
          <div className="w-5/12">
            <div className="flex-col flex gap-8">
              <div>
                <svg
                  //   className="absolute -bottom-1 left-0"
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
              </div>
              <div>
                <h3 className="font-bold text-independence">
                  Chia sẻ của chuyên gia ở
                </h3>
                <h2 className="font-bold text-primary-green">
                  Gia sư tài năng
                </h2>
                <div className="flex gap-2 items-center mt-4">
                  <Image
                    className="rounded-full"
                    src={"/images/user.png"}
                    alt="user"
                    width={30}
                    height={30}
                  />
                  <h4 className="font-bold">
                    Việt Hoàng - Siêu Trí Tuệ Việt Nam
                  </h4>
                </div>
              </div>
              <div>
                <p>
                  Chào mừng bạn đến với phần "Chia sẻ từ các chuyên gia" trên
                  trang web của chúng tôi. Tại đây, bạn sẽ tìm thấy những chia
                  sẻ giá trị từ các chuyên gia hàng đầu trong nhiều lĩnh vực
                  khác nhau, giúp bạn tiếp cận kiến thức và lời khuyên chất
                  lượng.
                </p>
              </div>
              <div>
                <button className="flex gap-3 py-2.5 px-5 border bg-primary-green text-white rounded-full  transition-all duration-300">
                  Xem full video
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18.6519C12.1217 18.6519 14.1566 17.809 15.6569 16.3087C17.1571 14.8084 18 12.7736 18 10.6519C18 8.53012 17.1571 6.49529 15.6569 4.995C14.1566 3.49471 12.1217 2.65186 10 2.65186C7.87827 2.65186 5.84344 3.49471 4.34315 4.995C2.84285 6.49529 2 8.53012 2 10.6519C2 12.7736 2.84285 14.8084 4.34315 16.3087C5.84344 17.809 7.87827 18.6519 10 18.6519ZM9.555 7.81986C9.4044 7.71938 9.22935 7.66167 9.04852 7.65288C8.86769 7.6441 8.68786 7.68457 8.52823 7.76998C8.3686 7.85539 8.23516 7.98253 8.14213 8.13785C8.04909 8.29316 7.99997 8.47081 8 8.65186V12.6519C7.99997 12.8329 8.04909 13.0106 8.14213 13.1659C8.23516 13.3212 8.3686 13.4483 8.52823 13.5337C8.68786 13.6191 8.86769 13.6596 9.04852 13.6508C9.22935 13.642 9.4044 13.5843 9.555 13.4839L12.555 11.4839C12.692 11.3925 12.8043 11.2688 12.8819 11.1237C12.9596 10.9785 13.0002 10.8165 13.0002 10.6519C13.0002 10.4872 12.9596 10.3252 12.8819 10.18C12.8043 10.0349 12.692 9.91118 12.555 9.81986L9.555 7.81986Z"
                      fill="#F9FAFB"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
