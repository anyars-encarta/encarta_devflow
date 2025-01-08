import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";
import { RouteParams } from "@/types/global";
import { notFound, redirect } from "next/navigation";

const EditQuestion = async ({ params }: RouteParams) => {
  const { id } = await params;

  if (!id) return notFound();

  const session = await auth();
  if (!session) return redirect(ROUTES.SIGNIN);

  const { data: question, success } = await getQuestion({ questionId: id });

  if (!success) return notFound();

  if (question?.author.toString() !== session?.user?.id) redirect(ROUTES.QUESTIONS(id));

  return (
    <main>
        <QuestionForm question={question} isEdit />
    </main>
  );
};

export default EditQuestion;
