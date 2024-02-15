import { TouchableOpacityProps } from "react-native";

export interface IContainer {
  children: React.ReactNode
}

export interface IButton extends TouchableOpacityProps{
  title: string
  icon?: string
  backgroundColor?: string
  color?: string
  border?: number
  borderColor?: string
  width: number
  height: number
}