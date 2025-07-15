import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LaunchScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text style={styles.tagline}>
        "Rasa Terbaik, Dari{'\n'}Tempat Tersembunyi."
      </Text>

      {/* Ilustrasi */}
      <Image
        source={require("../assets/images/launch.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tombol */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#85193C", // maroon
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
});
