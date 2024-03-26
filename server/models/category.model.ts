import Elysia, { UnwrapSchema, t } from 'elysia'

const createCategory = t.Object({
  name: t.String({ minLength: 4, error: 'Name must be at least 4 characters' }),
  image: t.File({ error: 'Image is required' }),
})
export type CreateCategory = UnwrapSchema<typeof createCategory>

const CategoryModel = new Elysia({ name: 'Model.Category' }).model({ createCategory })

export default CategoryModel
