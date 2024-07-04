import { Avatar } from "@/components/avatar/avatar";

interface UserProps {
  name: string;
  desc: string;
  profileSrc: string;
}

export const User = ({ name, desc, profileSrc }: UserProps) => {
  return (
    <div className="flex w-full items-center gap-x-4">
      <Avatar imgSrc={profileSrc} />
      <div className="flex flex-col">
        <p className="text-bodyL text-neutral-900">{name}</p>
        <p className="text-bodyM text-neutral-600">{desc}</p>
      </div>
    </div>
  );
};
