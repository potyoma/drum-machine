import { Box, Text } from "@chakra-ui/react"
import { DrumPad } from "../../constants"

type Props = {
  button: DrumPad | undefined
}

const ButtonDisplay: React.FC<Props> = ({ button }) => {
  return (
    <Box
      width="18vh"
      maxH="3vh"
      bg="coral"
      border={1}
      borderRadius={5}
      id="display"
    >
      <Text color="white" as="b" align="center">
        {button?.description || "Make some noise!"}
      </Text>
    </Box>
  )
}

export { ButtonDisplay }
