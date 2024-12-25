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
      name: 'companyName',
      title: 'Empresa',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required().error('El nombre de la empresa es obligatoria'),
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
      name: 'reason',
      title: 'Motivo',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          {title: 'Solicitar Información', value: 'Information'},
          {title: 'Solicitar Selección', value: 'Selection'},
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
      name: 'jobDescription',
      title: 'Descripción del puesto',
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
      position: 'position',
      companyName: 'companyName',
      reviewed: 'reviewed',
    },
    prepare(selection) {
      const {position, companyName, reviewed} = selection
      return {
        title: `${position} (${companyName}) ${reviewed ? '✅' : ''}`,
      }
    },
  },
})
