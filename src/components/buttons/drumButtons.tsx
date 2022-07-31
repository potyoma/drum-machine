import { Box, Grid } from "@chakra-ui/react"
import { BUTTONS, DrumPad } from "../../constants"
import { DrumButton } from "./drumButton"

type Props = {
  mute: boolean
  onSelectButton: (button: DrumPad) => void
}

const DrumButtons: React.FC<Props> = ({ mute, onSelectButton }) => {
  return (
    <Box padding={5}>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {BUTTONS?.map((b) => (
          <DrumButton
            mute={mute}
            key={b.name}
            onClick={onSelectButton}
            button={b}
          />
        ))}
      </Grid>
    </Box>
  )
}

export { DrumButtons }
