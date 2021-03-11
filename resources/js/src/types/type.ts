export interface DefaultProps {
  errors: Errors
  admin: Admin
  flash: FlashMessage
}

export interface Option {
  value: number
  label: any
}

export interface Errors {}

export interface FlashMessage {
  message?: null
}

export interface Admin {
  id: number
  name: string
  email: string
  is_super: number
  created_at: string
  updated_at: string
}

export interface CategoriesEntity {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}

export interface ExamsEntity {
  id: number
  title: string
  description: string
  category_id: number
  created_at: string
  updated_at: string
  category?: CategoriesEntity
}

export interface PaginateData<DateItem> {
  current_page: number
  data?: DateItem[] | null
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links?: LinksEntity[] | null
  next_page_url: string
  path: string
  per_page: number
  prev_page_url?: null
  to: number
  total: number
}

export interface LinksEntity {
  url?: string | null
  label: string | number
  active: boolean
}

export interface QuestionChoiceEntity {
  description?: string
  value: string
  index: number
}

export interface QuestionsEntity {
  id: number
  description: string
  discussion?: string
  category_id: number
  exam_id: number
  created_at: string
  updated_at: string
  answer?: AnswerEntity[] | null
  category?: CategoriesEntity | null
}

export enum IsAnswerCorrect {
  No = 0,
  Yes = 1,
}

export interface AnswerEntity {
  id: number
  value: string
  description: string
  question_id: number
  is_correct: IsAnswerCorrect
  created_at?: null
  updated_at?: null
  category?: QuestionsEntity | null
}
