import { Box, Center, ChakraProvider } from "@chakra-ui/react"
import "./App.css"
import { DrumMachine } from "./components/drumMachine"

const App = () => {
  return (
    <ChakraProvider>
      <Center h="93.5vh">
        <DrumMachine />
      </Center>
    </ChakraProvider>
  )
}

export default App
