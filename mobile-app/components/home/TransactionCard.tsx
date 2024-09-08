import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type TransactionCardProps = {
  date: string;
  title: string;
  amount: string;
};

export const TransactionCard = ({
  date,
  title,
  amount,
}: TransactionCardProps) => {
  const isNegative = parseFloat(amount) < 0;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
      <View style={styles.header}>
        <Text style={[styles.date, { color: colors.icon }]}>{date}</Text>
        <Ionicons
          name={
            isNegative ? "arrow-down-circle-outline" : "arrow-up-circle-outline"
          }
          size={24}
          color={isNegative ? colors.destructive : colors.tint}
        />
      </View>

      <Text style={[styles.title, { color: colors.cardForeground }]}>
        {title}
      </Text>

      <Text
        style={[
          styles.amount,
          isNegative ? styles.negative : styles.positive,
          { color: isNegative ? colors.destructive : colors.tint },
        ]}
      >
        {isNegative
          ? `- ¥${Math.abs(parseFloat(amount)).toFixed(2)}`
          : `¥${parseFloat(amount).toFixed(2)}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "transparent",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});
