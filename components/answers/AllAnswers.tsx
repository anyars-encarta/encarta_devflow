import { EMPTY_ANSWERS } from "@/constants/states";
import { ActionResponse, Answer } from "@/types/global";

import AnswerCard from "../cards/AnswerCard";
import DataRenderer from "../DataRenderer";
import CommonFilter from "../filters/CommonFilter";
import { AnswerFilters } from "@/constants/filters";

interface Props extends ActionResponse<Answer[]> {
  totalAnswers: number;
}

const AllAnswers = ({ data, success, error, totalAnswers }: Props) => {
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>

        <CommonFilter
          filters={AnswerFilters}
          otherClasses="sm:min-w-32"
          containerClasses="max-xs:w-full"
        />
      </div>

      <DataRenderer
        data={data}
        success={success}
        error={error}
        empty={EMPTY_ANSWERS}
        render={(answers) => answers.map((answer) => (
            <AnswerCard {...answer} key={answer._id}/>
        ))}
      />
    </div>
  );
};

export default AllAnswers;
