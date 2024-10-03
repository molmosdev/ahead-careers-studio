import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'offerId',
      title: 'Offer ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'contractType',
      title: 'Contract Type',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultantName',
      title: 'Consultant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultantEmail',
      title: 'Consultant Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'offerContent',
      title: 'Offer Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
