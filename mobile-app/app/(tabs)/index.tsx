import { TransactionCard } from "@/components/home/TransactionCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

export default function HomeScreen() {
  const sampleData = [
    { date: "2021-10-01", title: "Salary", amount: "1000" },
    { date: "2021-10-02", title: "Salary", amount: "2000" },
    { date: "2021-10-03", title: "Expense", amount: "-1000" },
    { date: "2021-10-04", title: "Salary", amount: "100000" },
    { date: "2021-10-05", title: "Salary", amount: "100000" },
    { date: "2021-10-06", title: "Salary", amount: "100000" },
    { date: "2021-10-08", title: "Salary", amount: "100000" },
    { date: "2021-10-09", title: "Salary", amount: "100000" },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ padding: 16 }}>
        <ThemedText type="title">Home</ThemedText>
        <FlatList
          data={sampleData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TransactionCard {...item} />}
        />
      </ThemedView>
    </SafeAreaView>
  );
}
