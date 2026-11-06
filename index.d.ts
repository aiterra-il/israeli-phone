import type { BulkResult, FormattedPhone, PhoneKind } from './israeli-phone.js'
import type { PHONE_REASONS as Reasons } from './israeli-phone.js'

export type { BulkResult, FormattedPhone, PhoneKind } from './israeli-phone.js'
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

export type ReasonCode = keyof typeof Reasons | 'length' | 'invalid'

export type ParsedPhone =
  | { status: 'empty' }
  | { status: 'invalid'; reason: string; code: ReasonCode }
  | { status: 'valid'; phone: FormattedPhone }

export declare function parsePhone(input: string): ParsedPhone
export declare function isValidPhone(input: string): boolean
export declare function formatPhone(input: string, format?: 'local' | 'e164' | 'digits' | 'international'): string | null
export declare function toE164(input: string): string | null
export declare function whatsappLink(input: string, message?: string): string | null
export declare function phoneKind(input: string): PhoneKind | null
export declare function cleanPhoneList(text: string, options?: { column?: number | null }): BulkResult
export declare function phoneListCsv(result: BulkResult): string
