import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

export default function AboutScreen() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768; // deteksi desktop/tablet

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.container, isLargeScreen && styles.containerLarge]}>
        <Text style={styles.title}>Tentang Aplikasi</Text>

        <Text style={styles.text}>
          Aplikasi ini dibuat untuk memenuhi tugas praktikum LAB{" "}
          <Text style={styles.bold}>Aplikasi Komputasi Bergerak</Text> dengan
          menggunakan Expo Router.
        </Text>

        <Text style={styles.text}>
          Fungsi halaman:
          {"\n"}- <Text style={styles.bold}>Home</Text>: Menampilkan informasi tentang Unismuh Makassar.
          {"\n"}- <Text style={styles.bold}>About</Text>: Menjelaskan tujuan dan fungsi aplikasi.
          {"\n"}- <Text style={styles.bold}>Profil</Text>: Menampilkan data diri pembuat aplikasi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f4f6f9",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: "100%",
  },
  containerLarge: {
    maxWidth: 800,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#004aad",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 10,
    lineHeight: 22,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "#004aad",
  },
});