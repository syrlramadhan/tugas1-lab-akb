import React from "react";
import { Text, ScrollView } from "react-native";

const fontFamilies = [
  "ubuntu-regular",
  "roboto-mediumitalic",
  "opensans-extabolditalic",
  "bitcount-medium",
  "inter-light",
  "bitcount-variable",
  "opensans-italic-variable",
  "opensans-variable",
  "roboto-italic-variabel",
  "roboto-variabel",
];

const nama = [
  "Syahrul Ramadhan",
  "Aulia Rahman",
  "Nabila Zahra",
  "Fadli Akbar",
  "Intan Permata",
  "Rizky Maulana",
  "Dewi Sartika",
  "Bagas Pratama",
  "Siti Aisyah",
  "Ilham Nugraha"
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {fontFamilies.map((font, index) => (
        <Text
          key={index}
          style={{
            fontFamily: font,
            fontSize: 24,
            marginVertical: 8,
          }}
        >
          {nama[index]} 105841110{index}22.
        </Text>
      ))}
    </ScrollView>
  );
}