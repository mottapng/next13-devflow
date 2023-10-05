import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "../RenderTag";

const questions = [
  {
    title:
      "Best practices for data fetching in a Next js application with Server-Side Rendering (SSR)?",
    _id: 1
  },
  { title: "How to use React Context API with TypeScript and Next.js?", _id: 2 },
  { title: "Redux Toolkit Not Updating State as Expected", _id: 3 },
  { title: "How do I use express as a custom server in NextJS?", _id: 4 },
  { title: "Can I use Next.js with a custom server and Express?", _id: 5 }
];

const tags = [
  { name: "react", _id: "1", totalQuestions: 6 },
  { name: "next.js", _id: "2", totalQuestions: 4 },
  { name: "redux", _id: "3", totalQuestions: 3 },
  { name: "node.js", _id: "4", totalQuestions: 3 },
  { name: "express", _id: "5", totalQuestions: 2 }
];

const RightSidebar = () => {
  return (
    <div className="custom-scrollbar background-light900_dark200 light-border background-light900_dark200 no-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between border-l px-6 pb-6 pt-36 shadow-light-300 first-line:overflow-y-auto dark:shadow-none max-xl:hidden lg:w-[350px]">
      <section className="flex h-full flex-col">
        <div>
          <h3 className="h3-bold">Top Questions</h3>
          <div className="mt-7 flex flex-col gap-[30px]">
            {questions.map((question) => (
              <Link href={`/questions/${question._id}`} className="flex gap-4" key={question._id}>
                <p className="body-medium text-dark500_light700">{question.title}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="Chevron Right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="h3-bold">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {tags.map((tag) => (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightSidebar;
