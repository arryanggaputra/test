import Button from 'components/Button'
import Layout from 'components/Layout'
import React, {useCallback, useState} from 'react'
import MDEditor from '@uiw/react-md-editor'
import {Inertia} from '@inertiajs/inertia'
import {CategoriesEntity, DefaultProps} from 'types/type'

interface ICategories {
  categories?: CategoriesEntity[] | null
}

const Categories: React.FC<ICategories & DefaultProps> = props => {
  const [descriptionValue, setDescriptionValue] = useState('')
  const [title, setTitle] = useState('')

  const resetState = useCallback(() => {
    setDescriptionValue('')
    setTitle('')
  }, [])

  const handleSubmit = useCallback(() => {
    Inertia.post('/admin/categories', {
      title,
      description: descriptionValue,
    })

    resetState()
  }, [title, descriptionValue])

  const onDelete = useCallback((id: number) => {
    Inertia.delete('/admin/categories/' + id)
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
            placeholder="Masukan Judul Kategori"
          />
        </label>
        <label className="block mt-5">
          <span className="text-gray-700 font-bold">Deskripsi</span>
          <MDEditor
            preview="live"
            value={descriptionValue}
            onChange={value => setDescriptionValue(value || '')}
          />
        </label>
        <Button onClick={handleSubmit}>Simpan Kategori</Button>
      </div>

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
                        Description
                      </th>
                      <th scope="col" className="relative px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.categories?.map(item => {
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
                              {item.description}
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
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
    </Layout>
  )
}

export default Categories
