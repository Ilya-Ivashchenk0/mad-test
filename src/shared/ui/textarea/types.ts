import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface inputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  name: string
  label: string
  type?: string
}