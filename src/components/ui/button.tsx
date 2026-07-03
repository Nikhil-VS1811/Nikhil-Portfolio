import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight cursor-pointer select-none transition-[background,border-color,color,transform,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_10px_30px_-12px_rgba(0,0,0,0.5)] hover:bg-foreground/90 hover:-translate-y-[1px]",
        premium:
          "text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_12px_40px_-14px_color-mix(in_oklab,var(--primary)_60%,transparent)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)_95%,white_5%),color-mix(in_oklab,var(--secondary)_90%,transparent))] hover:brightness-110 hover:-translate-y-[1px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_10px_30px_-14px_color-mix(in_oklab,var(--destructive)_60%,transparent)] hover:bg-destructive/90",
        outline:
          "border border-border bg-card/40 backdrop-blur-md text-foreground hover:border-primary/50 hover:bg-card/70",
        secondary:
          "bg-card/60 backdrop-blur-md border border-border text-foreground hover:bg-card/80 hover:border-primary/40",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-card/50",
        link:
          "text-primary underline-offset-4 hover:underline rounded-none px-0",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-4 text-[12.5px]",
        lg: "h-11 px-6 text-[15px]",
        xl: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
