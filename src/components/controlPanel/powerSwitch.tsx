import clsx from "clsx"

type Props = {
  onClick: () => void
  mute: boolean
}

const PowerSwitch: React.FC<Props> = ({ mute, onClick }) => {
  return (
    <div>
      <label className="flex items-center relative w-max cursor-pointer select-none">
        <span className="text-lg text-white font-bold mr-3">Power:</span>
        <input
          checked={!mute}
          onChange={onClick}
          type="checkbox"
          className="appearance-none transition-colors cursor-pointer w-6 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500 checked:bg-green-500"
        />
      </label>
    </div>
  )
}

export { PowerSwitch }
