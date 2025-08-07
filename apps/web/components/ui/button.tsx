import * as React from "react";
import { Button as BaseButton, buttonVariants } from "@sonfootball/ui/button";
import { cn } from "@sonfootball/ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Web-specific button variants that extend the base button
const webButtonVariants = cva(
  // Base classes from the shared button
  buttonVariants(),
  {
    variants: {
      // Add web-specific variants
      webVariant: {
        hero: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800",
        cta: "bg-orange-500 text-white hover:bg-orange-600 shadow-md",
        subtle:
          "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
      },
    },
    defaultVariants: {
      webVariant: undefined,
    },
  }
);

export interface WebButtonProps
  extends React.ComponentProps<typeof BaseButton>,
    VariantProps<typeof webButtonVariants> {
  webVariant?: "hero" | "cta" | "subtle";
}

export const Button = React.forwardRef<HTMLButtonElement, WebButtonProps>(
  ({ className, webVariant, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={cn(webButtonVariants({ webVariant, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "WebButton";

// Re-export the base button for cases where we want the original
export { BaseButton };
