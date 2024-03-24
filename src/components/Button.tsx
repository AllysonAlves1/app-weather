import { Text, TouchableOpacity } from "react-native"

import { cn } from "../lib/utils"

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  label: string
  labelClasses?: string
}
function Button({
  label,
  labelClasses,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn({ className })}
      {...props}
    >
      <Text
        className={cn(labelClasses)}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export { Button }