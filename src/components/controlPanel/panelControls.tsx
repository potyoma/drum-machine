import { Link, VStack } from "@chakra-ui/react"
import { DrumPad } from "../../constants"
import { ButtonDisplay } from "./buttonDisplay"
import { PowerSwitch } from "./powerSwitch"

type Props = {
  onMute: () => void
  button: DrumPad | undefined
  mute: boolean
}

const PanelControls: React.FC<Props> = ({ mute, onMute, button }) => {
  return (
    <VStack align="center" spacing={5} m="auto">
      <Link
        href="https://github.com/potyoma/drum-machine"
        target="_blank"
        textDecor="none"
        color="white"
        as="b"
      >
        @potyoma
      </Link>
      <PowerSwitch mute={mute} onClick={onMute} />
      <ButtonDisplay button={button} />
    </VStack>
  )
}

export { PanelControls }
