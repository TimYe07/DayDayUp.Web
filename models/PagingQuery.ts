export default interface PagingQuery<T> {
  total: number
  totalPage: number
  page: number
  limit: number
  timestamp: string
  values: T[]
}
