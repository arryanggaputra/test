import alphabet from 'lib/alphabet'
import makeid from 'lib/makeId'
import React, {useCallback, useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all.css'
import {QuestionChoiceEntity} from 'types/type'
import QuestionChoice from './QuestionChoice'

const QuestionForm = () => {
  const [descriptionValue, setDescriptionValue] = useState('')
  const [id, setId] = useState(makeid())
  const [totalAnswer, setTotalAnswer] = useState(3)
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')
  const [listAnswers, setListAnswers] = useState(
    new Set<QuestionChoiceEntity>(),
  )

  const addAnswer = useCallback(
    (data: QuestionChoiceEntity) => {
      listAnswers.forEach(item => {
        if (item.key === data.key) {
          listAnswers.delete(item)
        }
      })

      listAnswers.add(data)
      const _listAnswers = new Set(listAnswers)
      setListAnswers(_listAnswers)
    },
    [listAnswers],
  )

  useEffect(() => {
    console.log(listAnswers)
  }, [listAnswers])

  const renderAnswerField = useCallback(() => {
    let answerField = []
    for (let index = 0; index <= totalAnswer; index++) {
      let keyAnswer = alphabet[index]
      answerField.push(
        <QuestionChoice
          onChange={addAnswer}
          index={index}
          id={id}
          keyAnswer={keyAnswer}
          key={keyAnswer}
        />,
      )
    }
    return answerField
  }, [totalAnswer])

  const addMoreAnswerField = useCallback(() => {
    setTotalAnswer(totalAnswer + 1)
  }, [totalAnswer])

  const reduceAnswerField = useCallback(() => {
    setTotalAnswer(totalAnswer > 0 ? totalAnswer - 1 : 0)
    listAnswers.forEach(item => {
      if (item.index === totalAnswer) {
        listAnswers.delete(item)
      }
    })
    const _listAnswers = new Set(listAnswers)
    setListAnswers(_listAnswers)
  }, [totalAnswer, listAnswers])

  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl">Pertanyaan</h1>
      <pre>{JSON.stringify(Array.from(listAnswers.values()))}</pre>
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
      <div className="flex flex-col">{renderAnswerField()}</div>
      <span
        className="bg-gray-200 p-2 rounded-md cursor-pointer text-xs mr-2"
        onClick={reduceAnswerField}>
        - Kurangi Kolom Jawaban
      </span>
      <span
        className=" bg-gray-700 p-2 rounded-md cursor-pointer text-white text-xs"
        onClick={addMoreAnswerField}>
        + Tambah Kolom Jawaban
      </span>
    </div>
  )
}

export default QuestionForm
