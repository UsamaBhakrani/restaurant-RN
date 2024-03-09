import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.background}>
      <AntDesign style={styles.icon} name="search1" size={36} color="black" />
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
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  input: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  icon: {
    paddingVertical: 5,
  },
});
export default SearchBar;
