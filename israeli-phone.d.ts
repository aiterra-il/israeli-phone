export type PhoneKind = 'mobile' | 'landline' | 'national' | 'foreign' | 'tollFree' | 'service' | 'star';
export type FormattedPhone = {
    kind: PhoneKind;
    label: string;
    local: string;
    e164: string | null;
    digits: string | null;
    international: string | null;
    whatsapp: string | null;
    tel: string | null;
    notes: string[];
};
export type PhoneResult = {
    status: 'empty';
} | {
    status: 'invalid';
    reason: string;
} | {
    status: 'valid';
    phone: FormattedPhone;
};
export type ListFormat = 'e164' | 'digits' | 'local';
export type BulkEntry = {
    line: number;
    phone: FormattedPhone;
    cells: string[];
};
export type BulkIssue = {
    line: number;
    text: string;
    reason: string;
};
export type BulkDuplicate = {
    line: number;
    text: string;
    firstLine: number;
};
export type BulkResult = {
    rows: number;
    entries: BulkEntry[];
    issues: BulkIssue[];
    duplicates: BulkDuplicate[];
    columns: string[];
    column: number;
    header: string[] | null;
    truncated: boolean;
};
export declare const PLAN_EDITION_DATE = "2 \u05D1\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8 2023";
export declare const ALLOCATIONS_DATE = "14 \u05D1\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8 2026";
export declare const PORTABILITY_START = "2 \u05D1\u05D3\u05E6\u05DE\u05D1\u05E8 2007";
export declare const MAX_BULK_ROWS = 10000;
export declare const AREA_NAMES: Record<string, string>;
export declare const MOBILE_PREFIXES: string[];
export declare const NATIONAL_PREFIXES: string[];
export declare const PHONE_REASONS: {
    readonly noNumber: "לא מצאנו כאן מספר טלפון.";
    readonly emptyCell: "אין בשורה הזו מספר טלפון.";
    readonly multiple: "נראה שיש כאן יותר ממספר אחד. שימו כל מספר בשורה נפרדת.";
    readonly tooLong: "יש כאן יותר מדי ספרות. אולי חוברו שני מספרים, או שנוספה ספרה.";
    readonly scientific: "Excel הציג את המספר בכתיב מדעי, למשל 9.72523E+11, והספרות האחרונות לא הועתקו. תנו לעמודה ב-Excel עיצוב מספר בלי ספרות אחרי הנקודה, והעתיקו שוב.";
    readonly unrecognized: "לא זיהינו כאן מספר ישראלי. מספר ישראלי מתחיל ב-0, ב-972 או ב-+972. אם זה מספר מחו״ל, כתבו אותו עם + וקידומת המדינה.";
    readonly localStart: "אחרי הקידומת המספר מתחיל בספרה 2 עד 9. מספר שמתחיל שם ב-0 או ב-1 לא קיים בתוכנית המספור.";
    readonly reserved: "הקידומת 06 שמורה בתוכנית המספור לשימוש עתידי, ואין בה מספרים.";
    readonly carrier: "מספר שמתחיל ב-01 הוא חיוג לחו״ל דרך ספק בינלאומי, כמו 013 או 014. כתבו אותו עם + וקידומת המדינה, בלי קוד הספק.";
    readonly shortCode: "זה מספר מקוצר לשירות, כמו 100 או 144. אין לו צורה בינלאומית.";
    readonly service: "מספר שירות שמתחיל ב-1, כמו 1-800 או 1-700, בנוי מ-10 ספרות.";
    readonly star: "מספר כוכבית לעסקים בנוי מכוכבית וארבע ספרות, כמו *2345. קוד אחר עם כוכבית הוא קוד שירות של חברת הטלפון.";
    readonly serviceFromAbroad: "למספרי שירות שמתחילים ב-1 ולמספרי כוכבית אין צורה עם 972, כי לא מחייגים אליהם מחו״ל.";
    readonly prefix057: "הקידומת 057 לא מוקצית היום לאף חברת טלפון לפי רשימת ההקצאות של משרד התקשורת. ייתכן שזה מספר ישן, כדאי לבדוק מול הלקוח.";
};
export declare function parsePhone(raw: string): PhoneResult;
export declare const typedDigitCount: (raw: string) => number;
export declare function formatValue(phone: FormattedPhone, format: ListFormat): string;
export declare const listText: (entries: BulkEntry[], format: ListFormat) => string;
export declare function cleanList(text: string, preferredColumn: number | null): BulkResult;
export declare const PHONE_CSV_COLUMNS: string[];
export declare function listCsv(result: BulkResult): string;
