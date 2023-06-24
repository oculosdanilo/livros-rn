import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Header({ navigation, back }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const sim = <Ionicons name="arrow-back-outline" size={24} color="black" />;

  return !back ? (
    <View style={styles.viewHeader}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.textHeader, { fontFamily: "Inter_400Regular" }]}>
          {" "}
          Livros{" "}
        </Text>
        <Image
          source={require("/assets/icon.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
      </View>
      <TouchableOpacity>
        <Feather name="shopping-cart" color="black" style={styles.iconHeader} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.viewHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {sim}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.textHeader, { fontFamily: "Inter_400Regular" }]}>
          {" "}
          Livros{" "}
        </Text>
        <Image
          source={require("/assets/icon.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="shopping-cart" color="black" style={styles.iconHeader} />
      </TouchableOpacity>
    </View>
  );
}
