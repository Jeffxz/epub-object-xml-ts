import { Spine, Itemref } from 'epub-object-ts'

export class ItemrefXML {
  itemref: Itemref

  constructor(itemref: Itemref) {
    this.itemref = itemref
  }

  toXML(): string {
    let opf = `    <${this.itemref.name} idref="${this.itemref.idref}"`
    if (this.itemref.properties) {
      opf += ` properties="${this.itemref.properties.join(' ')}" `
    }
    opf += `/>\n`
    return opf
  }
}

export default class SpineXML {
  spine: Spine

  constructor(spine: Spine) {
    this.spine = spine
  }

  toXML(): string {
    let opf = `  <${this.spine.name}>\n`
    for (let i = 0; i < this.spine.items.length; i++) {
      const item = new ItemrefXML(this.spine.items[i])
      opf += item.toXML()
    }
    opf += `  </${this.spine.name}>\n`
    return opf
  }
}
