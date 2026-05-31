import { Image } from "react-native";

type ImageData = {
     ImageSource : string;
     SelectedImage?: string;
     WidthStyle: number | string;
     HeightStyle: string | number ;
     BorderStyle: number;
};


function ImageViewer({ImageSource,WidthStyle,HeightStyle,BorderStyle,SelectedImage}:ImageData) {
     const sourceOfImage = SelectedImage ? {uri : SelectedImage} : ImageSource;

     return (<Image source={sourceOfImage} style={{width:WidthStyle,height:HeightStyle,borderRadius:BorderStyle,padding:2}} />)
}



export default ImageViewer;