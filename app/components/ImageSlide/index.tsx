"use client";

import Image from "next/image";
import MacBrowser from "./MacBrowser";
import Program from "./Programs";

interface IImageSlideProps {}

const ImageSlide: React.FC<IImageSlideProps> = (props) => {
  return (
    <div className="bg-gradient-to-b from-nyanza to-white">
      <div className="smart-edu-block">
        <div className="flex gap-10 items-center">
          <div className="w-7/12 relative">
            <svg
              className="absolute -right-5 -top-10"
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
            <MacBrowser />
            <Program />
          </div>
          <div className="w-5/12">
            <div className="flex-col -translate-y-10 flex gap-8">
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
                  Chương trình đào tạo chính quy
                </h3>
                <h2 className="font-bold text-primary-green">
                  theo Bộ Giáo Dục
                </h2>
              </div>
              <div>
                <p className="text-independence">
                  Tham gia chương trình đào tạo của chúng tôi, nơi mà giáo dục
                  theo chuẩn Bộ Giáo Dục Việt Nam gắn kết với chất lượng hàng
                  đầu và sự tận tâm từ đội ngũ giảng viên. Chúng tôi tạo ra môi
                  trường học tập đầy đủ và tương tác để học sinh phát triển kiến
                  thức và đạt thành công.
                </p>
              </div>
              <div>
                <button className="flex items-center gap-3 py-2.5 px-5 border bg-primary-green text-white rounded-full  transition-all duration-300">
                  Tìm hiểu ngay
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
                      d="M12.293 5.45047C12.4805 5.263 12.7348 5.15768 13 5.15768C13.2652 5.15768 13.5195 5.263 13.707 5.45047L17.707 9.45047C17.8945 9.638 17.9998 9.89231 17.9998 10.1575C17.9998 10.4226 17.8945 10.6769 17.707 10.8645L13.707 14.8645C13.5184 15.0466 13.2658 15.1474 13.0036 15.1451C12.7414 15.1429 12.4906 15.0377 12.3052 14.8523C12.1198 14.6669 12.0146 14.4161 12.0123 14.1539C12.01 13.8917 12.1108 13.6391 12.293 13.4505L14.586 11.1575H3C2.73478 11.1575 2.48043 11.0521 2.29289 10.8646C2.10536 10.677 2 10.4227 2 10.1575C2 9.89225 2.10536 9.6379 2.29289 9.45036C2.48043 9.26283 2.73478 9.15747 3 9.15747H14.586L12.293 6.86447C12.1055 6.67694 12.0002 6.42263 12.0002 6.15747C12.0002 5.89231 12.1055 5.638 12.293 5.45047Z"
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

export default ImageSlide;
