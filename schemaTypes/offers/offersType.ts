import {defineField, defineType} from 'sanity'
import offerType from './offerType'

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
    defineField({
      name: 'offers',
      title: 'Lista de ofertas',
      type: 'array',
      of: [{type: 'object', fields: offerType.fields}],
    }),
  ],
})
