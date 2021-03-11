import React, {useCallback, useEffect, useRef, useState} from 'react'
import {AnswerEntity, AnswerOptionEntity} from 'types/type'
import {DebounceInput} from 'react-debounce-input'

interface IQuestionChoice {
  index: number
  id: string
  keyAnswer: string
  answer?: AnswerEntity
  onChange: (data: AnswerOptionEntity) => void
  onCorrect: (key: string) => void
}

const QuestionChoice: React.FC<IQuestionChoice> = (props) => {
  const {id, keyAnswer, index, answer} = props
  const [descriptionValue, setDescriptionValue] = useState('')
  const [scoreValue, setScoreValue] = useState(2)

  const [theAnswer, setTheAnswer] = useState<AnswerOptionEntity>({
    index: index,
    value: keyAnswer,
    score: 0,
    description: '',
  })

  const firstRun = useRef(true)

  useEffect(() => {
    props.onChange(theAnswer)
  }, [theAnswer])

  useEffect(() => {
    if (!answer) return

    setScoreValue(answer.score)
    setDescriptionValue(answer.description)
  }, [answer])

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    let _answer = Object.assign({}, theAnswer)
    _answer.description = descriptionValue
    _answer.score = scoreValue
    setTheAnswer(_answer)
  }, [descriptionValue, scoreValue])

  const onCorrect = useCallback(() => {
    props.onCorrect(keyAnswer)
  }, [keyAnswer])

  const onDescriptionChange = useCallback((event: any) => {
    setDescriptionValue(event.target.value)
  }, [])

  const onScoreChange = useCallback((event: any) => {
    setScoreValue(event.target.value)
  }, [])

  return (
    <div className="w-full pt-1 pb-1 center items-baseline">
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="flex flex-row items-center">
            <input
              type="radio"
              name={`answer-${id}`}
              onClick={onCorrect}
              value={keyAnswer}
            />
            <span className="uppercase font-bold pl-1">{keyAnswer}.</span>
            {answer && answer.is_correct === 1 && (
              <span className="inline-block text-xs bg-green-700 text-white px-3 rounded-sm">
                Jawaban yang benar
              </span>
            )}
          </div>
          <DebounceInput
            minLength={1}
            element="textarea"
            className="w-full"
            value={descriptionValue}
            debounceTimeout={1000}
            placeholder="Tulis jawaban disini"
            onChange={onDescriptionChange}
          />
        </div>
        <div className=" w-24 h-25 pl-5">
          <span className="font-bold">Nilai</span>

          <DebounceInput
            minLength={1}
            element="input"
            className="w-full pb-8"
            type="number"
            value={scoreValue}
            debounceTimeout={1000}
            placeholder="Score"
            onChange={onScoreChange}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(QuestionChoice)
