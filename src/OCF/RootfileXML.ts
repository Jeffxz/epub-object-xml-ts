import { Rootfile } from 'epub-object-ts'

export default class RootfileXML {
  rootfile: Rootfile

  constructor(rootfile: Rootfile) {
    this.rootfile = rootfile
  }

  toXML(): string {
    return `    <${this.rootfile.name} full-path="${this.rootfile.fullPath}" media-type="${this.rootfile.mediaType}"/>\n`
  }
}
