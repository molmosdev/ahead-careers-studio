import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'candidateRequest',
  title: 'Solicitudes de candidato',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'Nombre',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Apellidos',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'extraInfo',
      title: 'Información Extra',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'updatedCV',
      title: 'CV Actualizado',
      type: 'file',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
  ],
})
