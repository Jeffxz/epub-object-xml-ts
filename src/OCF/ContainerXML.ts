import { Container } from 'epub-object-ts'
import RootfileXML from './RootfileXML'

export default class ContainerXML {
  container: Container

  constructor(container: Container) {
    this.container = container
  }

  toXML(): string {
    let xml = '<?xml version="1.0"?>\n'
    xml += `<${this.container.name} version="${this.container.version}" xmlns="${this.container.xmlns}">\n`
    xml += '  <rootfiles>\n'
    this.container.rootfiles.forEach((item) => {
      const rootfileXML = new RootfileXML(item)
      xml += rootfileXML.toXML()
    })
    xml += '  </rootfiles>\n'
    xml += `</${this.container.name}>\n`
    return xml
  }
}
