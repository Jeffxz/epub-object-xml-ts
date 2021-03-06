import MetaXML from '../../../src/Packages/metadata/MetaXML'
import { Meta } from 'epub-object-ts'

describe('MetaXML', () => {
  it('should return correct meta xml', () => {
    const meta = new Meta('test', 'abc')
    const xml = new MetaXML(meta).toXML()
    expect(xml).toContain("<meta property=\"test\">abc</meta>")
  })
})