export type PhoneResult = {
    status: 'empty';
} | {
    status: 'invalid';
    error: string;
} | {
    status: 'valid';
    digits: string;
    assumedIsraeli: boolean;
};
export type ButtonPlacement = 'inline' | 'floating';
export declare const ISRAEL_CODE = "972";
export declare const DEFAULT_BUTTON_LABEL = "\u05E9\u05DC\u05D7\u05D5 \u05DC\u05E0\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4";
export declare const PHONE_ERRORS: {
    readonly characters: "אפשר להקליד רק ספרות, רווחים, מקפים וסוגריים, ו-+ בתחילת המספר.";
    readonly zeroAfterPlus: "אחרי ה-+ או ה-00 באה קידומת המדינה, בלי 0 נוסף. לישראל הקידומת היא 972.";
    readonly israeli: "המספר לא נראה כמו מספר ישראלי תקין. בדקו שהקלדתם את כל הספרות, למשל 050-1234567.";
    readonly israeliMobile: "למספר נייד ישראלי יש 10 ספרות כולל ה-0 בהתחלה, למשל 050-1234567.";
    readonly international: "המספר קצר או ארוך מדי. מספר מחו״ל מתחיל בקידומת המדינה, ואחריה המספר המלא.";
};
export declare const ASSUMED_ISRAELI_NOTE = "\u05D4\u05E0\u05D7\u05E0\u05D5 \u05E9\u05D6\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05D1\u05DC\u05D9 \u05D4-0 \u05D5\u05D4\u05D5\u05E1\u05E4\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E7\u05D9\u05D3\u05D5\u05DE\u05EA 972. \u05D0\u05DD \u05D6\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05DE\u05D7\u05D5\u05F4\u05DC, \u05D4\u05E7\u05DC\u05D9\u05D3\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05E2\u05DD + \u05D5\u05E7\u05D9\u05D3\u05D5\u05DE\u05EA \u05D4\u05DE\u05D3\u05D9\u05E0\u05D4.";
export declare function normalizePhone(raw: string): PhoneResult;
export declare function buildWhatsAppLink(digits: string, message: string): string;
export declare function countCharacters(text: string): number;
export declare function buttonSnippet({ link, label, placement, }: {
    link: string;
    label: string;
    placement: ButtonPlacement;
}): string;
