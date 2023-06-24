import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  imgLivro: {
    width: 225,
    height: 350,
    borderRadius: 30,
    marginVertical: 30,
    alignSelf: "center",
  },
  txtTitulo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 30,
    textAlign: "center",
  },
  txtPreco: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
});

export default style;
