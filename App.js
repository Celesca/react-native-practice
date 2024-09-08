import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={myStyle.container}
    >
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
  }
})