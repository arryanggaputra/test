import {usePage} from '@inertiajs/inertia-react'
import {InertiaLink} from '@inertiajs/inertia-react'
import Button from 'components/Button'
import React, {useEffect, useState} from 'react'
import {Admin} from 'types/type'

const Navbar = () => {
  const props = usePage().props
  const [admin, setAdmin] = useState<Admin | null>(null)

  useEffect(() => {
    setAdmin(props.admin)
  }, [props])

  return (
    <div className="bg-green-700 p-5 px-10 shadow-md">
      <div className="container flex flex-row max-w-screen-lg mx-auto justify-between">
        <h1 className="text-xl font-bold text-white">
          <InertiaLink href="/">Admin Ujian</InertiaLink>
        </h1>
        {admin && (
          <div className="flex flex-row">
            <span className="text-white">Hai, {admin?.name}</span>
            <InertiaLink
              className=" inline-block px-4 py-1 text-sm rounded-sm ml-3 bg-red-600 text-white"
              href="/admin/logout">
              Logout
            </InertiaLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
