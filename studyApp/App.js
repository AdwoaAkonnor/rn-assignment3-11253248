import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0E8", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 15,
          marginRight: 15,
          marginTop: 25,
        }}
      >
        {/**Texts */}
        <View>
          <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 36 }}>
            Hello, Devs
          </Text>
        </View>
        {/**image */}
        <View>
          <Image source={require("./assets/Profile Image.png")} />
        </View>
        {/** Text input */}
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}
