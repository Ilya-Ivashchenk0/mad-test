import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction
} from "react"

export interface questionType {
  id: number,
  questionMode: 'checkbox' | 'input' | 'textarea'
  answerMode: 'once' | 'text' | 'many'
  title: string
  answers?: string[]
}

export interface stepsFactoryProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> {
  startTime: Date | null
  step: number
  setStep: Dispatch<SetStateAction<number>>
  questions: questionType[]
}