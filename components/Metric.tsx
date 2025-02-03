import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: number | string | undefined;
  title: string;
  href?: string;
  textStyles?: string;
  imgStyles?: string;
  isAuthor?: boolean;
  titleStyles?: string;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles,
  // isAuthor,
  titleStyles,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`rounded-full object-contain ${imgStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>

      {title ? (
        <span className={cn(`small-regular line-clamp-1`, titleStyles)}>
          {title}
        </span>
        ): null}
    </>
  );

  return href ? (
    <Link href="" className='flex-center gap-1'>{metricContent}</Link>
  ) : (
    <div className='flex-center gap-1'>{metricContent}</div>
  );
};

export default Metric;
