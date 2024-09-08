import { TouchableOpacity, StyleSheet } from "react-native";
import { Plus } from "lucide-react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

type FloatingActionButtonProps = {
  onPress: () => void;
};

export const FloatingActionButton = ({
  onPress,
}: FloatingActionButtonProps) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      style={[
        styles.fab,
        { backgroundColor: Colors[colorScheme ?? "light"].icon },
      ]}
      onPress={onPress}
    >
      <Plus size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
