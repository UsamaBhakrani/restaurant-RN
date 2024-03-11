import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.background}>
      <AntDesign style={styles.icon} name="search1" color="black" />
      <TextInput
        placeholder="Search"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(e) => setSearch(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    fontSize: 32,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
export default SearchBar;
