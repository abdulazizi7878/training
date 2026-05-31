import { Image,StyleSheet } from "react-native";





type ImageData = {
     ImageSource : string;
     WidthStyle: number;
     HeightStyle: number  ;
};


function ImageViewer({ImageSource,WidthStyle,HeightStyle}:ImageData) {
     return (<Image source={ImageSource} style={{width:WidthStyle,}} />)
}



export default ImageViewer;