import { PHONE_REASONS, cleanList, formatValue, listCsv, parsePhone as parseRaw } from './israeli-phone.js'
import { buildWhatsAppLink } from './whatsapp-link.js'

export {
  AREA_NAMES,
  MOBILE_PREFIXES,
  NATIONAL_PREFIXES,
  PHONE_REASONS,
  PHONE_CSV_COLUMNS,
  cleanList,
  listCsv,
  listText,
} from './israeli-phone.js'

const reasonCodes = new Map(Object.entries(PHONE_REASONS).map(([code, text]) => [text, code]))

const reasonCodeOf = (reason) => reasonCodes.get(reason) ?? (/ספרות/.test(reason) ? 'length' : 'invalid')

export function parsePhone(input) {
  const result = parseRaw(String(input ?? ''))
  if (result.status === 'invalid') return { ...result, code: reasonCodeOf(result.reason) }
  return result
}

export const isValidPhone = (input) => parsePhone(input).status === 'valid'

export function formatPhone(input, format = 'local') {
  const result = parsePhone(input)
  if (result.status !== 'valid') return null
  if (format === 'international') return result.phone.international
  return formatValue(result.phone, format) || null
}

export const toE164 = (input) => formatPhone(input, 'e164')

export function whatsappLink(input, message = '') {
  const result = parsePhone(input)
  if (result.status !== 'valid' || !result.phone.digits || !result.phone.whatsapp) return null
  return buildWhatsAppLink(result.phone.digits, message)
}

export function phoneKind(input) {
  const result = parsePhone(input)
  return result.status === 'valid' ? result.phone.kind : null
}

export function cleanPhoneList(text, { column = null } = {}) {
  return cleanList(String(text ?? ''), column)
}

export const phoneListCsv = listCsv
