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

export default function RegisterScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Semua field harus diisi!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
      return;
    }

    // Jika validasi berhasil, arahkan ke beranda
    router.push("/login");
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Daftar</Text>

      {/* Nama */}
      <Text style={styles.label}>Nama</Text>
      <TextInput
        placeholder="Masukan nama lengkap anda"
        placeholderTextColor="#888"
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => updateFormData('name', text)}
      />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Masukan email anda"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => updateFormData('email', text)}
      />

      {/* Password */}
      <Text style={styles.label}>Kata Sandi</Text>
      <TextInput
        placeholder="Masukan kata sandi anda"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => updateFormData('password', text)}
      />

      {/* Confirm Password */}
      <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
      <TextInput
        placeholder="Konfirmasi kata sandi anda"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        value={formData.confirmPassword}
        onChangeText={(text) => updateFormData('confirmPassword', text)}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>DAFTAR</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Sudah memiliki akun? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Masuk</Text>
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
  button: {
    backgroundColor: "#8B1C3F",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
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
  loginText: {
    color: "#8B1C3F",
    fontWeight: "bold",
  },
});