import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Footer from "../../components/footer";
import Header from "../../components/header/index";
import Livros from "../../data/index";
import CardFilmes from "../../components/cardLivro";

export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} back={false}></Header>
      <ScrollView style={styles.lista} showsVerticalScrollIndicator={false}>
        <FlatList
          data={Livros}
          keyExtractor={(item) => [item[0].id, item[1].id]}
          vertical={true}
          style={{ height: "100%", padding: 0 }}
          ItemSeparatorComponent={() => (
            <View
              style={{ width: "100%", height: 2, backgroundColor: "#EDEDED" }}
            ></View>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 40,
                justifyContent: "space-between",
              }}
            >
              <CardFilmes
                titulo={item[0].nome}
                imagem={item[0].imagem}
                preco={item[0].Preço}
                idLivro={item[0].id}
                navigation={navigation}
              ></CardFilmes>
              <View style={styles.dividerV} />
              <CardFilmes
                titulo={item[1].nome}
                imagem={item[1].imagem}
                preco={item[1].Preço}
                idLivro={item[1].id}
                navigation={navigation}
              ></CardFilmes>
            </View>
          )}
        />
        <Footer navigation={navigation}></Footer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  lista: {
    width: "100%",
  },
  dividerV: {
    height: 240,
    width: 2,
    backgroundColor: "#EDEDED",
    alignSelf: "center",
  },
});
