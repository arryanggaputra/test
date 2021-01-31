import {Inertia} from '@inertiajs/inertia'
import Button from 'components/Button'
import alphabet from 'lib/alphabet'
import makeid from 'lib/makeId'
import React, {useCallback, useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all.css'
import {ExamsEntity, QuestionChoiceEntity} from 'types/type'
import QuestionChoice from './QuestionChoice'

interface IQuestionForm {
  exam?: ExamsEntity
}

const QuestionForm: React.FC<IQuestionForm> = props => {
  const [descriptionValue, setDescriptionValue] = useState('')
  const [id, setId] = useState(makeid())
  const [totalAnswer, setTotalAnswer] = useState(3)
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(
    undefined,
  )
  const [listAnswers, setListAnswers] = useState(
    new Set<QuestionChoiceEntity>(),
  )

  const addAnswer = useCallback(
    (data: QuestionChoiceEntity) => {
      listAnswers.forEach(item => {
        if (item.value === data.value) {
          listAnswers.delete(item)
        }
      })

      listAnswers.add(data)
      const _listAnswers = new Set(listAnswers)
      setListAnswers(_listAnswers)
    },
    [listAnswers],
  )

  const onSelectCorrectAnswer = (key: string) => {
    setSelectedAnswer(key)
  }

  const handleSubmit = useCallback(() => {
    if (!descriptionValue) {
      alert('Harap isi kolom pertanyaan')
      return
    }

    let answerNotValid = Array.from(listAnswers.values()).find(item => {
      if (!item.description) {
        return item
      }
    })
    if (answerNotValid) {
      alert('Harap lengkapi jawan di kunci ' + answerNotValid.value)
      return
    }
    if (!selectedAnswer) {
      alert('Harap pilih jawaban yang benar ')
      return
    }

    let questionToSave = {
      question: descriptionValue,
      answers: Array.from(listAnswers.values()),
      selectedAnswer,
    }

    Inertia.post(`/admin/exams/${props.exam?.id}/questions`, questionToSave)
  }, [descriptionValue, listAnswers, selectedAnswer])

  const renderAnswerField = useCallback(() => {
    let answerField = []
    for (let index = 0; index <= totalAnswer; index++) {
      let keyAnswer = alphabet[index]
      answerField.push(
        <QuestionChoice
          onChange={addAnswer}
          onCorrect={onSelectCorrectAnswer}
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
      <div className="rounded-md p-5 w-full mt-2 bg-gray-100">
        <div className=" flex flex-row justify-end">
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
        <div className="flex flex-col">{renderAnswerField()}</div>
      </div>

      <div>
        <Button onClick={handleSubmit}>Simpan Pertanyaan</Button>
      </div>
    </div>
  )
}

export default React.memo(QuestionForm)
