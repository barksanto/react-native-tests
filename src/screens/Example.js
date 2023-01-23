import React from "react"
import { Text, StyleSheet, TouchableHighlight } from "react-native"

// import { NavigationContainer } from "@react-navigation/native"
// import { createStackNavigator } from "@react-navigation/stack"
// const Stack = createStackNavigator()

// function Example() {
//   return <Text>Example</Text>
// }

// export default Example

// export default () => <Text>Exampless</Text>

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "green",
    color: "white",
    width: 200,
    borderRadius: 4,
    elevation: 3,
    textAlign: "center",
    alignSelf: "center",
    margin: 10,
  },
})

const pressed = () => {
  console.log("button pressed!")
}

function Example() {
  return (
    // <Text>Welcome to example component</Text>
    <TouchableHighlight style={styles.button} onPress={pressed}>
      <Text style={styles.text}>Click me</Text>
    </TouchableHighlight>
  )
}

export default Example
