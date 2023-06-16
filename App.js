import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./src/components/header/index";

export default function App() {
  return (
    /* <SafeAreaView> */
      <View style={styles.container}>
        <Header></Header>
      </View>
    /* </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
});
