import React from 'react'

interface IButton {
  children: React.ReactElement
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const {className, style, ...rest} = props
  return (
    <button
      {...rest}
      className={`px-5 py-2  mt-3 rounded-md ${
        className ? className : ' text-white bg-green-400 '
      }`}
      style={style}></button>
  )
}

export default Button
