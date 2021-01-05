export interface Admin {
  id: number
  name: string
  email: string
  is_super: number
  created_at: string
  updated_at: string
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