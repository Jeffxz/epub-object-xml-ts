import BasicElementXML from '../../../src/Packages/metadata/BasicElementXML'
import { BasicElement } from 'epub-object-ts'

describe('BasicElementXML', () => {
  it('should return true', () => {
    const elem = new BasicElement('test')
    elem.name = 'meta'
    elem.id = 'test-id'
    const xml = new BasicElementXML(elem).toXML()
    expect(xml).toContain("<meta id=\"test-id\">test</meta>")
  })
})