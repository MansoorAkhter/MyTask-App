import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import Goalinput from "./components/Goalinput";
import Goalitem from "./components/Goalitem";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(yourGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: yourGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal!"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <Goalinput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* flatList does work with premitive value in data array as well */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <Goalitem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            // Reading about keyExtractor
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    // paddingHorizontal: 15,
  },
  goalsContainer: {
    // flex: 1,
  },
});
