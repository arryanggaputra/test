import React, {useCallback, useEffect, useRef, useState} from 'react'
import {QuestionChoiceEntity} from 'types/type'
import {DebounceInput} from 'react-debounce-input'

interface IQuestionChoice {
  index: number
  id: string
  keyAnswer: string
  onChange: (data: QuestionChoiceEntity) => void
  onCorrect: (key: string) => void
}

const QuestionChoice: React.FC<IQuestionChoice> = props => {
  const {id, keyAnswer, index} = props
  const [descriptionValue, setDescriptionValue] = useState('')

  const [answer, setAnswer] = useState<QuestionChoiceEntity>({
    index: index,
    value: keyAnswer,
    description: '',
  })

  const firstRun = useRef(true)

  useEffect(() => {
    console.log({answer})
    props.onChange(answer)
  }, [answer])

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    let _answer = Object.assign({}, answer)
    _answer.description = descriptionValue
    setAnswer(_answer)
  }, [descriptionValue])

  const onCorrect = useCallback(() => {
    props.onCorrect(keyAnswer)
  }, [keyAnswer])

  return (
    <div className="w-full pt-1 pb-1 center items-baseline">
      <div className="flex flex-row items-center">
        <input
          type="radio"
          name={`answer-${id}`}
          onClick={onCorrect}
          value={keyAnswer}
        />
        <span className="uppercase font-bold pl-1">{keyAnswer}.</span>
      </div>
      <DebounceInput
        minLength={2}
        element="textarea"
        className="w-full"
        debounceTimeout={1000}
        placeholder="Tulis jawaban disini"
        onChange={event => setDescriptionValue(event.target.value)}
      />
    </div>
  )
}

export default QuestionChoice
