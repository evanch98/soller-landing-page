import { User } from "@/components/user/user";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface TestimonialCardProps {
  icon: IconType;
  text: string;
  name: string;
  desc: string;
  profileSrc: string;
  className?: string;
}

export const TestimonialCard = ({
  icon: Icon,
  text,
  name,
  desc,
  profileSrc,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "flex h-fit w-[368px] flex-shrink-0 flex-col gap-y-4 rounded-[10px] bg-white p-8 text-black",
        className,
      )}
    >
      <Icon className="h-16 w-16 text-purple-700" />
      <p className="select-none text-bodyM md:text-bodyM">{text}</p>
      <User
        name={name}
        desc={desc}
        profileSrc={profileSrc}
      />
    </div>
  );
};
