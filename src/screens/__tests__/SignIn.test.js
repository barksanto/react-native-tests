import React from "react"
// @ fireEvent from core library to check interactions
import { render, fireEvent } from "@testing-library/react-native"
import SignIn from "../SignIn"

// import { interpolate } from "react-native-reanimated"

// const flushMicrotasksQueue = () =>
//   new Promise((resolve) => setImmediate(resolve))

describe("SignIn", () => {
  it("renders the default elements", () => {
    const { getAllByText } = render(<SignIn />)
    // assert that login will appear 2x on the screen
    expect(getAllByText("Login").length).toBe(2)
  })

  // shows inputs
  it("shows inputs", () => {
    const { getByPlaceholderText } = render(<SignIn />)
    expect(getByPlaceholderText("example")).toBeTruthy()
    expect(getByPlaceholderText("***")).toBeTruthy()
  })

  it("shows invalid input error messages if both inputs are empty on button press", () => {
    const { getByTestId, getByText } = render(<SignIn />)
    fireEvent.press(getByTestId("SignIn.Button"))
    // #  getByTestId("SignIn.Button") // -> test won't pass if we don't fire the event
    getByText("Invalid username.")
    getByText("Invalid password.")
  })

  it("if username invalid show error message", () => {
    const { getByTestId, getByText, queryAllByText } = render(<SignIn />)
    // change the value of the password input to a legit pw
    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "asdf")
    // press the login button
    fireEvent.press(getByTestId("SignIn.Button"))
    getByText("Invalid username.") // don't wrap this in expect because getByText will already throw an error if it doesn't find the text
    // assert that Invalid Password will not appear on the screen since we offered it a legit pw
    expect(queryAllByText("Invalid password.").length).toBe(0)
    //
    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "invalid input")
    getByText("Invalid username.")
    // assert that Invalid Password will not appear on the screen since we offered it a legit pw
    expect(queryAllByText("Invalid password.").length).toBe(0)
  })

  // if password invalid show error message
  it("if password invalid show error message", () => {
    const { getByTestId, getByText } = render(<SignIn />)

    // change the value of the password input
    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "xxxx")
    // press the login button
    fireEvent.press(getByTestId("SignIn.Button"))
    expect(getByText("Invalid password.")).toBeTruthy()
  })

  // shows button with text "Login"
  // it("shows button with text 'Login'", () => {
  //   const { getByRole } = render(<SignIn />)
  //   expect(getByRole("Button").length).toBe(1)
  // })

  it("renders one Login text with color #ba1133", () => {
    const { getByTestId } = render(<SignIn />)
    expect(getByTestId("toplogin").props.style.color).toBe("#ba1133")
  })

  it("doesn't render invalid username error message if username is valid", () => {
    const { getByTestId, queryByText } = render(<SignIn />)
    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "example")
    fireEvent.press(getByTestId("SignIn.Button")) // @ fireEvent from core library to press the button
    expect(queryByText(/Invalid username./i)).toBeNull()
  })

  it("doesn't render invalid password error message if password is valid", () => {
    const { getByTestId, queryByText } = render(<SignIn />)
    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "asdf")
    fireEvent.press(getByTestId("SignIn.Button")) // @ fireEvent from core library to press the button
    expect(queryByText(/Invalid password./i)).toBeNull()
  })

  it("it handles valid input submission", () => {
    fetch.mockResponseOnce(JSON.stringify({passes: true}))
    const { getByTestId, getAllByText, getByText } = render(<SignIn />)
    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "example")
    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "asdf")
    fireEvent.press(getByTestId("SignIn.Button"))
    // getByText("Success!")

    // expect(getAllByText(/login/i)).length(2)
  })
})

// This removes the warning that appears when running tests - warning can be safely ignored
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")
