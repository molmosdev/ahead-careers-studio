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
      name: 'version',
      title: 'Versión',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'experiences',
      title: 'Experiencias',
      type: 'array',
      of: [{type: 'object', fields: experienceType.fields}],
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
