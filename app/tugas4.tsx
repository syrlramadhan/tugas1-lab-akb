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

const namaList = [
  "Syahrul Ramadhan 105841113722",
  "Aulia Rahman 105841113822",
  "Nabila Zahra 105841113922",
  "Fadli Akbar 105841114022",
  "Intan Permata 105841114122",
  "Rizky Maulana 105841114222",
  "Dewi Sartika 105841114322",
  "Bagas Pratama 105841114422",
  "Siti Aisyah 105841114522",
  "Ilham Nugraha 105841114622"
];

const TOTAL = namaList.length;

const STAMBUK_INDEX = 0;

function getStambukRelatedNames(index: number) {
  const before = [];
  const after = [];

  for (let i = 1; i <= 5; i++) {
    const idx = (index - i + TOTAL) % TOTAL;
    before.unshift(namaList[idx]); // dari belakang, urutkan naik
  }

  for (let i = 1; i <= 5; i++) {
    const idx = (index + i) % TOTAL;
    after.push(namaList[idx]);
  }

  return [...before, ...after];
}

export default function Index() {
  const displayNames = getStambukRelatedNames(STAMBUK_INDEX);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {displayNames.map((name, index) => (
        <Text
          key={index}
          style={{
            fontFamily: fontFamilies[index],
            fontSize: 24,
            marginVertical: 8,
          }}
        >
          {index + 1}. {name}
        </Text>
      ))}
    </ScrollView>
  );
}