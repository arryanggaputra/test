import {Inertia} from '@inertiajs/inertia'
import AlertMessage from '@components/AlertMessage'
import Button from '@components/Button'
import Layout from '@components/Layout'
import React, {useCallback, useState} from 'react'

function Login() {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      try {
        Inertia.post('/admin/login', {
          email: emailAddress,
          password: password,
        })
      } catch (error) {
        console.log(error)
      }
    },
    [emailAddress, password],
  )

  return (
    <Layout isSinglePage>
      <div className="w-2/6">
        <AlertMessage />
        <form method="POST" onSubmit={onSubmit}>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              onChange={(e) => setEmailAddress(e.target.value)}
              required
              className="mt-1 block w-full"
              placeholder="Masukan Alamat E-mail"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full"
              placeholder="Masukan password"
            />
          </label>
          <Button>Wakanda</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
