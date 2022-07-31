import {
  Container,
  FormControl,
  FormLabel,
  Switch,
  Text,
} from "@chakra-ui/react"

type Props = {
  onClick: () => void
  mute: boolean
}

const PowerSwitch: React.FC<Props> = ({ mute, onClick }) => {
  return (
    <Container textAlign="center" mx="auto" justifyContent="center">
      <FormControl>
        <FormLabel htmlFor="power-switch">
          <Text as="b" color="white" mr={3}>
            Power:
          </Text>
          <Switch
            id="power-switch"
            colorScheme="red"
            size="lg"
            ml={2}
            isChecked={!mute}
            onChange={() => onClick()}
          />
        </FormLabel>
      </FormControl>
    </Container>
  )
}

export { PowerSwitch }
