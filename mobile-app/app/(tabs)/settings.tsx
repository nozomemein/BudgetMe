import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
