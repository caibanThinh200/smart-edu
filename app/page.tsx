import Course from "./components/Courses";
import Hero from "./components/Hero";
import Lecture from "./components/Lectures";
import News from "./components/News";
import Story from "./components/Story";

export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <Story />
      <Lecture />
      <Course />
    </div>
  );
}
