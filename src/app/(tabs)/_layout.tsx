import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {



  return (
  <Tabs screenOptions={{
      headerStyle: {
        backgroundColor:"#fff"
      },
      headerShadowVisible:true,
      tabBarStyle:{
        backgroundColor:"#fff",
      },
      tabBarShowLabel: false,
      headerTintColor: "#000"
    }}
>

    <Tabs.Screen 
    name="index" 
    options={{
      headerTitle: "Sticker Smash",
      tabBarIcon: ({focused})=> <Ionicons 
      name={ focused ? "home-sharp" : "home-outline"} 
      size={24}
      color={"#000"}
      />
    }}
    /> 
    
    <Tabs.Screen name="abdu"
    options={{
      headerShown:false,
      tabBarIcon:({focused})=> <Ionicons name={focused ? "sad-sharp" : "happy-outline"}
      size={24}
      color={"#000"}
      />

    }} 
    
    />

    <Tabs.Screen name="about" 
    options={{
     headerTitle: "About",
     tabBarIcon: ({focused})=> <Ionicons name={focused ? "information-circle-sharp" : "information-circle-outline"} 
     size={24}
     color={"#000"}

     />
   }}
    />



  </Tabs>
);
}
