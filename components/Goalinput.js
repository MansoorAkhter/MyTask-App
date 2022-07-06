import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";

function Goalinput(props) {
  const [yourGoal, setYourGoal] = useState("");

  function goalInputHandler(enteredText) {
    setYourGoal(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(yourGoal);
    setYourGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <Image source={require("../assets/images/target.jpg")} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder="Your learning goal!"
        onChangeText={goalInputHandler}
        value={yourGoal}
      />
      <View style={styles.buttonContainer}>
        
        <View style={styles.button}>
          <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
        </View>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
        </View>
      </View>
    </View>
  )
}

export default Goalinput;


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  image: {
    width: 130,
    height: 105,
    margin: 20,
    tintColor: "white"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color:"#120438",
    width: "100%",
    padding: 8,
    borderRadius: 5,
    fontSize:16
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
})

