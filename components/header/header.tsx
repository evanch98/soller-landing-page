import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle: string;
  desc: string;
  center?: boolean;
  className?: string;
}

export const Header = ({
  title,
  subtitle,
  desc,
  center = true,
  className,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        "flex w-full max-w-[900px] flex-col items-center justify-center gap-y-6 text-center text-black",
        !center && "items-start text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-y-2",
          !center && "items-start",
        )}
      >
        <p className="text-subtitleM text-amber-600 md:text-subtitleXL">
          {subtitle}
        </p>
        <h1 className="text-h5 md:text-h2">{title}</h1>
      </div>
      <p className="text-bodyM md:text-bodyXL">{desc}</p>
    </header>
  );
};
