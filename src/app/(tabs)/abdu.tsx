import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView,View,Text,StyleSheet } from "react-native";
import { Image } from "react-native";

//importing fonts

import {  Ubuntu_300Light, Ubuntu_400Regular,useFonts} from "@expo-google-fonts/ubuntu"




export default function AbduTest(){

     const [fontsLoaded] = useFonts({
          Ubuntu_300Light,
          Ubuntu_400Regular,
        });
      
        if (!fontsLoaded) {
          return null;
        }

     return(
          <ScrollView style={style.cont} contentContainerStyle={{padding:20,alignItems:"center",gap:50}}>
               <TestArea />
          </ScrollView>
     )
}

function TestArea() {
     return(
          <>  
        <View style={style.conts}>

               <Image source={{
                    uri:"https://worabehighschool.great-site.net/store/photo/IMG_20260225_115037_747.jpg",
                    }} 
                    style={style.ImageStyle} 
               />
               <Text style={style.text}>
                    Welcome to Worabe High School
                    Learn. Grow. Lead.
                    At Worabe High School, education is more than classrooms. It is innovation, teamwork, and preparing students for the real world.
               </Text> 

               <Image source={{uri:"https://worabehighschool.great-site.net/store/photo/logo.jpg"}} style={style.ImageStyle} />
               <Text style={style.text}>
               Worabe High School
               Worabe High School is dedicated to providing quality education that prepares students for academic success and responsible citizenship. Our school focuses on strong values, discipline, and knowledge that helps students succeed in the modern world.
               </Text>
          </View>
     </>
  )
}

const style = StyleSheet.create({
     cont:{
          "flex":1,
          "backgroundColor" : "#fff",
     },
     conts:{
          width: `${11/11*100}%`,
          height: "auto",
          gap: 50,
          padding: 20,
          marginTop: 10,
          borderWidth: 1,
          borderColor:"#00000015",
          borderRadius: 22,
          backgroundColor:"#ffffff",

          //for IOS
          shadowOffset:{
               width:0,
               height:4,
          },
          shadowOpacity:0.2,
          shadowRadius:6,
          //for android

          shadowColor:"#000",
          elevation:2
     },
     ImageStyle:{
          width:"100%",
          height:320,
          borderWidth: 2,
          borderRadius:20,
          borderColor:"#00000015",
     },
     text: {
          fontSize: 18,
          color:"#000",
          fontFamily: "Ubuntu_400Regular",
          textAlign:"center"
     }
})