import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function Goalinput(props) {
  const [yourGoal, setYourGoal] = useState("");

  function goalInputHandler(enteredText) {
    setYourGoal(enteredText);
  }
  function addGoalHandler(){
    props.onAddGoal(yourGoal);
    setYourGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your learning goal!"
        onChangeText={goalInputHandler}
        value={yourGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  )
}

export default Goalinput;


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
})

