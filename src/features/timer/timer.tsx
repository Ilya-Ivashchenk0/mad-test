import cn from 'classnames'
import classes from './styles.module.scss'
import { useEffect, useState } from 'react'
import { timerProps } from './types'

export const Timer: React.FC<timerProps> = ({ className, startTime }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  const calculateRemainingTime = (startTime: Date | null, currentTime: Date): string => {
    if (!startTime) return '00:00'
    const elapsedTime = currentTime.getTime() - startTime.getTime()
    const remainingTime = Math.max(0, 15 * 60 - Math.floor(elapsedTime / 1000))
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={cn(className, classes.timer)}>
      {calculateRemainingTime(startTime, currentTime)}
    </div>
  )
}