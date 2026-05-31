import { View, StyleSheet, ScrollView } from "react-native";
import ImageViewer from "../../../components/imageViwer";
import MyButton from "../../../components/myButton";
import * as ImagePicker from "expo-image-picker"
import { useState } from "react";

export default function Index() {

  const [image, setImage] =  useState<string | undefined>(undefined);

  const pickImageAsync = async ()  => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:["images","livePhotos"],
      allowsEditing:true,
      quality:1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    } else {
      alert("you did not select any image!");
    }

  }

  const placeHolderImage = require("@/assets/images/adaptive-icon.png");


  return (
    <ScrollView style={[styles.container]}>

      <View style={[styles.imageContainer,{backgroundColor:"#00000050",padding:20, borderRadius:22}]}>
         <ImageViewer ImageSource={placeHolderImage} WidthStyle={"100%"} HeightStyle={350} BorderStyle={20} SelectedImage={image} />  
      </View>

      <View style={{flex:1/3, justifyContent:"center",alignItems:"center", marginBottom:20 ,backgroundColor:"#00000050",padding:20, borderRadius:22,margin:6}}>
         <MyButton label="Choose a photo" action={()=>{pickImageAsync()}} theme="primary" />
         <MyButton label="Use this" /> 
      </View>

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfaf9",
    gap:50
  },
  imageContainer:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    height:500,
    margin:6,
  },
});

 