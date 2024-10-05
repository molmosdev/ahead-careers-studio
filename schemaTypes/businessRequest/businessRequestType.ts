import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'businessRequest',
  title: 'Solicitudes de negocio',
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
      name: 'company',
      title: 'Empresa',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().error('La empresa es obligatoria'),
    }),
    defineField({
      name: 'position',
      title: 'Cargo',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().error('El cargo es obligatorio'),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().error('El teléfono es obligatorio'),
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      readOnly: true,
      validation: (rule) =>
        rule.required().email().error('El correo electrónico es obligatorio y debe ser válido'),
    }),
    defineField({
      name: 'reason',
      title: 'Motivo',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          {title: 'Solicitar Información', value: 'informacion'},
          {title: 'Solicitar Selección', value: 'seleccion'},
        ],
      },
      validation: (rule) => rule.required().error('El motivo es obligatorio'),
    }),
    defineField({
      name: 'extraInfo',
      title: 'Información Extra',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'positionTitle',
      title: 'Título de la Posición',
      type: 'string',
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'seleccion',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {reason?: string}
          return parent.reason === 'seleccion' && !value
            ? 'El título de la posición es obligatorio para selección'
            : true
        }),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'seleccion',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {reason?: string}
          return parent.reason === 'seleccion' && !value
            ? 'El sector es obligatorio para selección'
            : true
        }),
    }),
    defineField({
      name: 'salary',
      title: 'Salario',
      type: 'string',
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'seleccion',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {reason?: string}
          return parent.reason === 'seleccion' && !value
            ? 'El salario es obligatorio para selección'
            : true
        }),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Funciones',
      type: 'text',
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'seleccion',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {reason?: string}
          return parent.reason === 'seleccion' && !value
            ? 'Las funciones son obligatorias para selección'
            : true
        }),
    }),
    defineField({
      name: 'requirements',
      title: 'Requisitos',
      type: 'text',
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'seleccion',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {reason?: string}
          return parent.reason === 'seleccion' && !value
            ? 'Los requisitos son obligatorios para selección'
            : true
        }),
    }),
    defineField({
      name: 'offer',
      title: 'Oferta',
      type: 'text',
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'seleccion',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {reason?: string}
          return parent.reason === 'seleccion' && !value
            ? 'La oferta es obligatoria para selección'
            : true
        }),
    }),
  ],
})
