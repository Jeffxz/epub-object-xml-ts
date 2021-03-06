import RootfileXML from '../../src/OCF/RootfileXML'
import { Rootfile } from 'epub-object-ts'

describe('RootfileXML', () => {
  it('should return correct rootfile xml', () => {
    const rootfile = new Rootfile('OPS/standard.opf')
    const xml = new RootfileXML(rootfile).toXML()
    expect(xml).toMatch("    <rootfile full-path=\"OPS/standard.opf\" media-type=\"application/oebps-package+xml\"/>")
  })
})