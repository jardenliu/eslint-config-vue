import fs from 'node:fs'
import path from 'node:path'

const json = fs.readFileSync(path.resolve(import.meta.dirname, '../package.json'), 'utf8')
const pkg = JSON.parse(json)

const version = (process.argv.slice(2)[1])?.trim?.()

pkg.version = version

fs.writeFileSync(path.resolve(import.meta.dirname, '../package.json'), JSON.stringify(pkg, null, 4))
