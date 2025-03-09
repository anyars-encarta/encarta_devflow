"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { use, useState } from "react";

import { toast } from "@/hooks/use-toast";
import { toggleSaveQuestion } from "@/lib/actions/collection.action";
import { ActionResponse } from "@/types/global";

const SaveQuestion = ({
  questionId,
  hasSavedQuestionPromise,
}: {
  questionId: string;
  hasSavedQuestionPromise: Promise<ActionResponse<{ save: boolean }>>;
}) => {
  const session = useSession();
  const userId = session.data?.user?.id;

  const { data } = use(hasSavedQuestionPromise);
  const { saved: hasSaved } = data ?? {};

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (isLoading) return;

    if (!userId)
      return toast({
        title: "Please login to save question",
        description: "Only logged-in users can save questions",
        variant: "destructive",
      });

    setIsLoading(true);

    try {
      const { success, data, error } = await toggleSaveQuestion({ questionId });

      if (success) {
        return toast({
          title: `Question ${data?.saved ? "saved" : "removed"} successfully`,
        });
      }

      if (!success) throw new Error(error?.message || "An error occured");
    } catch (e) {
      toast({
        title: "Error",
        description: e instanceof Error ? e.message : "An error occured",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Image
      src={hasSaved ? "/icons/star-filled.svg" : "/icons/star.svg"}
      width={18}
      height={18}
      alt="save"
      className={`cursor-pointer ${isLoading ? "opacity-50" : ""}`}
      aria-label="Save question"
      onClick={handleSave}
    />
  );
};

export default SaveQuestion;
