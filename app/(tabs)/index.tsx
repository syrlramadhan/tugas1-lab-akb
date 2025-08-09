import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768; // untuk deteksi desktop/tablet

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.container, isLargeScreen && styles.containerLarge]}>
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>

        <Image
          source={require("../../assets/unismuh.jpg")}
          style={[styles.image, isLargeScreen && styles.imageLarge]}
          resizeMode="cover"
        />

        <Text style={styles.text}>
          Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu
          perguruan tinggi swasta terkemuka di Makassar, Sulawesi Selatan.
          Berlokasi di Jl. Sultan Alauddin No.259, Unismuh memiliki berbagai
          fakultas dan program studi yang berkualitas.
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
    alignItems: "center",
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
    marginTop: 15,
    lineHeight: 22,
    color: "#333",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  imageLarge: {
    height: 300,
  },
});