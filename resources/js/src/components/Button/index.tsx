import React from 'react'

interface IButton {
  children: React.ReactElement
}

const Button: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  return (
    <button
      {...props}
      className="px-5 py-2 bg-green-400 mt-3 text-white"></button>
  )
}

export default Button
