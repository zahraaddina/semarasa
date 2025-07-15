import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function BerandaScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Data dummy untuk promo
  const promoData = [
    {
      id: 1,
      title: "Seblak Jelatot",
      subtitle: "Banjir Kanal Barat, Semarang",
      price: "15.500",
      originalPrice: "18.000",
      image: require("../../assets/images/seblak.png") // Ganti dengan path gambar Anda
    },
    {
      id: 2,
      title: "Pizza Mozarella",
      subtitle: "Jl Kenangan, Semarang",
      price: "50.000",
      originalPrice: "65.000",
      image: require("../../assets/images/pizza.png") // Ganti dengan path gambar Anda
    },
    {
      id: 3,
      title: "Ayam Geprek",
      subtitle: "Jl Pandanaran, Semarang",
      price: "25.000",
      originalPrice: "30.000",
      image: require("../../assets/images/ayam.png") // Ganti dengan path gambar Anda
    }
  ];

  const menuItems = [
    { id: 1, title: "Maps", icon: "map-outline", color: "#8B1C3F" },
    { id: 2, title: "SemaSnap", icon: "camera-outline", color: "#8B1C3F" },
    { id: 3, title: "Diskon", icon: "pricetag-outline", color: "#8B1C3F" },
    { id: 4, title: "Best Seller", icon: "star-outline", color: "#8B1C3F" },
  ];

  const renderPromoItem = ({ item }) => (
    <View style={styles.promoCard}>
      <Image source={item.image} style={styles.promoImage} />
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart-outline" size={20} color="#666" />
      </TouchableOpacity>
      <View style={styles.promoContent}>
        <Text style={styles.promoTitle}>{item.title}</Text>
        <Text style={styles.promoSubtitle}>{item.subtitle}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{item.price}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={require("../../assets/images/profile.png")} // Ganti dengan path gambar profile
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hallo, Adin!</Text>
          <Text style={styles.subGreetingText}>Selamat datang di SemaRasa</Text>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Image
            source={require("../../assets/images/food-banner.png")} // Ganti dengan path gambar banner
            style={styles.bannerImage}
          />
          <View style={styles.bannerContent}>
            <View style={styles.crownIcon}>
              <Ionicons name="diamond" size={24} color="#FFD700" />
            </View>
            <Text style={styles.bannerTitle}>UPTO</Text>
            <Text style={styles.bannerDiscount}>20% OFF</Text>
            <Text style={styles.bannerSubtitle}>On your first order</Text>
          </View>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name={item.icon} size={24} color={item.color} />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Promo Section */}
        <View style={styles.promoSection}>
          <View style={styles.promoHeader}>
            <Text style={styles.promoSectionTitle}>Promo Hari Ini</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={promoData}
            renderItem={renderPromoItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promoList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  profileButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  greetingContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subGreetingText: {
    fontSize: 16,
    color: "#666",
  },
  promoBanner: {
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#8B1C3F",
    flexDirection: "row",
    padding: 20,
  },
  bannerImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  bannerContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  crownIcon: {
    position: "absolute",
    top: -10,
    right: 10,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  bannerDiscount: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 5,
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  menuItem: {
    alignItems: "center",
    flex: 1,
  },
  menuIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  menuText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
  promoSection: {
    paddingHorizontal: 20,
  },
  promoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  promoSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAllText: {
    color: "#8B1C3F",
    fontSize: 14,
    fontWeight: "600",
  },
  promoList: {
    paddingRight: 20,
  },
  promoCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 15,
    width: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  promoImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  promoContent: {
    padding: 15,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  promoSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 12,
    color: "#666",
    textDecorationLine: "line-through",
  },
  infoButton: {
    backgroundColor: "#8B1C3F",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  infoButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});