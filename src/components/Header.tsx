import { Image, Text, View } from "react-native";
import { City } from "./City";
import { useState } from "react";

export function Header() {
  const notifications = useState(false);
  return (
    <View className="w-full justify-between flex-row">
      <City />
      {notifications ? (
        <Image
          source={require("@/assets/notifications.png")}
          className="w-6 h-6" />
      ) : (
        <Image
          source={require("@/assets/notifications-unread.png")}
          className="w-6 h-6" />
      )}
    </View>
  );
}
