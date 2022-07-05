import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import Goalinput from "./components/Goalinput";
import Goalitem from "./components/Goalitem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(yourGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: yourGoal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=>goal.id !== id);
    })
  }
  return (
    <View style={styles.appContainer}>
      <Goalinput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* flatList does work with premitive value in data array as well */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <Goalitem text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}/>;
          }}
          // Reading about keyExtractor
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
