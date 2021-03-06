import { Epub } from 'epub-object-ts'
import ContainerXML from './OCF/ContainerXML'
import PackageXML from './Packages/PackageXML'

export default class EpubXML {
  epub: Epub
  containerXML: ContainerXML
  packageXML: PackageXML

  constructor(epub: Epub) {
    this.epub = epub
    this.containerXML = new ContainerXML(this.epub.ocf.container)
    this.packageXML = new PackageXML(this.epub.epubPackage)
  }
}
