import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native";

export default function ProfilScreen() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768; // deteksi desktop/tablet

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.container, isLargeScreen && styles.containerLarge]}>
        <Image
          source={require("../../assets/profil.jpg")}
          style={[styles.image, isLargeScreen && styles.imageLarge]}
          resizeMode="cover"
        />

        <Text style={styles.title}>Data Diri</Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Nama Lengkap:</Text> Syahrul Ramadhan
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>NIM:</Text> 105841113722
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Kelas:</Text> TI-6D
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Jurusan:</Text> Informatika
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Fakultas:</Text> Teknik
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#004aad",
  },
  imageLarge: {
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#004aad",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    color: "#004aad",
  },
});
