import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {Logo} from './components/Logo'

export default defineConfig({
  name: 'default',
  title: 'Ahead Careers',
  projectId: '54dcb3zh',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  head: () => [{rel: 'icon', href: '/ruta/a/tu/favicon.ico', type: 'image/x-icon'}],
  icon: Logo,
})
