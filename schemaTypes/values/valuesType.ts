import {defineField, defineType} from 'sanity'
import valueType from './valueType'

export default defineType({
  name: 'values',
  title: 'Valores',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Lista de valores',
      type: 'array',
      of: [{type: 'object', fields: valueType.fields}],
    }),
  ],
})
