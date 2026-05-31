import { FontAwesome } from "@expo/vector-icons";
import { Pressable,Text,StyleSheet, View } from "react-native";

type ButtonData = {
     label: string;
     theme?:"primary";
     action?: ()=>void;
}

export default function MyButton ({label,theme,action}:ButtonData){

     if (theme === "primary") {
     return(
          <View style={[ styles.container]}>
          <Pressable onPress={action}  style={[styles.button ,{backgroundColor:"#fff",borderWidth:2,borderColor:"#000",borderRadius:20}]} >
               <FontAwesome name="picture-o" />
              <Text style={{color:"#000",textAlign:"center"}}>{label}</Text> 
          </Pressable>               
          </View>
     ) 
} else {
     return(
          <View style={styles.container}>
          <Pressable onPress={action} style={[styles.button,{borderWidth:1,borderColor:"#000",borderRadius:20}]}>
              <Text style={{color:"#fff",textAlign:"center"}}>{label}</Text> 
          </Pressable>               
          </View>
     ) 
}
    
}

const styles = StyleSheet.create({
     container:{
          width:280,
          height:50,
          marginVertical:5
     },
     button:{
          height:"100%",
          flex:1,
          flexDirection:"row",
          gap: 20 ,
          justifyContent:"center",
          alignItems:"center",
          borderRadius:16
     }
})