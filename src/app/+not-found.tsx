import { View, Button, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";


export default function NotFound () {
     return(
          <View style={styles.cont}>
               <Link href={"/"}>
                    <Button title="Go to Home or touch Grass" />
               </Link>
          </View>     
     )
}


const styles = StyleSheet.create({
     cont:{
          flex: 1,
          alignItems:"center",
          justifyContent:"center",
     }
})