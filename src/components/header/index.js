import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.viewHeader}>
      <Text style={styles.textHeader}> Livros </Text>
      <TouchableOpacity>
        <Feather name="shopping-cart" color="black" style={styles.iconHeader} />
      </TouchableOpacity>
    </View>
  );
}
