import Image from "next/image";
import Link from "next/link";

interface IFooterProps {}

const MENU_FOOTER_ITEMS = [
  // {
  //   label: "Phần mềm học Tiếng Anh",
  //   href: "",
  // },
  {
    label: "Hỏi đáp gia sư AI",
    href: "",
    //   isPremium: true,
  },
  {
    label: "Danh sách giáo viên",
    href: "",
  },
  {
    label: "Chia sẽ kiến thức",
    href: "",
  },
];

const SOCIAL_ITEMS = [
  { src: "/svg/youtube.svg" },
  { src: "/svg/facebook.svg" },
  { src: "/svg/twitter.svg" },
  { src: "/svg/instagram.svg" },
  { src: "/svg/linkedln.svg" },
];

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div className="bg-independence">
      <div className="container mx-auto py-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Link href={"/"}>
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </Link>
              <p className="text-white">
                @ 2023 Học Tài Năng, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 pr-3">
              {MENU_FOOTER_ITEMS.map((item, index) => (
                <Link
                  className="flex items-center gap-3 text-white"
                  key={index}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {SOCIAL_ITEMS.map((item, index) => (
                <Link
                  className="flex items-center gap-3 text-white"
                  key={index}
                  href={""}
                >
                  <Image width={24} height={24} src={item.src} alt="logo" />
                </Link>
              ))}
            </div>
            <div className="flex gap-6 text-white">
              <Link href={"/"}>Term</Link>
              <Link href={"/"}>Privacy</Link>
              <Link href={"/"}>Support</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
