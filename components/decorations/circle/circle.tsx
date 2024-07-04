import { cn } from "@/lib/utils";

interface CircleProps {
  size: number;
  colorClass?: string;
}

export const Circle = ({
  size = 150,
  colorClass = "bg-amber-500",
}: CircleProps) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={cn("rounded-full", colorClass)}
    />
  );
};
