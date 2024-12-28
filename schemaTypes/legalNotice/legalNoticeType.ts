import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'legalNotice',
  title: 'Aviso legal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().error('El título es obligatorio'),
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('El contenido es obligatorio'),
    }),
  ],
})
