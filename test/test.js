const { extract } = require('../')
const assert = require('assert')
const { JSDOM } = require('jsdom')

describe('extract', () => {
  it('does things', () => {
    const dom = new JSDOM()

    extract('<p>hello world</p>', dom)
  })
})
