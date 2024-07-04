import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-buttonM focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default: "bg-amber text-amber-900 hover:bg-amber/90 gap-x-4",
        phone: "text-blue-700 hover:bg-blue-700/10 gap-x-4",
        link: "text-neutral-900 hover:underline underline-offset-4",
        ghost: "text-amber-900 hover:text-amber-900/80 gap-x-4",
      },
      padding: {
        default: "py-3 pl-6 pr-3",
        phone: "py-3 pl-2 pr-6 ",
        icon: "p-2",
        link: "p-0",
        ghost: "py-4 pr-2 pl-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, padding, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
