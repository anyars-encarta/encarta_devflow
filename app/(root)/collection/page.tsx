
// import { auth, signOut } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import DataRenderer from "@/components/DataRenderer";
import LocalSearch from "@/components/search/LocalSearch";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getSavedQuestions } from "@/lib/actions/collection.action";

// const questions = [
//   {
//     _id: "1",
//     title: "What is the best way to learn React?",
//     content:
//       "I am a beginner and I want to learn React. What is the best way to learn React?",
//     tags: [
//       { _id: "1", name: "react" },
//       { _id: "2", name: "javascript" },
//     ],
//     author: { _id: "1", name: "John Doe", image: "/images/avatar.png" },
//     upvotes: 36,
//     answers: 12,
//     views: 123,
//     createdAt: new Date(),
//   },
//   {
//     _id: "2",
//     title: "How do I find a job as a developer?",
//     content:
//       "I am a developer and I want to find a job. How do I find a job as a developer?",
//     tags: [
//       { _id: "1", name: "react" },
//       { _id: "2", name: "javascript" },
//     ],
//     author: { _id: "1", name: "Sammy Lee", image: "/images/avatar.png" },
//     upvotes: 152,
//     answers: 38,
//     views: 446,
//     createdAt: new Date(),
//   },
// ];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Collection = async ({ searchParams }: SearchParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getSavedQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  const { collection } = data || {};
  // const filteredQuestions = questions.filter((question) => {
  //   const matchesQuery = question.title
  //     .toLowerCase()
  //     .includes(query?.toLowerCase());
  //   const matchesFilter = filter
  //     ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
  //     : true;

  //   return matchesQuery && matchesFilter;
  // });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={ROUTES.COLLECTION}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </div>

      <DataRenderer
        success={success}
        error={error}
        data={collection}
        empty={EMPTY_QUESTION}
        render={(collection) =>
          collection.map((item) => (
            <div
              className="mt-10 flex w-full flex-col gap-6"
              key={item._id}
            >
              <QuestionCard question={item.question} />
            </div>
          ))
        }
      />
    </>
  );
};

export default Collection;
