import { Metadata } from 'epub-object-ts'
import BasicElementXML from './BasicElementXML'
import MetaXML from './MetaXML'

export default class MetadataXML {
  metadata: Metadata

  constructor(metadata: Metadata) {
    this.metadata = metadata
  }

  toXML(): string {
    let opf = `  <${this.metadata.name} xmlns:dc="${this.metadata.identifiers[0].nameSpace}">\n`
    for (let i = 0; i < this.metadata.identifiers.length; i++) {
      const id = new BasicElementXML(this.metadata.identifiers[i])
      opf += id.toXML()
    }
    for (let i = 0; i < this.metadata.titles.length; i++) {
      const title = new BasicElementXML(this.metadata.titles[i])
      opf += title.toXML()
    }
    for (let i = 0; i < this.metadata.languages.length; i++) {
      const language = new BasicElementXML(this.metadata.languages[i])
      opf += language.toXML()
    }
    for (let i = 0; i < this.metadata.meta.length; i++) {
      const meta = new MetaXML(this.metadata.meta[i])
      opf += meta.toXML()
    }
    opf += `  </${this.metadata.name}>\n`
    return opf
  }
}
