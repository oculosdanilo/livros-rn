import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";


export default function Footer({ navigation }) {
  return (
    <>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textHeader}> Livros </Text>
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
