import QuestionCard from "@/components/cards/QuestionCard";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { homePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  const active = "newest";

  const questions = [
    {
      title: "How to use React Query?",
      tags: [
        { _id: "1", name: "react" },
        { _id: "2", name: "react-query" }
      ],
      author: { _id: "1", name: "John Doe", picture: "/assets/images/default-logo.svg" },
      createdAt: new Date("2021-08-01T19:20:00Z"),
      answers: [],
      views: 10,
      upvotes: 5,
      _id: "1"
    },
    {
      title: `What's the difference between "==" and "==="?`,
      tags: [
        { _id: "3", name: "javascript" },
        { _id: "1", name: "react" }
      ],
      author: { _id: "1", name: "John Doe", picture: "/assets/images/default-logo.svg" },
      createdAt: new Date("2021-08-01T19:20:00Z"),
      answers: [],
      views: 5,
      upvotes: 1,
      _id: "2"
    }
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
        <Filters
          filters={homePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="relative hidden max-md:flex"
        />
      </div>

      <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {homePageFilters.map((item) => (
          <Button
            key={item.value}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              active === item.value
                ? "bg-primary-100 text-primary-500 dark:bg-dark-300"
                : "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-400 dark:text-light-500 dark:hover:bg-dark-300"
            }`}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => <QuestionCard key={question._id} question={question} />)
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query
          could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
