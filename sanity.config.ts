import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {Logo} from './components/Logo'
import type {StructureResolver} from 'sanity/structure'
import {esESLocale} from '@sanity/locale-es-es'
import {
  EnvelopeIcon,
  DesktopIcon,
  UserIcon,
  CaseIcon,
  BlockquoteIcon,
  DocumentTextIcon,
} from '@sanity/icons'

// Define the structure resolver
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Panel de control')
    .items([
      S.listItem()
        .id('content')
        .title('Contenido de la web')
        .icon(DesktopIcon)
        .child(
          S.list()
            .title('Contenido de la web')
            .items([
              S.listItem()
                .id('businessDescription')
                .icon(BlockquoteIcon)
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
                .icon(BlockquoteIcon)
                .schemaType('methodology')
                .title('Metodología')
                .child(
                  S.editor().id('methodology').schemaType('methodology').documentId('methodology'),
                ),
              S.listItem()
                .id('experiences')
                .icon(BlockquoteIcon)
                .schemaType('experiences')
                .title('Experiencias')
                .child(
                  S.editor().id('experiences').schemaType('experiences').documentId('experiences'),
                ),
              S.listItem()
                .id('values')
                .icon(BlockquoteIcon)
                .schemaType('values')
                .title('Valores')
                .child(S.editor().id('values').schemaType('values').documentId('values')),
              S.listItem()
                .id('privacyPolicy')
                .icon(BlockquoteIcon)
                .schemaType('privacyPolicy')
                .title('Política de privacidad')
                .child(
                  S.editor()
                    .id('privacyPolicy')
                    .schemaType('privacyPolicy')
                    .documentId('privacyPolicy'),
                ),
              S.listItem()
                .id('legalNotice')
                .icon(BlockquoteIcon)
                .schemaType('legalNotice')
                .title('Aviso legal')
                .child(
                  S.editor().id('legalNotice').schemaType('legalNotice').documentId('legalNotice'),
                ),
              S.listItem()
                .id('cookies')
                .icon(BlockquoteIcon)
                .schemaType('cookies')
                .title('Cookies')
                .child(S.editor().id('cookies').schemaType('cookies').documentId('cookies')),
            ]),
        ),
      S.listItem()
        .id('requests')
        .title('Solicitudes')
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title('Solicitudes')
            .items([
              S.listItem()
                .id('candidates')
                .title('Candidatos')
                .icon(UserIcon)
                .child(S.documentTypeList('candidateRequest').title('Solicitudes de candidatos')),
              S.listItem()
                .id('business')
                .title('Negocios')
                .icon(CaseIcon)
                .child(S.documentTypeList('businessRequest').title('Solicitudes de negocios')),
            ]),
        ),
      S.listItem()
        .id('applications')
        .title('Candidaturas')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('application').title('Candidaturas')),
      S.listItem()
        .id('offers')
        .icon(BlockquoteIcon)
        .schemaType('offers')
        .title('Ofertas')
        .child(S.editor().id('offers').schemaType('offers').documentId('offers')),
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
    esESLocale(),
    ...(getCurrentUserRole() === 'administrator' ? [visionTool()] : []), // Conditionally include visionTool
  ],
  schema: {
    types: schemaTypes,
  },
  icon: Logo,
})
