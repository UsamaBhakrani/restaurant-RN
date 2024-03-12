import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate("Orders")}>
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
        </TouchableOpacity>
        <View style={styles.smallContainer}>
          <TouchableOpacity>
            <Card w={145} h={135} color={"#1ea7f7"} title="Receive Area">
              <AntDesign name="arrowdown" size={36} color="white" />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card w={145} h={135} color={"#fb816f"} title="Send Area">
              <AntDesign name="arrowup" size={36} color="white" />
            </Card>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList style={styles.flatList} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f2f6f7",
  },
  container: {
    flexDirection: "row",
    marginTop: 15,
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
  flatList: {
    borderWidth: 2,
    marginTop: 35,
    marginHorizontal: 10,
    height: 350,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
});

export default HomeScreen;
