import { User } from "@/components/user/user";
import { IconType } from "react-icons";

interface TestimonialCardProps {
  icon: IconType;
  text: string;
  name: string;
  desc: string;
  profileSrc: string;
}

export const TestimonialCard = ({
  icon: Icon,
  text,
  name,
  desc,
  profileSrc,
}: TestimonialCardProps) => {
  return (
    <div className="flex w-full flex-col gap-y-4 rounded-[10px] bg-white p-8 text-black md:w-[368px]">
      <Icon className="h-16 w-16 text-purple-700" />
      <p className="text-bodyM md:text-bodyM">{text}</p>
      <User
        name={name}
        desc={desc}
        profileSrc={profileSrc}
      />
    </div>
  );
};
