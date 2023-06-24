import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/header/index";
import Livros from "../../data/raw";
import style from "./style";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import Footer from "../../components/footer";
import Divider from "../../components/divider";

export default function TelaDesc({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
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
        <TouchableOpacity style={style.btnComprar}>
          <Feather
            name="shopping-cart"
            style={{ fontSize: 25, color: "white" }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 15,
              fontSize: 24,
              fontFamily: "Inter_400Regular",
            }}
          >
            Comprar
          </Text>
        </TouchableOpacity>
        <Divider />
        <View style={style.descContainer}>
          <Text
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 17,
              marginBottom: 3,
            }}
          >
            Descrição:
          </Text>
          <Text style={{ fontFamily: "Inter_400Regular", fontSize: 15 }}>
            {Livros[id - 1].descricao}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              alignItems: "baseline",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 17,
              }}
            >
              Gênero:{" "}
            </Text>
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 17 }}>
              {Livros[id - 1].Genero}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              alignItems: "baseline",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 17,
              }}
            >
              Páginas:{" "}
            </Text>
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 17 }}>
              {Livros[id - 1].Paginas}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              alignItems: "baseline",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 17,
              }}
            >
              Avaliação:{" "}
            </Text>
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 17 }}>
              {Livros[id - 1].Avaliacao}
            </Text>
          </View>
        </View>
        <Footer navigation={navigation}></Footer>
      </ScrollView>
    </View>
  );
}
