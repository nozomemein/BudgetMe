import { ThemedText } from "@/components/ThemedText";
import { Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText type="title">Home</ThemedText>
      </ThemedView>
      <Text className="text-red-500">native wind!!</Text>
    </SafeAreaView>
  );
}
