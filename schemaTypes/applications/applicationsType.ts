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
      validation: (rule) =>
        rule
          .required()
          .integer()
          .min(1)
          .max(99999)
          .error('The offer ID is required and must be an integer between 1 and 99999'),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().error('The job title is required'),
    }),
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
      name: 'cv',
      title: 'CV',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      readOnly: true,
      validation: (rule) => rule.required().error('The CV is required'),
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
