import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'methodologyStep',
  title: 'Paso de la metodología de trabajo',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().error('El título es obligatorio'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('La descripción es obligatoria'),
    }),
  ],
})
