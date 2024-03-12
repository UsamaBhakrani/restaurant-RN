import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card w={190} h={280} color={"#05dab7"} title="Booking Summary">
        <View style={styles.summary}>
          <Text style={styles.orderSummary}>28/30</Text>
          <Text style={styles.valueSummary}>Rs. 35906</Text>
        </View>
        <AntDesign
          name="arrowright"
          size={40}
          style={styles.icon}
          color="white"
        />
      </Card>
      <View style={styles.smallContainer}>
        <Card w={145} h={135} color={"#1ea7f7"} title="Receive Area">
          <AntDesign name="arrowdown" size={36} color="white" />
        </Card>
        <Card w={145} h={135} color={"#fb816f"} title="Send Area">
          <AntDesign name="arrowup" size={36} color="white" />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  smallContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  summary: {
    padding: 15,
  },
  valueSummary: {
    fontSize: 22,
    color: "white",
    fontWeight: "400",
  },
  orderSummary: {
    fontSize: 35,
    color: "white",
    fontWeight: "500",
  },
  icon: {
    alignSelf: "flex-end",
    justifyContent: "space-around",
    paddingTop: 80,
    paddingRight: 5,
  },
});

export default HomeScreen;
