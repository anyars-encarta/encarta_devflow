import React from "react";

const QuestionDetails = ({ params }: { params: { id: number } }) => {
  const { id } = params;

  return <div>Question Details for {id}</div>;
};

export default QuestionDetails;
