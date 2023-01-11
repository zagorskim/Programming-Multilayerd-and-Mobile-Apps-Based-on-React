import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "react-native-paper";
import CountryList from "./components/CountryList";

export default function App() {
  return (
    <View style={styles.container}>
      <Title style={{ color: "black", fontSize: 50, paddingTop: 100, paddingBottom: 20 }}>
        Country list
      </Title>
      <CountryList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
