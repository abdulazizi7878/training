import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {
  return (
  <Tabs screenOptions={{
      tabBarActiveTintColor:"#fff",
      headerStyle: {
        backgroundColor:"#25292e"
      },
      headerShadowVisible:false,
      tabBarStyle:{
        backgroundColor:"#25292e",
      },
      tabBarShowLabel: false,
      headerTintColor: "#fff"
    }}
>

    <Tabs.Screen 
    name="index" 
    options={{
      headerTitle: "Sticker Smash",
      tabBarIcon: ({focused})=> <Ionicons 
      name={ focused ? "home-sharp" : "home-outline"} 
      size={30}
      color={"#fff"}
      />
    }}
    /> 

    <Tabs.Screen name="about" 
    options={{
     headerTitle: "About",
     tabBarIcon: ({focused})=> <Ionicons name={focused ? "information-circle-sharp" : "information-circle-outline"} 
     size={30}
     color={"#fff"}

     />
   }}
    />

  </Tabs>
);
}
