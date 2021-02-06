import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react'
import Button from 'components/Button'
import Layout from 'components/Layout'
import React, {useCallback} from 'react'
import {ExamsEntity, QuestonsEntity} from 'types/type'

interface IExamQuestion {
  exam?: ExamsEntity
  questons?: Array<QuestonsEntity>
}

const ExamQuestion: React.FC<IExamQuestion> = props => {
  const {exam, questons} = props

  const onDelete = useCallback((id: number) => {
    if (confirm('Anda yakin untuk menghapus data ini?')) {
      Inertia.delete(`/admin/exams/${exam?.id}/questions/${id}`)
      return
    }
  }, [])

  const onCreateNewQuestion = useCallback(() => {
    Inertia.visit(`/admin/exams/${exam?.id}/questions/add`)
  }, [])

  return (
    <Layout isSinglePage>
      <div className="rounded-md shadow-md cursor-pointer flex flex-col p-3 bg-gray-50 border border-gray-200">
        <span className="font-bold text-2xl">Atur Soal</span>
        <span>Ujian: {exam?.title}</span>
        <span>
          Kategori: <span className="font-bold">{exam?.category?.title}</span>
        </span>
      </div>
      <div className="mt-5 mb-10">
        <div className="flex flex-row justify-between align-items-center">
          <span className="font-bold text-2xl">Daftar Soal Ujian</span>
          <Button onClick={onCreateNewQuestion}>Tambah Soal</Button>
        </div>
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th style={{width: '10%'}}>No</th>
              <th>Soal</th>
              <th style={{width: '12%'}}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {questons?.map((question, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <h1 className="text-xl font-weight-bold">
                      {question.description}
                    </h1>
                    <div className="bg-gray-100 p-3 rounded-md">
                      {question.answer?.map(ans => {
                        return (
                          <div
                            className={`flex flex-row p-2 ${
                              ans.is_correct === 1
                                ? ' bg-green-300 rounded-sm'
                                : ''
                            }`}>
                            <div className="pr-3 uppercase">{ans.value}.</div>
                            <div className="flex-1">{ans.description}</div>
                          </div>
                        )
                      })}
                    </div>
                  </td>
                  <td>
                    <InertiaLink
                      href={`/admin/exams/${exam?.id}/questions/${question.id}/edit`}
                      className="cursor-pointer inline-block text-indigo-600 hover:text-indigo-900">
                      Edit
                    </InertiaLink>
                    <span
                      onClick={() => onDelete(question.id)}
                      className="cursor-pointer inline-block ml-2 text-red-600 hover:text-red-900">
                      Hapus
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default ExamQuestion
