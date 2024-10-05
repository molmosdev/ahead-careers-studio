import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offer',
  title: 'Oferta',
  type: 'document',
  fields: [
    defineField({
      name: 'offerId',
      title: 'ID de la Oferta',
      type: 'number',
      validation: (rule) =>
        rule
          .required()
          .integer()
          .min(1)
          .max(99999)
          .custom(async (value, context) => {
            const {document, getClient} = context
            const client = getClient({apiVersion: '2021-06-07'})
            const existingOffers = await client.fetch(
              `*[_type == "offer" && offerId == $offerId && _id != $id]`,
              {
                offerId: value,
                id: document?._id,
              },
            )
            if (existingOffers.length > 0) {
              return 'El ID de la oferta debe ser único'
            }
            return true
          }),
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
      type: 'string',
      validation: (rule) => rule.required(),
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