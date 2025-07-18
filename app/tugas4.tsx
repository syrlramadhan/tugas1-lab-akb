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
  "Ilham Nugraha",
];

const STAMBUK_INDEX = 2;

const generateStambuk = (index: number) => {
  return `10584111${String(index).padStart(2, "0")}22`;
};

function getDisplayNama(index: number) {
  const total = nama.length;
  const result = [];

  for (let i = 5; i > 0; i--) {
    const idx = (index - i + total) % total;
    result.push({ name: nama[idx], stambuk: generateStambuk(idx) });
  }

  for (let i = 1; i <= 5; i++) {
    const idx = (index + i) % total;
    result.push({ name: nama[idx], stambuk: generateStambuk(idx) });
  }

  return result;
}

export default function Index() {
  const displayData = getDisplayNama(STAMBUK_INDEX);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {displayData.map((item, index) => (
        <Text
          key={index}
          style={{
            fontFamily: fontFamilies[index],
            fontSize: 24,
            marginVertical: 8,
          }}
        >
          {index + 1}. {item.name} {item.stambuk}
        </Text>
      ))}
    </ScrollView>
  );
}