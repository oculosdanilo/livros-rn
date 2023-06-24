import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Footer({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View style={styles.viewFooter}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textFooter}>Livros</Text>
          <Image
            source={require("/assets/icon.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text style={{ marginVertical: 20, textAlign: "center" }}>
        &copy; Camila Vitória, Danilo Lima & Juliana Leal
      </Text>
    </>
  );
}
