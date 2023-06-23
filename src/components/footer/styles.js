import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "20px",
    paddingLeft: "20px",
    borderBottomWidth: "2px",
    borderBottomColor: "#EDEDED",
    borderTopWidth: "2px",
    borderTopColor: "#EDEDED",
  },
  textHeader: {
    fontSize: 30,
    color: "black",
    fontWeight: "400"
  },
  iconHeader: {
    fontSize: 32,
    color: "black",
    marginRight: "30px"
  },
});

export default styles;
