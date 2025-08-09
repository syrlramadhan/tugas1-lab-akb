import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "ubuntu-regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "roboto-mediumitalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
    "opensans-extabolditalic": require("../assets/fonts/OpenSans_Condensed-ExtraBoldItalic.ttf"),
    "bitcount-medium": require("../assets/fonts/Bitcount_Cursive-Medium.ttf"),
    "inter-light": require("../assets/fonts/Inter_24pt-Light.ttf"),
    "bitcount-variable": require("../assets/fonts/Bitcount-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "opensans-italic-variable": require("../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
    "opensans-variable": require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "roboto-italic-variabel": require("../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
    "roboto-variabel": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return <Stack>
    <Stack.Screen name="(tabs)" options={{
      headerShown: false
    }}/>
  </Stack>;

  // return <Stack screenOptions={{
  //   header: ({ navigation, back }) => <View style={{
  //     backgroundColor: "white",
  //     borderBottomColor: "black",
  //     borderBottomWidth: 1,
  //     padding: 10
  //   }}>
  //     <TouchableOpacity onPress={() => {
  //       navigation.navigate("index")
  //     }}>
  //       <AntDesign name="home" size={40}></AntDesign>
  //     </TouchableOpacity>
  //   </View>
  // }}/>;
}