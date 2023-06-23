import { StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "../components/header/index";


export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <TouchableOpacity onPress={() => navigation.navigate("Desc")}>
        <>Sim!!</>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
