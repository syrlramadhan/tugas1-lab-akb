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
  "Syahrul Ramadhan 105841113722",
  "Aulia Rahman 105841113823",
  "Nabila Zahra 105841113924",
  "Fadli Akbar 105841114025",
  "Intan Permata 105841114126",
  "Rizky Maulana 105841114227",
  "Dewi Sartika 105841114328",
  "Bagas Pratama 105841114429",
  "Siti Aisyah 105841114530",
  "Ilham Nugraha 105841114631"
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
          {nama[index]}. 
        </Text>
      ))}
    </ScrollView>
  );
}