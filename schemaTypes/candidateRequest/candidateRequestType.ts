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
    }),
    defineField({
      name: 'lastName',
      title: 'Apellidos',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'email',
      readOnly: true,
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
