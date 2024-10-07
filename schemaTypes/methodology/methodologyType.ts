import {defineField, defineType} from 'sanity'
import methodologyStepType from './methodologyStepType'

export default defineType({
  name: 'methodology',
  title: 'Metodología',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'methodologySteps',
      title: 'Pasos de la metodología de trabajo',
      type: 'array',
      of: [{type: 'object', fields: methodologyStepType.fields}],
    }),
  ],
})
