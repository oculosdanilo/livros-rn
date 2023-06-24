import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function CardFilmes({
  navigation,
  titulo,
  preco,
  imagem,
  idLivro,
}) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ paddingVertical: 15 }}>
      <TouchableOpacity
        style={styles.containerLivros}
        onPress={() => navigation.navigate("Desc", { id: idLivro })}
      >
        <Image style={styles.images} source={imagem}></Image>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.textPreco}>R${preco}</Text>
      </TouchableOpacity>
    </View>
  );
}
