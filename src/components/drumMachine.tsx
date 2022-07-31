import { Container, SimpleGrid } from "@chakra-ui/react"
import { useState } from "react"
import { DrumPad } from "../constants"
import { DrumButtons } from "./buttons/drumButtons"
import { PanelControls } from "./controlPanel/panelControls"

const DrumMachine: React.FC = () => {
  const [button, setButton] = useState<DrumPad>()
  const [mute, setMute] = useState<boolean>(false)

  const handleMute = () => setMute(!mute)

  const handleSelectButton = (button: DrumPad) => {
    console.log(button)
    setButton(button)
  }

  return (
    <Container
      id="drum-machine"
      bg="cornflowerblue"
      maxW="lg"
      borderWidth="thick"
      borderColor="burlywood"
      borderRadius="md"
    >
      <SimpleGrid columns={2}>
        <DrumButtons mute={mute} onSelectButton={handleSelectButton} />
        <PanelControls mute={mute} onMute={handleMute} button={button} />
      </SimpleGrid>
    </Container>
  )
}

export { DrumMachine }
