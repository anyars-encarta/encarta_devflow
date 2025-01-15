"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";
import { cn, getDevIconClassName, getTechDescription } from "@/lib/utils";

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
  const iconDescription = getTechDescription(name);

  const BadgeContent = (
    <>
      <Badge
        variant="outline"
        className="subtle-medium background-light800_dark300 text-dark400_light500 flex flex-row gap-2 rounded-md border-none px-4 py-2 uppercase"
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
      <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
        {BadgeContent}
      </Link>
    );
  }

  return (
    <Link href={ROUTES.TAG(_id)} className="shadow-light100_darknone cursor-pointer">
      <article className='background-light900_dark200 light-border flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]'>
        <div className='flex items-center justify-between gap-3'>
          <div className='background-light800_dark400 w-fit rounded-sm px-5 py-1.5'>
            <p className='paragraph-semibold text-dark300_light900'>{name}</p>
          </div>

          <i className={cn(iconClass, 'text-2xl')} aria-hidden="true" />
        </div>

        <p className='small-regular text-dark500_light700 mt-5 line-clamp-3 w-full'>
          {iconDescription}
        </p>

        <p className='small-medium text-dark400_light500 mt-3.5'>
          <span className='body-semibold primary-text-gradient mr-2.5'>
            {questions}+
          </span>
          Questions
        </p>
      </article>
    </Link>
  )
};

export default TagCard;
