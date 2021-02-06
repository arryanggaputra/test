import Layout from 'components/Layout'
import React from 'react'
import {ExamsEntity} from 'types/type'
import QuestionForm from './components/QuestionForm'

interface IExamQuestionAdd {
  exam?: ExamsEntity
}

const ExamQuestionAdd: React.FC<IExamQuestionAdd> = props => {
  const {exam} = props

  return (
    <Layout isSinglePage>
      <div className="rounded-md shadow-md cursor-pointer flex flex-col p-3 bg-gray-50 border border-gray-200">
        <span className="font-bold text-2xl">Atur Soal</span>
        <span>Ujian: {exam?.title}</span>
        <span>
          Kategori: <span className="font-bold">{exam?.category?.title}</span>
        </span>
      </div>
      <div className="mt-5">
        <QuestionForm exam={exam} />
      </div>
    </Layout>
  )
}

export default ExamQuestionAdd
