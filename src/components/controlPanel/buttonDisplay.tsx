import { DrumPad } from "../../constants"

type Props = {
  button: DrumPad | undefined
}

const ButtonDisplay: React.FC<Props> = ({ button }) => {
  return (
    <div
      className="bg-red-300 rounded-lg px-2 py-1 flex items-center justify-center"
      id="display"
    >
      <span className="text-extrabold text-white">
        {button?.description || "Noise!"}
      </span>
    </div>
  )
}

export { ButtonDisplay }
