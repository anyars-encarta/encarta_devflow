import TagCard from "@/components/cards/TagCard";
import DataRenderer from "@/components/DataRenderer";
import { popularTags } from "@/constants";
import ROUTES from "@/constants/routes";
import { getHotQuestions } from "@/lib/actions/question.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = async () => {
  const { success, data: hotQuestions, error } = await getHotQuestions();
console.log("Hot Questions: ", hotQuestions);
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <DataRenderer
          data={hotQuestions}
          empty={{
            title: "No questions found",
            message: "No questions found. Please check back later.",
          }}
          success={success}
          error={error}
          render={(hotQuestions) => (
            <div className="mt-7 flex w-full flex-col gap-[30px]">
              {hotQuestions.map(({ _id, title }, i) => (
                <Link
                  href={ROUTES.QUESTIONS(_id)}
                  key={_id}
                  className="flex cursor-pointer items-center justify-between gap-7"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={
                        i % 2 === 0
                          ? "/icons/question-blue.svg"
                          : "/icons/question-orange.svg"
                      }
                      alt="question"
                      width={20}
                      height={20}
                      className="invert-colors"
                    />

                    <p className="body-medium text-dark500_light700 line-clamp-2">{title}</p>
                  </div>

                  <Image
                    src="/icons/chevron-right.svg"
                    alt="chevron-right"
                    width={20}
                    height={20}
                    className="invert-colors"
                  />
                </Link>
              ))}
            </div>
          )}
        />
      </div>

      {/* <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap 4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default RightSidebar;
