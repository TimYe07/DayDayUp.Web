import PostInCategory from './PostInCategory'
import PostInTag from './PostInTag'

export default interface Post {
  title: string
  category: PostInCategory
  tags: PostInTag[]
  description: string
  slug: string
  viewCount: number
  createOn: string
  publishOn: string
  updateOn: string
}
