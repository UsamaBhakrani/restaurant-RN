import { StyleSheet, Text, View } from "react-native";

const Card = ({ h, w, color, title, children }) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          { height: h, width: w, backgroundColor: color },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 15,
  },
});

export default Card;
