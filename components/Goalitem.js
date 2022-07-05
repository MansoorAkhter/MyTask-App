import { StyleSheet, Text, View, Pressable, Modal } from "react-native";

function Goalitem(props) {
  return (
    // Border radius could not apply on direct Text Element for iOS
    //Reading about bind() JS
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
