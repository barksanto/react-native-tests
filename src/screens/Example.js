import React, { useState, useCallback } from "react"
import { Text, StyleSheet, TouchableHighlight, Image } from "react-native"

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
  tinyLogo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
})

// const pressed = () => {
//   console.log("button pressed!")
// }

function Example() {
  const [pokemon, setPokemon] = useState("nothing here yet")
  const [pokemonImage, setPokemonImage] = useState("")
  // function logPoke() {
  //   fetch(
  //     `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 101)}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokemon(data.name)
  //     })
  // }

  const getPoke = useCallback(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 101)}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.sprites.front_default)
        setPokemon(data.name)
        setPokemonImage(data.sprites.front_default)
      })
  }, [])

  return (
    // <Text>Welcome to example component</Text>
    <>
      <TouchableHighlight style={styles.button} onPress={getPoke}>
        <Text style={styles.text}>{pokemon}</Text>
      </TouchableHighlight>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: pokemonImage || "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9rZW1vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        }}
      />
    </>
  )
}

export default Example
