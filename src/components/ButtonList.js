import { TouchableOpacity } from "react-native";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import OrderTable from "./OrderTable";
const ButtonList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        style={styles.flatList}
        renderItem={({ item }) => {
          return (
            <View style={styles.touchable}>
              {/* <Text>{item.name}</Text> */}
              <OrderTable />
            </View>
          );
        }}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  flatList: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 12,
},
touchable: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    // alignItems: "center",
    height: "auto",
    width: 340,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default ButtonList;
