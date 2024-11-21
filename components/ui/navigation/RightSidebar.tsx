import TagCard from "@/components/cards/TagCard";
import { hotQuestions } from "@/constants";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title, description }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={parseInt(_id) % 2 === 0 ? "/icons/question-blue.svg" : "/icons/question-orange.svg"}
                  alt="question"
                  width={20}
                  height={20}
                  className="invert-colors"
                />

                <p className="body-medium text-dark500_light700">{title}</p>
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

        <h3 className="h3-bold text-dark200_light900 mt-10">Top Questions</h3>

        <TagCard />
      </div>
    </section>
  );
};

export default RightSidebar;
