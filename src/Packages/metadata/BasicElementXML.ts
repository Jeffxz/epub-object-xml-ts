import { BasicElement } from 'epub-object-ts'

export default class BasicElementXML {
  elem: BasicElement

  constructor(elem: BasicElement) {
    this.elem = elem
  }

  toXML(): string {
    let opf = `    <${this.elem.name}`
    if (this.elem.id) {
      opf += ` id="${this.elem.id}"`
    }
    opf += `>${this.elem.content}</${this.elem.name}>\n`
    return opf
  }
}
