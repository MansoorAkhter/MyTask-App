import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your learning goal!"/>
        <Button title="Add Goal"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"70%",
    marginRight: 8,
    padding:5,
  }
});
