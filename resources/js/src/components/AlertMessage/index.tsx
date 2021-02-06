import {usePage} from '@inertiajs/inertia-react'
import React from 'react'

interface IAlertMessage {
  message?: string
}
const AlertMessage: React.FC<IAlertMessage> = props => {
  const {flash} = usePage().props

  if (!flash.message && !props.message) {
    return null
  }

  return (
    <>
      <div className="bg-red-500 p-5 rounded-md text-white mb-5">
        {flash.message && flash.message}
        {props.message && props.message}
      </div>
    </>
  )
}

export default AlertMessage
