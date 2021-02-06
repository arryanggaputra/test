import Layout from 'components/Layout'
import React from 'react'
import {ExamsEntity, QuestonsEntity} from 'types/type'
import QuestionForm from './components/QuestionForm'

interface IExamQuestionAdd {
  exam?: ExamsEntity
  question?: QuestonsEntity
  isEdit?: boolean
}

const ExamQuestionAdd: React.FC<IExamQuestionAdd> = props => {
  const {exam, isEdit, question} = props

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
        <QuestionForm isEdit={isEdit} question={question} exam={exam} />
      </div>
    </Layout>
  )
}

export default ExamQuestionAdd
