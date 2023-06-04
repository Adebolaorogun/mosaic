import { iButton } from './types.dto'

export const Button = ({ children }: iButton) => {
  return (
    <button className="w-full bg-blue-600 font-[700] text-white py-[1.2rem] rounded-[.5rem]">
      {children}
    </button>
  )
}
