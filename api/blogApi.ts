import axios from 'axios'

class BlogApi {
  constructor() {
    axios.defaults.baseURL = process.env.NODE_ENV == 'production' ? 'http://daydayup-api' : 'http://localhost:5015'
  }
  async GetPostsAsync(page: number) {
    return await axios.get(`/api/posts?page=${page}&limit=10`)
  }
  async GetPostsByTagAsync(slug: string, page: number) {
    return await axios.get(`/api/posts?tagSlug=${slug}&page=${page}&limit=10`)
  }

  async GetPostsByCategoryAsync(slug: string, page: number) {
    return await axios.get(`/api/posts?categorySlug=${slug}&page=${page}&limit=10`)
  }

  async GetAllTagAsync() {
    return await axios.get(`api/tags`)
  }

  async GetAllCategories() {
    return await axios.get(`api/categories`)
  }

  async GetPostAsync(slug: string) {
    return await axios.get(`/api/posts/${slug}`)
  }
  async GetTagAsync(slug: string) {
    return await axios.get(`/api/tags/${slug}`)
  }
  async GetCategoryAsync(slug: string) {
    return await axios.get(`/api/categories/${slug}`)
  }
}

export default new BlogApi()
