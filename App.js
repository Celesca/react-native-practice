import { View, Text, StyleSheet, Image } from "react-native";
import { myStyle } from "./styles/myStyle";

export default function App() {
  return (
    <View
      style={myStyle.container}
    >
      <Image source={require("./assets/icon.png")} style={myStyle.logo}></Image>
      <Image source={{uri: "https://job.science.cmu.ac.th/upload/company/1-2022-12-15-225117972.png"}} style={myStyle.image}></Image>
      <Text style={myStyle.header}>Hello, this is Celesca.</Text>
      <Text style={myStyle.content}>Let's learn React Native together.</Text>
    </View>
  );
}

