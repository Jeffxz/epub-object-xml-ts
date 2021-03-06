import { Manifest, ManifestItem } from 'epub-object-ts'

export class ManifestItemXML {
  item: ManifestItem

  constructor(item: ManifestItem) {
    this.item = item
  }

  toXML(): string {
    let opf = `    <${this.item.name} id="${this.item.id}" href="${this.item.href}" media-type="${this.item.mediaType}"`
    if (this.item.properties) {
      opf += ` properties="${this.item.properties.join(' ')}" `
    }
    if (this.item.fallback) {
      opf += ` fallback="${this.item.fallback}" `
    }
    opf += `/>\n`
    return opf
  }
}

export default class ManifestXML {
  manifest: Manifest

  constructor(manifest: Manifest) {
    this.manifest = manifest
  }

  toXML(): string {
    let opf = `  <${this.manifest.name}>\n`
    for (let i = 0; i < this.manifest.items.length; i++) {
      const item = new ManifestItemXML(this.manifest.items[i])
      opf += item.toXML()
    }
    opf += `  </${this.manifest.name}>\n`
    return opf
  }
}
