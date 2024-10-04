import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offer',
  title: 'Oferta',
  type: 'object',
  fields: [
    defineField({
      name: 'offerId',
      title: 'ID de la Oferta',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Título del Trabajo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industria',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'salary',
      title: 'Salario',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'contractType',
      title: 'Tipo de Contrato',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicationDate',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultantName',
      title: 'Nombre del Consultor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultantEmail',
      title: 'Correo Electrónico del Consultor',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'offerContent',
      title: 'Contenido de la Oferta',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
