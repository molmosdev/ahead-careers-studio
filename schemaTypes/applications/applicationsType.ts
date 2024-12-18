import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'application',
  title: 'Candidatura',
  type: 'document',
  fields: [
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
      validation: (rule) => rule.required().error('The job title is required'),
    }),
  ],
  preview: {
    select: {
      title: 'offerId',
      jobTitle: 'jobTitle',
    },
    prepare(selection) {
      const {title, jobTitle} = selection
      return {
        title: `Candidatura para ${jobTitle} (${title})`,
      }
    },
  },
})
