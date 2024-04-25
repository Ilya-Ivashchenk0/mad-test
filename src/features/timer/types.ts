import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface timerProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  startTime: Date | null
}