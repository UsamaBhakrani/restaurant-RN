import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MedRepOrderScreen from "./src/screens/MedRepOrderScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import ContactScreen from "./src/screens/ContactScreen";
import NewCustomerScreen from "./src/screens/NewCustomer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Search">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="MedRep Orders" component={MedRepOrderScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="New Customer Code" component={NewCustomerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
