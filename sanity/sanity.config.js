import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Eatly',

  projectId: 'i5qzy8wg',
  dataset: 'eatlydb',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
