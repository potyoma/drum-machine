import { BUTTONS, DrumPad } from "../../constants"
import { DrumButton } from "./drumButton"

type Props = {
  mute: boolean
  onSelectButton: (button: DrumPad) => void
}

const DrumButtons: React.FC<Props> = ({ mute, onSelectButton }) => {
  return (
    <div className="p-3">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {BUTTONS?.map(b => (
          <DrumButton
            mute={mute}
            key={b.name}
            onClick={onSelectButton}
            button={b}
          />
        ))}
      </div>
    </div>
  )
}

export { DrumButtons }
