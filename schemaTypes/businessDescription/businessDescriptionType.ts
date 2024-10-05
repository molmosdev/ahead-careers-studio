import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'businessDescription',
  title: 'Descripción del negocio',
  type: 'document',
  fields: [
    defineField({
      name: 'slogan',
      title: 'Eslogan',
      type: 'string',
      validation: (rule) => rule.required().error('El eslogan es obligatorio'),
    }),
    defineField({
      name: 'sectors',
      title: 'Sectores',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1).error('Debe haber al menos un sector'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('La descripción es obligatoria'),
    }),
    defineField({
      name: 'ceoMessage',
      title: 'Mensaje del CEO',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('El mensaje del CEO es obligatoria'),
    }),
  ],
})
