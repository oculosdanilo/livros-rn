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
    marginBottom: 20,
  },
  btnComprar: {
    paddingVertical: 10,
    backgroundColor: "#953A41",
    width: "65%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginBottom: 30,
  },
  descContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
});

export default style;
