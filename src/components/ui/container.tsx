import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva(
  "mx-auto p-4 ",
  {
    variants: {
      size: {
        default:`
        max-w-full
        sm:max-w-screen-sm md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        `,
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },
      fluid: {
        true: "mx-8" // find a way to break handle invalidate size if
      }
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, fluid, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(containerVariants({ size, fluid, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, containerVariants }
