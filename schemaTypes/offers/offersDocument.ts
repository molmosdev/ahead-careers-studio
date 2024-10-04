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
      name: 'version',
      title: 'Versión',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'offers',
      title: 'Ofertas',
      type: 'array',
      of: [{type: 'object', fields: offerType.fields}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      version: 'version',
    },
    prepare(selection) {
      const {version} = selection
      return {
        title: `Versión ${version}`,
      }
    },
  },
})
