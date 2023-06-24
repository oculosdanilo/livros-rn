import { View, Text, Image, ScrollView } from "react-native";
import Header from "../../components/header/index";
import Livros from "../../data/raw";
import style from "./style";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function TelaDesc({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const { id } = route.params;

  return (
    <View style={style.container}>
      <Header navigation={navigation} back={true}></Header>
      <ScrollView
        contentContainerStyle={{ justifyContent: "center", width: "100%" }}
      >
        <Image source={Livros[id - 1].imagem} style={style.imgLivro}></Image>
        <Text style={style.txtTitulo}>{Livros[id - 1].nome}</Text>
        <Text style={style.txtPreco}>
          R${Livros[id - 1].Preço.replace("\n", " - ")}
        </Text>
      </ScrollView>
    </View>
  );
}
