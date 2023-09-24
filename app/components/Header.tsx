"use client";

import Image from "next/image";
import Link from "next/link";

interface IHeaderProps {}

const MENU_ITEMS = [
  {
    label: "Phần mềm học Tiếng Anh",
    href: "",
  },
  {
    label: "Hỏi đáp gia sư AI",
    href: "",
    isPremium: true,
  },
  {
    label: "Khóa học",
    href: "",
  },
  {
    label: "Danh sách Gia Sư",
    href: "",
  },
];

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className="bg-anti-flash-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-[48px] py-3 items-center">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            <nav className="flex gap-8">
              {MENU_ITEMS.map((item, index) => (
                <Link
                  className="flex items-center gap-3"
                  key={index}
                  href={item.href}
                >
                  {item.label}
                  {item.isPremium && (
                    <Image
                      src={"/svg/sparkle.svg"}
                      alt="sparkle"
                      width={20}
                      height={20}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <button className="py-2.5 px-5 border border-primary-green text-primary-green rounded-full hover:bg-primary-green hover:text-white transition-all duration-300">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
