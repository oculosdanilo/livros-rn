import { StyleSheet, View } from "react-native";

export default function TelaDesc({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
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
