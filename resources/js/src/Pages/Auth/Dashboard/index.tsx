import React from 'react'
import Layout from 'components/Layout'
import Button from 'components/Button'

function Dashboard() {
  return (
    <Layout isSinglePage>
      <div className="p-5 rounded-md border border-gray-300 bg-gray-100 shadow-sm">
        <label className="block">
          <span className="text-gray-700 font-bold">Tambah Ujian Baru</span>
          <input
            type="email"
            onChange={() => {}}
            required
            className="mt-1 block w-full p-5 text-2xl"
            placeholder="Masukan Judul Ujian"
          />
        </label>
        <Button>Tambahkan Ujian Baru</Button>
      </div>
    </Layout>
  )
}

export default Dashboard
