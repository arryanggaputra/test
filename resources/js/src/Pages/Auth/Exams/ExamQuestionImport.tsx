import Layout from '@components/Layout'
import React, {useCallback, useEffect, useState} from 'react'
import {
  CategoriesEntity,
  ExamsEntity,
  Option,
  QuestionsEntity,
} from 'types/type'
import Select from 'react-select'
import debounce from 'debounce'
import Axios from 'axios'
import Button from '@components/Button'
import {Inertia} from '@inertiajs/inertia'

interface IExamQuestionImport {
  exam?: ExamsEntity
  categories?: CategoriesEntity[] | null
  questions?: Array<QuestionsEntity>
}

const ExamQuestionImport: React.FC<IExamQuestionImport> = (props) => {
  const {exam, categories, questions} = props

  const [listQuestions, setListQuestions] = useState<Option[]>([])
  const [selectedQuestions, setSelectedQuestions] = useState<Option[]>([])

  const [selectedCategory, setSelectedCategory] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const searchQuestion = useCallback(async (categoryId, query) => {
    let doRequest = await Axios.get(`${window.location.pathname}`, {
      params: {
        ...(categoryId > 0 && {categoryId}),
        ...(query.length > 2 && {query}),
      },
    })

    transformQuestionsToOptions(doRequest.data)
  }, [])

  useEffect(() => {
    if (selectedCategory < 1 && !searchQuery) {
      return
    }
    searchQuestion(selectedCategory, searchQuery)
  }, [selectedCategory, searchQuery])

  const onInputChange = useCallback(
    debounce((query: string) => {
      setSearchQuery(query)
    }, 1000),
    [],
  )

  const transformQuestionsToOptions = useCallback(
    (questions: QuestionsEntity[]) => {
      let lists: Array<Option> = questions.map((item) => {
        return {
          value: item.id,
          label: item.description,
        }
      })
      setListQuestions(lists)
    },
    [],
  )

  const onChooseQuestion = useCallback(
    (data: Option) => {
      let isExist = selectedQuestions.find((item) => item.value === data.value)
      if (isExist) return

      let lists = [...selectedQuestions]
      lists.push(data)

      setSelectedQuestions(lists)
    },
    [selectedQuestions],
  )

  const onDeleteSelectedQuestion = useCallback(
    (value: number) => {
      let lists = [...selectedQuestions].filter((item) => item.value !== value)

      setSelectedQuestions(lists)
    },
    [selectedQuestions],
  )

  const onSaveSelectedQuestions = useCallback(() => {
    Inertia.post(window.location.pathname, {
      selectedQuestions: selectedQuestions.map((item) => item.value),
    })
  }, [selectedQuestions])

  useEffect(() => {
    if (!questions) return
    transformQuestionsToOptions(questions)
  }, [questions])

  return (
    <Layout isSinglePage>
      <div className="rounded-md shadow-md cursor-pointer flex flex-col p-3 bg-gray-50 border border-gray-200">
        <span className="font-bold text-2xl">Atur Soal</span>
        <span>Ujian: {exam?.title}</span>
        <span>
          Kategori: <span className="font-bold">{exam?.category?.title}</span>
        </span>
      </div>
      <div className="mt-5"></div>
      <h1 className="font-bold text-2xl">Import Pertanyaan</h1>
      <div className="w-full ">
        <div className="flex flex-row pt-5">
          <div className="w-1/4">
            <label className="">
              <span className="text-gray-700 font-bold block">
                Pilih Kategori
              </span>

              <select
                className="w-full"
                onChange={(event) =>
                  setSelectedCategory(parseInt(event.target.value))
                }>
                <option value="">Pilih Kategori</option>
                {categories?.map((cat) => (
                  <option
                    selected={selectedCategory === cat.id}
                    key={cat.id}
                    value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="w-3/4 pl-5">
            <span className="text-gray-700 font-bold block">
              Pilih / Cari Soal
            </span>
            <Select
              options={listQuestions}
              noOptionsMessage={() => 'Pilihan tidak tersedia'}
              defaultOptions
              placeholder="Pilih Soal"
              value={null}
              onChange={onChooseQuestion}
              onInputChange={onInputChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <table
          className={`table table-hover mt-5 ${
            selectedQuestions && selectedQuestions.length < 1 ? ' hidden ' : ''
          }`}>
          <thead>
            <tr>
              <th style={{width: '10%'}}>No</th>
              <th>Soal</th>
              <th style={{width: '12%'}}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {selectedQuestions?.map((question, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <h1 className="text-xl font-weight-bold">
                      {question.label}
                    </h1>
                  </td>
                  <td>
                    <span
                      onClick={() => onDeleteSelectedQuestion(question.value)}
                      className="cursor-pointer inline-block ml-2 text-red-600 hover:text-red-900">
                      Hapus
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {selectedQuestions.length > 0 && (
          <div className="w-full flex items-center justify-center">
            <div className="w-2/4">
              <Button
                onClick={onSaveSelectedQuestions}
                className="w-full bg-green-400 text-white">
                SIMPAN
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ExamQuestionImport
