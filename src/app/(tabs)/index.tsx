import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>Hello world</Text>
      <Link href={"/about"} style={styles.button}>
         Go to About Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#010101",
  },
  myText: {
    color: "#ffffff",
  },
  button: {
    color:"white",
    textDecorationLine :"underline",
    textDecorationColor : "white",
  },
});

