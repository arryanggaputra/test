import React from 'react'
import Layout from 'components/Layout'

interface IDashboard {
  categoryTotal: number
  examTotal: number
}

const Dashboard: React.FC<IDashboard> = props => {
  return (
    <Layout isSinglePage>
      <div className="grid grid-cols-3 gap-5">
        <div className="rounded-md cursor-pointer p-3 bg-gray-50 border border-gray-200">
          <span className="font-bold text-2xl block">Kategori</span>
          <span>Total: {props.categoryTotal}</span>
        </div>
        <div className="rounded-md cursor-pointer p-3 bg-gray-50 border border-gray-200">
          <span className="font-bold text-2xl block">Ujian</span>
          <span>Total: {props.examTotal}</span>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
