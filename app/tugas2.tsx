// /tugas2/index.js
import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');
const CELL_SIZE = width / 3;

const mainImages = [
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/adaptive-icon.png'),
  require('@/assets/images/favicon.png'),
  require('@/assets/images/icon.png'),
  require('@/assets/images/partial-react-logo.png'),
  require('@/assets/images/splash-icon.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
];

const altImages = [
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
  require('@/assets/images/react-logo.png'),
];

export default function Tugas2() {
  const [states, setStates] = useState(
    Array(9).fill(0).map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index: number) => {
    setStates((prev) => {
      return prev.map((state, i) => {
        if (i === index) {
          const nextScale = Math.min(state.scale * 1.2, 2);
          return { isAlt: !state.isAlt, scale: nextScale };
        }
        return state;
      });
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {mainImages.map((img, i) => (
          <Pressable
            key={i}
            onPress={() => handlePress(i)}
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={states[i].isAlt ? altImages[i] : mainImages[i]}
              style={{
                width: CELL_SIZE * 0.9,
                height: CELL_SIZE * 0.9,
                transform: [{ scale: states[i].scale }],
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
  },
});
