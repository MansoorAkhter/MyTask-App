import { StyleSheet, Text, View, Pressable } from "react-native";

function Goalitem(props) {
  return (
    // Border radius could not apply on direct Text Element for iOS
    //Reading about bind() JS
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>

  )
}

export default Goalitem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
})