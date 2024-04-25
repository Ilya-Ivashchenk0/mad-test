import cn from 'classnames'
import classes from './styles.module.scss'
import { StepsFactory } from "../features/steps-factory"
import { questions } from '../utils/questions'
import { useEffect, useState } from 'react'
import { setStorageItem, getStorageItem } from '../services/hooks/useLocalStorage'

const App: React.FC = () => {
  const [step, setStep] = useState(questions[0].id)
  const [isStarted, setIsSterted] = useState(false)
  const [startTime, setStertTime] = useState<Date | null>(null)

  const start = () => {
    const time = new Date()
    setStertTime(time)
    setIsSterted(true)
  }

  useEffect(() => {
    
  }, [])

  return (
    <main className={cn(classes.app)}>
      {!isStarted ? (
        <button
          className={cn(classes.appButton)}
          onClick={start}
        >
          Начать
        </button>
      ) : (
        <StepsFactory
          className='stepFactory'
          startTime={startTime}
          step={step}
          setStep={setStep}
          questions={questions}
        />
      )}
    </main>
  )
}

export default App
