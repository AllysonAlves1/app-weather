import { forwardRef } from "react"
import { Text, TextInput, View } from "react-native"

import { cn } from "../lib/utils"

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string
  labelClasses?: string
  inputClasses?: string
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <Text
          className={cn("text-white text-base font-bold mb-1", labelClasses)}
        >
          {label}
        </Text>
      )}
      <TextInput
        placeholderTextColor={"#000"}
        className={cn(
          inputClasses,
          "py-2.5 px-4 rounded-lg bg-gray-300 shadow-md"
        )}
        {...props}
      />
    </View>
  )
)

export { Input }