import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {Logo} from './components/Logo'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Web')
    .items([
      S.listItem()
        .id('businessDescription')
        .schemaType('businessDescription')
        .title('Descripción de la empresa')
        .child(
          S.editor()
            .id('businessDescription')
            .schemaType('businessDescription')
            .documentId('businessDescription'),
        ),
      S.listItem()
        .id('methodology')
        .schemaType('methodology')
        .title('Metodología')
        .child(S.editor().id('methodology').schemaType('methodology').documentId('methodology')),
      S.listItem()
        .id('offers')
        .schemaType('offers')
        .title('Ofertas')
        .child(S.editor().id('offers').schemaType('offers').documentId('offers')),
      S.listItem()
        .id('experiences')
        .schemaType('experiences')
        .title('Experiencias')
        .child(S.editor().id('experiences').schemaType('experiences').documentId('experiences')),
      S.listItem()
        .id('values')
        .schemaType('values')
        .title('Valores')
        .child(S.editor().id('values').schemaType('values').documentId('values')),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return (
          id &&
          !['businessDescription', 'methodology', 'offers', 'experiences', 'values'].includes(id)
        )
      }),
    ])

export default defineConfig({
  name: 'default',
  title: 'Ahead Careers',
  projectId: '54dcb3zh',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
  },
  head: () => [{rel: 'icon', href: '/ruta/a/tu/favicon.ico', type: 'image/x-icon'}],
  icon: Logo,
})
