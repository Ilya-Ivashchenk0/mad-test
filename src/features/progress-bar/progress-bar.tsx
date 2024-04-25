import cn from 'classnames'
import classes from './styles.module.scss'
import { progressBarProps } from './types'

export const ProgressBar: React.FC<progressBarProps> = ({ step, questions }) => {
  return (
    <div className={cn(classes.progressBar)}>
      {questions && questions.map((question) => (
        <div className={cn(classes.progressBarItem, {
          [classes.active]: question.id === step
        }, {
          [classes.past]: question.id < step
        })} key={question.id}></div>
      ))}
    </div>
  )
}