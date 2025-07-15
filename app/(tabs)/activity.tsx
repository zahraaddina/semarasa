import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function ActivityScreen() {
  const [activeTab, setActiveTab] = useState("Riwayat");

  const tabs = ["Riwayat", "Dalam Proses", "Terjadwal"];

  // Data dummy
  const data = {
    Riwayat: [
      { id: "1", title: "Seblak Jelatot", date: "10 Juli 2025" },
      { id: "2", title: "Pizza Mozarella", date: "9 Juli 2025" },
    ],
    "Dalam Proses": [
      { id: "3", title: "Ayam Geprek", date: "Hari ini, 15:20" },
    ],
    Terjadwal: [
      { id: "4", title: "Kopi Tubruk", date: "16 Juli 2025, 09:00" },
    ],
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aktivitas</Text>

      {/* Tab Filter */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <FlatList
        data={data[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#8B1C3F",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#8B1C3F",
    fontWeight: "bold",
  },
  itemCard: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemDate: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});
