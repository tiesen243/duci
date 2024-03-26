import db from '@/prisma'
import { error } from 'elysia'

import type { CreateCategory } from '@/server/models/category.model'

export default class CategoryService {
  async getCategories() {
    const categories = await db.category.findMany()
    if (!categories) return error('Not Found', { message: 'Categories not found' })
    return categories
  }

  async createCategory(data: CreateCategory) {
    return {
      message: 'Category created',
      file: data.image.name,
      name: data.name,
    }
  }
}
