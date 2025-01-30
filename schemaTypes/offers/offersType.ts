import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offers',
  title: 'Ofertas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
