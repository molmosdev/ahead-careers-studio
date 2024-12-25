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
      validation: (rule) => rule.required().error('El nombre es obligatorio'),
    }),
    defineField({
      name: 'lastName',
      title: 'Apellidos',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().error('Los apellidos son obligatorios'),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'number',
      readOnly: true,
      validation: (rule) => rule.required().error('El teléfono es obligatorio'),
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'email',
      readOnly: true,
      validation: (rule) => rule.required().error('El correo electrónico es obligatorio'),
    }),
    defineField({
      name: 'extraInfo',
      title: 'Información Extra',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'cv',
      title: 'CV',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      readOnly: true,
      validation: (rule) => rule.required().error('El CV es obligatorio'),
    }),
    defineField({
      name: 'reviewed',
      title: 'Revisada',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      phone: 'phone',
      reviewed: 'reviewed',
    },
    prepare(selection) {
      const {firstName, phone, reviewed} = selection
      return {
        title: `${firstName} (${phone}) ${reviewed ? '✅' : ''}`,
      }
    },
  },
})
