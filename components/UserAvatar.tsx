import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "./ui/avatar";


interface UserAvatarProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
  fallbackClassName?: string;
}

const UserAvatar = ({
  id,
  name,
  imageUrl,
  className = "h-9 w-9",
  fallbackClassName,
}: UserAvatarProps) => {
  
  const initials = name?.split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={cn('relative', className)}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            fill
            quality={100}
            alt={name || "Anonymous"}
            className="object-cover"
          />
        ) : (
          <AvatarFallback className={cn("primary-gradient font-space-grotesk font-bold tracking-wider text-white", fallbackClassName)}>
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
