import { Tabs } from "expo-router";
import React from "react";
import { House, ChartLine, Settings } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginRight: 15 }}>
            <Settings color={Colors[colorScheme ?? "light"].icon} size={24} />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
          tabBarIcon: (props) => <House {...props} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: (props) => <ChartLine {...props} />,
        }}
      />
    </Tabs>
  );
}
