import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [remember, setRemember] = useState(false);

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Masuk</Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Masukan email anda"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password */}
      <Text style={styles.label}>Kata sandi</Text>
      <TextInput
        placeholder="Masukan sandi anda"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />

      {/* Custom Checkbox */}
      <TouchableOpacity
        style={styles.checkboxWrapper}
        onPress={() => setRemember(!remember)}
        activeOpacity={0.8}
      >
        <View style={[styles.checkboxBox, remember && styles.checkedBox]} />
        <Text style={styles.rememberText}>Ingatkan saya</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Belum memiliki akun? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  logo: {
    width: 180,
    height: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  checkboxBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#333",
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: "#8B1C3F",
  },
  rememberText: {
    color: "#444",
  },
  button: {
    backgroundColor: "#8B1C3F",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  footerText: {
    color: "#333",
  },
  registerText: {
    color: "#8B1C3F",
    fontWeight: "bold",
  },
});
