import { test } from 'uvu'
import * as assert from 'uvu/assert'
import params from '../src/params.mjs'

test('Create params from URL string', () => {
  const p = params('https://example.com/path?a=1&b=2&c=3')
  assert.equal(p['a'], '1')
  assert.equal(p['b'], '2')
  assert.equal(p['c'], '3')
  assert.equal(p['d'], undefined)
})

test('Update params from URL string', () => {
  const p = params('https://example.com/path?a=1&b=2&c=3')
  p.a = '4'
  p.b = '59'
  p.c = '3'
  p.z = '9999'

  assert.equal(
    p.apply('https://example.com/path?a=1&b=2&c=3'),
    'https://example.com/path?a=4&b=59&c=3&z=9999'
  )
})

test('Test deconstruction from params object', () => {
  const p = params('https://example.com/path?a=1&b=2&c=3')
  const { a, b, c } = p
  assert.equal(a, '1')
  assert.equal(b, '2')
  assert.equal(c, '3')
})

test.run()
