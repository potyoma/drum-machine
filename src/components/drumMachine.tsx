import { Container } from "@chakra-ui/react"
import { DrumButtons } from "./buttons/drumButtons"
import { PanelControls } from "./panelControls"

type Props = {}

const DrumMachine: React.FC<Props> = ({}) => {
  return (
    <Container
      bg="cornflowerblue"
      maxW="lg"
      borderWidth="medium"
      borderRadius="lg"
      overflow="hidden"
    >
      <DrumButtons />
      <PanelControls />
    </Container>
  )
}

export { DrumMachine }
