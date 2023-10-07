import FlashCard from "../components/FlashCard";

const Page = () => {
    const FAKE_QUESTION = [
        {
            question: {
                image: "/images/class.png",
                keyword: "Lớp học",
            },
            answer: "Class"
        },
        {
            question: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZpofEZ4g89agoXmMi4Iu7TfqDVKv-Yl8lg&usqp=CAU",
                keyword: "Quả táo",
            },
            answer: "Apple"
        },
        {
            question: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXENratjEwJxevQJdBnBlcmQLHLqadB1eiw&usqp=CAU",
                keyword: "Cây bút",
            },
            answer: "Pen"
        },
    ]

  return (
    <div className="py-20">
      <FlashCard card={FAKE_QUESTION} />
    </div>
  );
};

export default Page;
