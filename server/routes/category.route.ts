import Elysia from 'elysia'

import CategoryModel from '@/server/models/category.model'
import CategoryService from '../services/category.service'

export const categoryRoute = new Elysia({ name: 'Route.Category', prefix: '/category' })
  .use(CategoryModel)
  .decorate({ categoryService: new CategoryService() })
  .get('/', ({ categoryService }) => categoryService.getCategories(), {
    detail: { tags: ['category'], summary: 'Get all categories' },
  })
  .post('/', ({ categoryService, body }) => categoryService.createCategory(body), {
    body: 'createCategory',
    detail: { tags: ['category'], summary: 'Create a category' },
  })
