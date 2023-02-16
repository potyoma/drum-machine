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
    <div
      id="drum-machine"
      className="bg-blue-300 rounded-md shadow-md hover:shadow-xl p-4"
    >
      <div className="grid md:grid-cols-2">
        <DrumButtons mute={mute} onSelectButton={handleSelectButton} />
        <PanelControls mute={mute} onMute={handleMute} button={button} />
      </div>
    </div>
  )
}

export { DrumMachine }
