import React, { useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');
const CELL_SIZE = width / 3.2;
const GAP = 12;

const mainImages = [
  require('@/assets/images/img1.png'),
  require('@/assets/images/img2.png'),
  require('@/assets/images/img3.png'),
  require('@/assets/images/img4.png'),
  require('@/assets/images/img5.png'),
  require('@/assets/images/img6.png'),
  require('@/assets/images/img7.png'),
  require('@/assets/images/img8.png'),
  require('@/assets/images/img9.png'),
];

const altImages = [
  require('@/assets/images/alt1.png'),
  require('@/assets/images/alt2.png'),
  require('@/assets/images/alt3.png'),
  require('@/assets/images/alt4.png'),
  require('@/assets/images/alt5.png'),
  require('@/assets/images/alt6.png'),
  require('@/assets/images/alt7.png'),
  require('@/assets/images/alt8.png'),
  require('@/assets/images/alt9.png'),
];

export default function Tugas2() {
  const [states, setStates] = useState(
    Array(9).fill(0).map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index: number) => {
    setStates((prev) =>
      prev.map((state, i) => {
        if (i === index) {
          const nextScale = Math.min(state.scale * 1.2, 2);
          return {
            isAlt: !state.isAlt,
            scale: +nextScale.toFixed(2),
          };
        }
        return state;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {mainImages.map((_, i) => (
          <Pressable key={i} onPress={() => handlePress(i)} style={styles.cell}>
            <Animated.View
              style={[
                styles.cardShadow,
                {
                  transform: [{ scale: states[i].scale }],
                },
              ]}
            >
              <Image
                source={states[i].isAlt ? altImages[i] : mainImages[i]}
                style={styles.image}
              />
            </Animated.View>
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
    backgroundColor: '#f8f9fa',
    paddingVertical: 20,
    paddingHorizontal: GAP,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: GAP,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardShadow: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  image: {
    width: CELL_SIZE * 0.85,
    height: CELL_SIZE * 0.85,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});