import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experiencia',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Posición',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
