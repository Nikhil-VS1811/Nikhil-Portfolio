import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background/60 backdrop-blur-md text-foreground/85 hover:border-primary/50 hover:text-foreground",
        primary:
          "border-primary/40 bg-[color-mix(in_oklab,var(--primary)_12%,transparent)] text-foreground",
        secondary:
          "border-border bg-card/50 backdrop-blur-md text-muted-foreground hover:text-foreground",
        destructive:
          "border-destructive/40 bg-[color-mix(in_oklab,var(--destructive)_14%,transparent)] text-foreground",
        outline:
          "border-border text-muted-foreground hover:text-foreground",
        dot:
          "border-border bg-background/50 backdrop-blur-md text-muted-foreground pl-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
