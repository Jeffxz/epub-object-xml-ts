import MetadataXML from '../../../src/Packages/metadata/MetadataXML'
import { Metadata, Meta, Identifier, Title, Language } from 'epub-object-ts'

describe('MetadataXML', () => {
  it('should return metadata xml', () => {
    const meta = new Meta('test', 'abc')
    const identifier = new Identifier('uuid')
    const title = new Title('test title')
    const language = new Language('en')
    const metadata = new Metadata([identifier], [title], [language], [meta])
    const xml = new MetadataXML(metadata).toXML()
    expect(xml).toContain('<meta property="test">abc</meta>')
    expect(xml).toContain('<dc:identifier>uuid</dc:identifier>')
    expect(xml).toContain('<dc:title>test title</dc:title>')
    expect(xml).toContain('<dc:language>en</dc:language>')
  })
})