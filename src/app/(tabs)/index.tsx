import { View, StyleSheet } from "react-native";
import { Image } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>      
      </View>
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
  imageContainer:{
    flex: 1,
    marginTop: 10
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 22,
  }
});

