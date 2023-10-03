import dynamic from "next/dynamic";

const Course = dynamic(() => import("./components/Courses"));
const Hero = dynamic(() => import("./components/Hero"));
const Lecture = dynamic(() => import("./components/Lectures"));
const News = dynamic(() => import("./components/News"));
const Story = dynamic(() => import("./components/Story"));
const ImageSlide = dynamic(() => import("./components/ImageSlide"));

export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <Story />
      <Lecture />
      <Course />
      <ImageSlide />
    </div>
  );
}
