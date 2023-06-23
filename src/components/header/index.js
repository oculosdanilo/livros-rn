import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Header({navigation}) {
  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textHeader}> Livros </Text>
        <Image source={require("/assets/icon.png")} style={{width: 40, height: 40}}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="shopping-cart" color="black" style={styles.iconHeader} />
      </TouchableOpacity>
    </View>
  );
}
