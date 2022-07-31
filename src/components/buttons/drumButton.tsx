import { Box, Button, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { DrumPad } from "../../constants"

type Props = {
  button: DrumPad
  mute: boolean
  onClick: (button: DrumPad) => void
}

const DrumButton: React.FC<Props> = ({ mute, button, onClick }) => {
  enum ButtonColor {
    InActive = "burlywood",
    Active = "crimson",
  }

  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    ButtonColor.InActive
  )

  const playAudio = (button: DrumPad) => {
    const audio = document.getElementById(button.name) as HTMLAudioElement
    audio.currentTime = 0
    audio.play()
    setTimeout(() => setButtonColor(ButtonColor.InActive), 100)
  }

  const handleClick = (button: DrumPad) => {
    !mute && setButtonColor(ButtonColor.Active)
    !mute && playAudio(button)
    onClick(button)
  }

  const handleKeyDown = (e: KeyboardEvent) =>
    (e.key === button.name.toUpperCase() ||
      e.key === button.name.toLowerCase()) &&
    handleClick(button)

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <Box
      id={button.description.replaceAll(/\s/g, "-")}
      className="drum-pad"
      onClick={() => handleClick(button)}
      width="6vh"
      height="6vh"
      bg={buttonColor}
      borderRadius={5}
      p={5}
      sx={{
        cursor: "pointer",
      }}
    >
      <audio
        autoPlay={false}
        id={button.name}
        src={button.audio}
        className="clip"
        hidden
      ></audio>
      <Text align="center" as="b" color="white">
        {button.name}
      </Text>
    </Box>
  )
}

export { DrumButton }
