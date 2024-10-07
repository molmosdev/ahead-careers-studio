import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {Logo} from './components/Logo'
import type {StructureResolver} from 'sanity/structure'

// Define the structure resolver
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

// Placeholder function to get the current user's role
// Replace this with your actual logic to get the current user's role
const getCurrentUserRole = (): string => {
  return 'administrator' // Example: return 'administrator' or 'editor'
}

// Define the Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'Ahead Careers',
  projectId: '54dcb3zh',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    ...(getCurrentUserRole() === 'administrator' ? [visionTool()] : []), // Conditionally include visionTool
  ],
  schema: {
    types: schemaTypes,
  },
  head: () => [{rel: 'icon', href: '/ruta/a/tu/favicon.ico', type: 'image/x-icon'}],
  icon: Logo,
})
