export type DrumPad = {
  name: string
  description: string
  audio: string
}

const BUTTONS: DrumPad[] = [
  {
    name: "Q",
    description: "Heater 1",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    name: "W",
    description: "Heater 2",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    name: "E",
    description: "Heater 3",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    name: "A",
    description: "Heater 4",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    name: "S",
    description: "Clap",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    name: "D",
    description: "Open HH",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    name: "Z",
    description: "Kick n' Hat",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    name: "X",
    description: "Kick",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    name: "C",
    description: "Closed HH",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
]

export { BUTTONS }
