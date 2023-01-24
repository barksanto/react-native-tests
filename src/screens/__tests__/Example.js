import React from "react"
// @ fireEvent from core library to check interactions
import { render, fireEvent, act } from "@testing-library/react-native"
import Example from "../Example"

describe("Example.js", () => {
  it("renders an element with the text Example on the screen", () => {
    const { getByText } = render(<Example />)
    getByText("Example")
    expect(getByText("Example")).toBeTruthy()
  })

  it("renders an image after the button is pressed",  () => {
    const { getByTestId } = render(<Example />)
    // press the button
    fireEvent.press(getByTestId("Example.Button"))
    // get the image element
    const image = getByTestId("Example.Image")
    const imageUri = image._fiber.pendingProps.source.uri
    // log its props - uri in this case
    // console.log(getByTestId("Example.Image")._fiber.pendingProps.source.uri)

    console.log(imageUri)
    expect(imageUri).toMatch(/https:\/\/images.unsplash.com/i)
  })
})

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png
