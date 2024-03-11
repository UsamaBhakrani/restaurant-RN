import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { FlatList } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [list, setList] = useState(["a", "b"]);

  const getAreas = async () => {
    try {
      let { data: areas, error } = await supabase.from("company").select("*");
      setList(areas);
      console.log(areas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAreas();
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onSubmit={() => getAreas()}
      />
      <FlatList data={list} renderItem={()=>{}} />
      {list.map((l) => (
        <Text key={l.id}>{l.company}</Text>
      ))}
    </View>
  );
};

export default SearchScreen;
