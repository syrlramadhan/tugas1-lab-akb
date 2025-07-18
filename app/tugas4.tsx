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
          {index + 1}. Syahrul Ramadhan
        </Text>
      ))}
    </ScrollView>
  );
}