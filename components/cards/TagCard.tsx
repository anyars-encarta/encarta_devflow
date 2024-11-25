"use client"

import { Badge, badgeVariants } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import { cn, getDevIconClassName } from "@/lib/utils";
import Link from "next/link";

interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
}: TagCardProps) => {

    const iconClass = getDevIconClassName(name);

  return (
    <>
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
        <Badge
          variant="outline"
          className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase"
        >
          <div className="flex-center space-x-2">
            <i className={cn(`${iconClass}`, "text-sm")} />
            <span>{name}</span>
          </div>
        </Badge>

        {showCount && (
          <p className="small-medium text-dark500_light700">{questions}</p>
        )}
      </Link>
    </>
  );
};

export default TagCard;
