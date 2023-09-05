// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import { useState } from "react";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

  function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);

		setEnteredGoalText("");
	}
  
  function clearInputHandler(){
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}
      backgroundColor={colors.dark}>
        {/* <ImageBackground
          source={require('C:\Users\Asus\Downloads\Computer Engineering\CPE026\HOA2.1\assets\goaltracker.png')}
          style={styles.backgroundImage}> */}
            <Text style={styles.header}>Goal Manager</Text>
            <Text style={styles.owner}>By: Andrea Faith Alimorong</Text>
          {/* </ImageBackground> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your course goal!'
          color={colors.dark}
          style={styles.inputText}
          onChangeText={goalInputHandler}
					value={enteredGoalText}
        />
        <Button
          title="Add Goal"
          borderColor={colors.lighter}
          color={colors.highlight}
          onPress={addGoalHandler}
        />
        <Button title="Clear"
        borderColor={colors.lighter}
        color={colors.highlight}
        onPress={clearInputHandler}/>
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalLists}>List of Goals</Text>
        {courseGoals.map((goal) => (
					<Text key={goal} style={styles.goalItem}>
						{goal}
					</Text>
				))}
      </View>
    </View>
  );
}

const colors = {
  dark: "#242423", // black
  light: "#646864", // gray
  lighter: "#ffffff", //white
  highlight: "#e6ad0f" //yellow
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 1,
    marginTop: 5,
    marginBottom: 1,
    marginLeft: 10,
    marginRight: 10
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover', // Cover the entire background
  //   justifyContent: 'center', // Center content vertically
  //   alignItems: 'center', // Center content horizontally
  // },
  appContainer: {
    // margin: 10,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  owner: {
    textAlign: 'center',
    color: 'white'
  },
  inputText: {
    borderWidth: 0.5,
    fontSize: 13,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 9
  },
  goalContainer: {
    flex: 4
    
  },
  goalLists: {
    textAlign: 'left',
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  inputContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1, // Line below
    borderBottomColor: 'white'
  },
  Button: {
    padding: 10,
    marginRight: 14,
    color: '#e6ad0f',
    borderColor: '#ffffff'
  },

  goalItem: {
		marginVertical: 4,
		paddingVertical: 10,
		paddingHorizontal: 18,
    marginLeft: 10,
    marginRight: 10,
		borderWidth: 2,
		borderColor: '#ffffff',
		// shadowColor: '#ffffff',
		backgroundColor: '#e6ad0f',
		color: '#242423',
		fontSize: 18,
		fontWeight: "bold",
	},
});
