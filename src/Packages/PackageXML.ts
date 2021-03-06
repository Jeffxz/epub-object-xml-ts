import { Package } from 'epub-object-ts'
import SpineXML from './SpineXML'
import MetadataXML from './metadata/MetadataXML'
import ManifestXML from './ManifestXML'

export default class PackageXML {
  pkg: Package

  constructor(pkg: Package) {
    this.pkg = pkg
  }

  toXML(): string {
    let opf = '<?xml version="1.0" encoding="UTF-8"?>\n'
    opf += `<package xmlns="${Package.PREFIX_OPF}" version="${this.pkg.version}" unique-identifier="${this.pkg.uniqueIdentifier}" prefix="rendition: ${Package.PREFIX_RENDITION}">\n`
    opf += new MetadataXML(this.pkg.metadata).toXML()
    opf += new ManifestXML(this.pkg.manifest).toXML()
    opf += new SpineXML(this.pkg.spine).toXML()
    opf += '</package>\n'
    return opf
  }
}
