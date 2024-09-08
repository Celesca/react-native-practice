import { View, Text, StyleSheet, Image } from "react-native";
const logo = require("./assets/icon.png");

export default function App() {
  return (
    <View
      style={myStyle.container}
    >
      <Image source={{uri: "https://job.science.cmu.ac.th/upload/company/1-2022-12-15-225117972.png"}} style={myStyle.image}></Image>
      <Text style={myStyle.header}>Hello, this is Celesca.</Text>
      <Text style={myStyle.content}>Let's learn React Native together.</Text>
    </View>
  );
}

const myStyle = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  conent: {
    fontStyle: "italic"
  },
  image: {
    height: 130,
    width: 180,
   marginBottom: 10 
  }
})