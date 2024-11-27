"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import { cn, getDevIconClassName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: TagCardProps) => {
  const iconClass = getDevIconClassName(name);

  const BadgeContent = (
    <>
      <Badge
        variant="outline"
        className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2"
      >
        <div className="flex-center space-x-2">
          <i className={cn(`${iconClass}`, "text-sm")} />
          <span>{name}</span>
        </div>

        {remove && (
          <Image
            src="/icons/close.svg"
            alt="close icon"
            width={12}
            height={12}
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <div className="flex justify-between gap-2">{BadgeContent}</div>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
        {BadgeContent}
      </Link>
    );
  }
};

export default TagCard;
