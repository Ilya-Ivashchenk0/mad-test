import cn from 'classnames'
import classes from './styles.module.scss'
import { inputProps } from "./types"

export const Checkbox: React.FC<inputProps> = ({
  className,
  name,
  label,
  type = 'text',
  required,
  ...otherProps
}) => {
  return (
    <label className={cn(className, classes.inputLabel)}>
      <input name={name} type={type} />
      <span>{label}</span>
    </label>
  )
}