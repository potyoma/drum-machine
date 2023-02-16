import React, { useEffect, useState } from "react"
import { DrumPad } from "../../constants"

type Props = {
  button: DrumPad
  mute: boolean
  onClick: (button: DrumPad) => void
}

const DrumButton: React.FC<Props> = ({ mute, button, onClick }) => {
  const playAudio = (button: DrumPad) => {
    const audio = document.getElementById(button.name) as HTMLAudioElement
    audio.currentTime = 0
    audio.play()
  }

  const handleClick = (button: DrumPad) => {
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
    <div className="h-16 w-16">
      <audio
        autoPlay={false}
        id={button.name}
        src={button.audio}
        className="clip"
        hidden
      />
      <button
        id={button.description.replaceAll(/\s/g, "-")}
        onClick={() => handleClick(button)}
        className="bg-yellow-500 hover:bg-rose-500 rounded-md text-white w-full h-full focus:bg-rose-500 text-"
      >
        <span>{button.name}</span>
      </button>
    </div>
  )
}

export { DrumButton }
