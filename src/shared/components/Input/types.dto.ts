import { InputHTMLAttributes } from 'react'

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: () => void
}
