import React from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
      }}
    >
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#007AFF',
        }}
      />

      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: '#34C759',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Syahrul Ramadhan
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#FF9500',
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          105841113722
        </Text>
      </View>
    </View>
  );
}