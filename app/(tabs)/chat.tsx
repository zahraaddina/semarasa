import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ChatScreen() {
  // Data dummy chat
  const chatData = [
    {
      id: "1",
      name: "Warung Seblak",
      lastMessage: "Pesanan kamu sedang diproses ya~",
      time: "15:20",
      avatar: require("../../assets/images/seblak.png"),
    },
    {
      id: "2",
      name: "Pizza Mozarella",
      lastMessage: "Selamat datang! Ada yang bisa kami bantu?",
      time: "13:05",
      avatar: require("../../assets/images/pizza.png"),
    },
    {
      id: "3",
      name: "Ayam Geprek Mantul",
      lastMessage: "Terima kasih, ditunggu pesanan selanjutnya!",
      time: "Kemarin",
      avatar: require("../../assets/images/ayam.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Pesan</Text>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
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
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  chatItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 15,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
  },
});
