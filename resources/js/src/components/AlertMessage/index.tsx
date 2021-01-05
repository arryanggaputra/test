import {usePage} from '@inertiajs/inertia-react'
import React from 'react'

const AlertMessage = () => {
  const {flash} = usePage().props

  return (
    <>
      {flash.message && (
        <div className="bg-red-500 p-5 rounded-md text-white mb-5">
          {flash.message}
        </div>
      )}
    </>
  )
}

export default AlertMessage
