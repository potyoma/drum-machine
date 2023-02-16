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
    <div className="flex flex-col justify-center items-center gap-2">
      <a href="https://github.com/potyoma/drum-machine" className=" block">
        <h5 className="text-white text-extrabold text-xl">@potyoma</h5>
      </a>
      <PowerSwitch mute={mute} onClick={onMute} />
      <ButtonDisplay button={button} />
    </div>
  )
}

export { PanelControls }
