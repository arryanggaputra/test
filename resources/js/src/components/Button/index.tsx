import React from 'react'

interface IButton {
  children: React.ReactElement
}

const Button: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  const {className, style, ...rest} = props
  return (
    <button
      {...rest}
      className={`px-5 py-2 bg-green-400 mt-3 text-white ${className}`}
      style={style}></button>
  )
}

export default Button
