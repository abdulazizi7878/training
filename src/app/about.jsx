import { Link } from "expo-router";
import {View,Button, Text, StyleSheet} from "react-native";


export default function AboutScreen () {

     return(
          <View style={styles.cont}>
               <Text style={styles.myText}>
                    This Is about Page
               </Text>

               
               <Link href={"/"} style={styles.button}>
               <Button title="Go to Home" color={"var(--abd)"} />
               
               </Link>  
               
          </View>
     )
}

const styles = StyleSheet.create({
     cont : {
          backgroundColor: "#333",
          flex: 1,
          alignItems: "center",
          justifyContent:"center",
     },
     myText: {
          color : "white",
          fontSize: 40,
     },
     button: {
          color:"white",
          textDecorationLine :"underline",
          textDecorationColor : "white",
        },
})