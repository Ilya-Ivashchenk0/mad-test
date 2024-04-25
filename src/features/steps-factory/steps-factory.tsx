import cn from 'classnames'
import classes from './styles.module.scss'
import { stepsFactoryProps } from './types'
import { ProgressBar } from '../progress-bar'
import { Timer } from '../timer'

export const StepsFactory: React.FC<stepsFactoryProps> = ({
  className,
  startTime,
  step,
  setStep,
  questions
}) => {
  return (
    <div className={cn(className, classes.stepsFactory)}>
      <div className={cn(className, classes.infoWrapper)}>
        <h1 className={cn(className, classes.heading)}>
          Тестирование
        </h1>
        <Timer className='timer' startTime={startTime} />
      </div>
      <ProgressBar step={step} questions={questions} />
      
    </div>
  )
}