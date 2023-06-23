import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import Footer from "../components/footer";
import Header from "../components/header/index";
import Livros from "../data/index";

export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <ScrollView style={styles.lista}>
        <FlatList
          data={Livros}
          keyExtractor={(item) => item.id}
          vertical={true}
          renderItem={({ item }) => (
            <>
              <Text>{item[0].nome}</Text>
              <Text>{item[1].nome}</Text>
            </>
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
});
