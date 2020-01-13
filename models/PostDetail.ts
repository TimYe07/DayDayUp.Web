import PostInCategory from './PostInCategory'
import PostInTag from './PostInTag'
import TocItem from './TocItem'

export default interface PostDetail {
  title: string
  category: PostInCategory
  tags: PostInTag[]
  description: string
  toc: TocItem[]
  content: string
  slug: string
  viewCount: number
  createOn: string
  publishOn: string
  updateOn: string
}