import { Link } from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {View, Text, StyleSheet} from "react-native";
import { Button } from "expo-router/build/react-navigation";


export default function AboutScreen () {

     return(
          <View style={styles.cont} >
               
               <FontAwesome name="info" size={50} />
               <Text style={styles.myText}>
                    About us
               </Text>
               
               <Link href={"/"} style={styles.button}>
                    <Button style={{backgroundColor:"#000"}}>
                         <Text style={{color:"#fff"}}>Coming Soon</Text>
                    </Button>
               </Link>  
               
          </View>
     )
}

const styles = StyleSheet.create({
     cont : {
          backgroundColor: "#fff",
          flex: 1,
          alignItems: "center",
          justifyContent:"center",
     },
     myText: {
          color : "black",
          fontSize: 40,
          fontFamily:"sans"
     },
     button: {
          color:"black",
          textDecorationLine :"underline",
          textDecorationColor : "black",
          marginTop:20
        },
})