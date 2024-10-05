import {defineField, defineType} from 'sanity'
import experienceType from './experienceType'

export default defineType({
  name: 'experiences',
  title: 'Experiencias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experiences',
      title: 'Lista de experiencias',
      type: 'array',
      of: [{type: 'object', fields: experienceType.fields}],
    }),
  ],
})
