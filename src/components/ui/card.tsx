import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-border/70 bg-card/55 text-card-foreground",
        "backdrop-blur-xl",
        "shadow-[0_1px_0_0_color-mix(in_oklab,white_5%,transparent)_inset,0_30px_60px_-30px_color-mix(in_oklab,black_60%,transparent),0_8px_20px_-14px_color-mix(in_oklab,black_40%,transparent)]",
        "transition-[transform,border-color,box-shadow,background-color] duration-500 ease-out",
        "hover:border-primary/30 hover:bg-card/70 hover:-translate-y-[3px]",
        "hover:shadow-[0_1px_0_0_color-mix(in_oklab,white_6%,transparent)_inset,0_40px_80px_-30px_color-mix(in_oklab,var(--primary)_22%,transparent),0_12px_30px_-14px_color-mix(in_oklab,black_50%,transparent)]",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-2 p-7 pb-4", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-lg font-medium leading-tight tracking-[-0.01em] text-foreground", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-7 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-3 p-7 pt-4 border-t border-border/60 mt-2", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
