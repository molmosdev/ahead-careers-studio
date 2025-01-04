import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'application',
  title: 'Candidatura',
  type: 'document',
  fields: [
    defineField({
      name: 'offerId',
      title: 'Offer ID',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      readOnly: true,
    }),
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
      name: 'availability',
      title: 'Disponibilidad horaria',
      type: 'string',
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
      title: 'offerId',
      jobTitle: 'jobTitle',
      reviewed: 'reviewed',
    },
    prepare(selection) {
      const {title, jobTitle, reviewed} = selection
      return {
        title: `${jobTitle} (${title}) ${reviewed ? '✅' : ''}`,
      }
    },
  },
})
