import { ImageProps, Text, View, Image } from 'react-native';
import { cn } from '../lib/utils';

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<typeof View> {
  label: string;
  labelClasses?: string;
  icon: ImageProps;
}
function Badge({
  label,
  labelClasses,
  className,
  icon,
  ...props
}: BadgeProps) {
  return (
    <View className={cn(className)} {...props}>
      <Image source={icon} className="w-4 h-4" />
      <Text className={cn(labelClasses)}>
        {label}
      </Text>
    </View>
  );
}

export { Badge };
