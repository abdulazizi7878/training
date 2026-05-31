import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"#ffffff90"} />
    <Stack> 
    <Stack.Screen 
    name="(tabs)" 
    options={{
      headerShown: false,
    }}
    /> 
    <Stack.Screen name="+not-found" options={{headerTitle:"Oops! Not Found"}} />

  </Stack>  
    
    </>

);
}
