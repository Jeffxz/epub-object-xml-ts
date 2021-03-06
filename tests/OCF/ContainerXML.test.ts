import ContainerXML from '../../src/OCF/ContainerXML'
import { Container } from 'epub-object-ts'

describe('ContainerXML', () => {
  it('should return correct container xml', () => {
    const container = new Container(['OPS/standard.opf'])
    const xml = new ContainerXML(container).toXML()
    expect(xml).toContain("    <rootfile full-path=\"OPS/standard.opf\" media-type=\"application/oebps-package+xml\"/>")
  })
})