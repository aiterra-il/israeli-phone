import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cleanPhoneList, formatPhone, isValidPhone, parsePhone, phoneKind, toE164, whatsappLink } from './index.js'

test('mobile numbers in every common form', () => {
  for (const input of ['0526780739', '052-678-0739', '+972 52-678-0739', '972526780739', '526780739', '052 678 0739']) {
    assert.equal(toE164(input), '+972526780739', input)
  }
})

test('formats', () => {
  assert.equal(formatPhone('0526780739'), '052-6780739')
  assert.equal(formatPhone('0526780739', 'international'), '+972 52 678 0739')
  assert.equal(formatPhone('0526780739', 'digits'), '972526780739')
  assert.equal(formatPhone('03-6123456'), '03-6123456')
})

test('kinds', () => {
  assert.equal(phoneKind('0526780739'), 'mobile')
  assert.equal(phoneKind('03-6123456'), 'landline')
  assert.equal(phoneKind('077-2345678'), 'national')
  assert.equal(phoneKind('1-800-123-456'), 'tollFree')
  assert.equal(phoneKind('*2000'), 'star')
  assert.equal(phoneKind('+44 20 7946 0958'), 'foreign')
})

test('invalid numbers explain why', () => {
  assert.equal(isValidPhone('03-1234567'), false)
  assert.equal(parsePhone('9.72523E+11').code, 'scientific')
  assert.equal(parsePhone('').status, 'empty')
})

test('whatsapp links only where WhatsApp can work', () => {
  assert.equal(whatsappLink('052-6780739'), 'https://wa.me/972526780739')
  assert.equal(whatsappLink('1-800-123-456'), null)
})

test('lists are cleaned and deduplicated', () => {
  const result = cleanPhoneList('Dana,052-6780739\nRon,0526780739\nX,abc')
  assert.equal(result.entries.length, 1)
  assert.equal(result.duplicates.length, 1)
  assert.equal(result.issues.length, 1)
})
