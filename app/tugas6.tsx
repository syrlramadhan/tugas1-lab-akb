import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const IconScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconGrid}>
        <Ionicons name="home" size={40} color="teal" />
        <FontAwesome name="user" size={40} color="orange" />
        <MaterialIcons name="email" size={40} color="purple" />
        <Entypo name="phone" size={40} color="blue" />
        <Feather name="camera" size={40} color="green" />
        <AntDesign name="heart" size={40} color="red" />
        <MaterialCommunityIcons name="laptop" size={40} color="navy" />
        <Octicons name="bell" size={40} color="black" />
        <EvilIcons name="location" size={40} color="brown" />
        <Foundation name="star" size={40} color="gold" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    rowGap: 30,
  },
});

export default IconScreen;