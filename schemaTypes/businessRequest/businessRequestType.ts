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
    }),
    defineField({
      name: 'lastName',
      title: 'Apellidos',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'companyName',
      title: 'Empresa',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'position',
      title: 'Cargo',
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
    }),
    defineField({
      name: 'jobDescription',
      title: 'Descripción del puesto',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      readOnly: true,
      hidden: ({parent}) => parent?.reason !== 'Selection',
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
