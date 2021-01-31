import Button from 'components/Button'
import Layout from 'components/Layout'
import React, {useCallback, useState} from 'react'
import ReactMde from 'react-mde'
import ReactMarkdown from 'react-markdown'
import {Inertia} from '@inertiajs/inertia'
import {ExamsEntity, DefaultProps, CategoriesEntity} from 'types/type'
import 'react-mde/lib/styles/css/react-mde-all.css'
import {InertiaLink} from '@inertiajs/inertia-react'

interface IExam {
  isEdit?: boolean
  exam?: ExamsEntity
  exams?: ExamsEntity[] | null
  categories?: CategoriesEntity[] | null
}

const Exams: React.FC<IExam & DefaultProps> = props => {
  const {isEdit, exam, exams, categories} = props

  const [descriptionValue, setDescriptionValue] = useState(
    isEdit ? exam?.description : '',
  )
  const [title, setTitle] = useState(isEdit ? exam?.title : '')
  const [selectedCategory, setSelectedCategory] = useState(
    isEdit ? exam?.category_id : 0,
  )
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')

  const resetState = useCallback(() => {
    setSelectedCategory(0)
    setDescriptionValue('')
    setTitle('')
  }, [])

  const handleSubmit = useCallback(() => {
    if (!selectedCategory) {
      alert('Pilih kategori')
      return
    }
    if (isEdit) {
      Inertia.put('/admin/exams/' + exam?.id, {
        title,
        category_id: selectedCategory,
        description: descriptionValue,
      })
    } else {
      Inertia.post('/admin/exams', {
        title,
        category_id: selectedCategory,
        description: descriptionValue,
      })
    }

    resetState()
  }, [title, descriptionValue, selectedCategory, isEdit, exam])

  const onDelete = useCallback((id: number) => {
    Inertia.delete('/admin/exams/' + id)
  }, [])

  return (
    <Layout isSinglePage>
      <div className="p-5 rounded-md border border-gray-300 bg-gray-100 shadow-sm">
        <label className="block">
          <input
            type="email"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="w-full"
            placeholder="Masukan Judul Ujian"
          />
        </label>
        <label className="block mt-5">
          <span className="text-gray-700 font-bold block">Kategori Ujian</span>

          <select
            onChange={event =>
              setSelectedCategory(parseInt(event.target.value))
            }>
            <option value="">Pilih Kategori</option>
            {categories?.map(cat => (
              <option
                selected={selectedCategory === cat.id}
                key={cat.id}
                value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block mt-5">
          <span className="text-gray-700 font-bold">Deskripsi</span>

          <ReactMde
            value={descriptionValue}
            onChange={setDescriptionValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(<ReactMarkdown source={markdown} />)
            }
            childProps={{
              writeButton: {
                tabIndex: -1,
              },
            }}
          />
        </label>
        <Button onClick={handleSubmit}>
          {isEdit ? 'Ubah Kategori' : 'Simpan Kategori'}
        </Button>
      </div>

      {!isEdit && (
        <div className="mt-5">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th scope="col" className="relative px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {exams?.map(item => {
                        return (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {item.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.category?.title}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.description}
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <InertiaLink
                                href={`/admin/exams/${item.id}`}
                                className="cursor-pointer inline-block text-indigo-600 hover:text-indigo-900">
                                Edit
                              </InertiaLink>
                              <InertiaLink
                                href={`/admin/exams/${item.id}/questions`}
                                className="cursor-pointer inline-block ml-2 text-yellow-500 hover:text-yellow-700">
                                Soal
                              </InertiaLink>
                              <span
                                onClick={() => onDelete(item.id)}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Exams
