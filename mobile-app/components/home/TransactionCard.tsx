import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <Ionicons
          name={
            isNegative ? "arrow-down-circle-outline" : "arrow-up-circle-outline"
          }
          size={24}
          color={isNegative ? "red" : "green"}
        />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text
        style={[styles.amount, isNegative ? styles.negative : styles.positive]}
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
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    color: "gray",
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
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
