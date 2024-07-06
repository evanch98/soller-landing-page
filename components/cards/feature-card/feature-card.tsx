import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  desc: string;
}

export const FeatureCard = ({ icon: Icon, title, desc }: FeatureCardProps) => {
  return (
    <div className="mb-auto flex flex-col items-center justify-center gap-y-4 text-center text-black md:items-start md:justify-start md:text-left">
      <Icon className="h-16 w-16 text-purple-700" />
      <h1 className="text-subtitleXL md:text-h6">{title}</h1>
      <p className="text-bodyM md:text-bodyL">{desc}</p>
    </div>
  );
};
