import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card w={190} h={280} color={"#05dab7"} title="Booking Summary" />
      <View style={styles.smallContainer}>
        <Card w={145} h={135} color={"#1ea7f7"} title="Receive Area" />
        <Card w={145} h={135} color={"#fb816f"} title="Send Area" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  smallContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
  },
});

export default HomeScreen;
