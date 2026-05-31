import { Link } from "expo-router";
import {View, Text, StyleSheet} from "react-native";


export default function AboutScreen () {

     return(
          <View style={styles.cont} >
               <Text style={styles.myText}>
                    This Is about Page
               </Text>

               
               <Link href={"/"} style={styles.button}>
               Go home
               </Link>  
               
          </View>
     )
}

const styles = StyleSheet.create({
     cont : {
          backgroundColor: "#010101",
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