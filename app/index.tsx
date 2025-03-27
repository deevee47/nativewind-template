import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-blue-500 mb-4 font-bold text-4xl text-center">
        Welcome to the nativewind template by @deevee47
      </Text>
      <Link href="./onboarding" className="text-blue-500 underline">
        Go to Onboarding
      </Link>
      <Link href="./(tabs)/home" className="text-blue-500 underline">
        Go to Tabs Home
      </Link>
    </View>
  );
}
