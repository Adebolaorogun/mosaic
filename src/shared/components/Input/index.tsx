import { iInput } from './types.dto'

export const Input = ({ type }: iInput) => {
  return (
    <input
      type={type || 'text'}
      className="text-center text-blue-900 font-[700] w-full outline-blue-600 border-[1px] border-gray-100 shadow-sm rounded-[.5rem] py-[1.2rem]"
    />
  )
}

export const InputWithIcon = ({ type }: iInput) => {
  return (
    <div className="w-full lg:w-[50%] flex items-center border-[1px] border-gray-100 shadow-sm rounded-[.5rem] py-[1.2rem]">
      <input
        type={type || 'text'}
        className="text-blue-900 font-[700] w-[90%] outline-none px-[.4rem] placeholder:text-center"
      />

      {/* dots */}
      <div className="w-[1.5rem] flex flex-wrap gap-[.1rem]">
        {[...Array(9)].map((item, key) => (
          <div
            key={key}
            className="w-[.4rem] h-[.4rem] rounded-[2px] bg-gray-600"
          />
        ))}
      </div>
    </div>
  )
}
