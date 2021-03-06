import { Meta } from 'epub-object-ts'

export default class MetaXML {
  meta: Meta

  constructor(meta: Meta) {
    this.meta = meta
  }

  toXML(): string {
    const opf = `    <${this.meta.name} property="${this.meta.property}">${this.meta.content}</${this.meta.name}>\n`
    return opf
  }
}
