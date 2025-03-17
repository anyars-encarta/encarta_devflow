import React from "react";

import QuestionCard from "@/components/cards/QuestionCard";
import DataRenderer from "@/components/DataRenderer";
import LocalSearch from "@/components/search/LocalSearch";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getTagQuestions } from "@/lib/actions/tag.action";
import { RouteParams } from "@/types/global";
import CommonFilter from "@/components/filters/CommonFilter";
import { TagFilters } from "@/constants/filters";
import Pagination from "@/components/Pagination";

const Tag = async ({ params, searchParams }: RouteParams) => {
  const { id } = await params;
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getTagQuestions({
    tagId: id,
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const { tag, questions, isNext } = data || {};

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">{tag?.name}</h1>
      </section>

      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={ROUTES.TAG(id)}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />

        <CommonFilter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </section>

      <DataRenderer
        success={success}
        error={error}
        data={questions}
        empty={EMPTY_QUESTION}
        render={(questions) =>
          questions.map((question) => (
            <div
              className="mt-10 flex w-full flex-col gap-6"
              key={question._id}
            >
              <QuestionCard question={question} />
            </div>
          ))
        }
      />

      <Pagination page={page} isNext={isNext || false} />
    </>
  );
};

export default Tag;
