<div dir="rtl">

# israeli-phone · מספרי טלפון ישראליים

[![npm](https://img.shields.io/npm/v/israeli-phone?color=2447D6)](https://www.npmjs.com/package/israeli-phone)
[![tests](https://github.com/aiterra-il/israeli-phone/actions/workflows/tests.yml/badge.svg)](https://github.com/aiterra-il/israeli-phone/actions/workflows/tests.yml)
[![license](https://img.shields.io/badge/license-MIT-3E96F9)](LICENSE)
![dependencies](https://img.shields.io/badge/dependencies-0-060B22)

בדיקה, עיצוב וניקוי של מספרי טלפון ישראליים לפי תוכנית המספור של משרד התקשורת. הספרייה מזהה נייד, קווי, 07X, 1-800 ומספרי כוכבית, ממירה ל-E.164 ובונה קישור לוואטסאפ. כשמספר לא תקין היא מסבירה בעברית למה.

**למה זה שימושי?**

- **טפסים באתר.** הלקוח מקליד ‎052 678 0739‎, ‎+972-52…‎ או ‎526780739‎, ובמסד הנתונים נשמר תמיד ‎+972526780739‎.
- **CRM ושליחת הודעות.** מנקים רשימת לקוחות מ-Excel: מספרים כפולים, שורות בלי מספר, ומספרים שהפכו ל-‎9.72523E+11‎.
- **וואטסאפ.** קישור ‎wa.me‎ רק למספרים שוואטסאפ באמת יכול לעבוד איתם.

## התקנה

```bash
npm install israeli-phone
```

בלי תלויות, עם טיפוסים ל-TypeScript. עובד ב-Node.js 18 ומעלה ובדפדפן.

## שימוש

```js
import { parsePhone, formatPhone, toE164, whatsappLink, phoneKind, cleanPhoneList, phoneListCsv } from 'israeli-phone'

toE164('052-678-0739')                       // '+972526780739'
formatPhone('972526780739')                  // '052-6780739'
formatPhone('0526780739', 'international')   // '+972 52 678 0739'
phoneKind('1-800-123-456')                   // 'tollFree'
whatsappLink('052-6780739', 'שלום')          // 'https://wa.me/972526780739?text=...'

parsePhone('03-1234567')
// { status: 'invalid', code: 'localStart',
//   reason: 'אחרי הקידומת המספר מתחיל בספרה 2 עד 9. ...' }

const list = cleanPhoneList('דנה,052-6780739\nרון,0526780739\nאבי,abc')
list.entries      // מספרים תקינים
list.duplicates   // כפולים
list.issues       // שורות עם בעיה, וההסבר לכל אחת
phoneListCsv(list) // CSV עם e164, וואטסאפ, צורה מקומית וסוג
```

## סוגי מספרים

| `kind` | דוגמה | מה זה |
|---|---|---|
| `mobile` | 052-6780739 | נייד, קידומות 050 עד 059 |
| `landline` | 03-6123456 | קווי, קידומות 02, 03, 04, 08, 09 |
| `national` | 077-2345678 | מספר ארצי בקידומת 07X |
| `tollFree` | 1-800-123-456 | מספר חינם |
| `service` | 1-700-123-456 | מספר שירות |
| `star` | ‎*2000‎ | מספר כוכבית לעסקים |
| `foreign` | ‎+44 20 7946 0958‎ | מספר מחו״ל |

## לנסות בלי קוד

[עיצוב מספרי טלפון ישראליים](https://www.aiterra.co.il/tools/israeli-phone-format) ו[מחולל קישור לוואטסאפ](https://www.aiterra.co.il/tools/whatsapp-link-generator) באתר של Aiterra, על אותו קוד.

---

נבנה ב-**[Aiterra](https://www.aiterra.co.il)**, סטודיו לבניית אתרים, אוטומציה וסוכני AI בישראל. רישיון MIT.

</div>

## English

Validate, format and clean Israeli phone numbers by the Ministry of Communications numbering plan. It recognises mobile, landline, 07X national, 1-800 and 1-700 service and *star business numbers, converts to E.164 and international form, builds wa.me links only where WhatsApp can work, explains invalid numbers in Hebrew with a stable reason code, and cleans whole lists pasted from Excel (duplicates, empty rows, numbers mangled into scientific notation) with CSV export. No dependencies, TypeScript types included, MIT, by [Aiterra](https://www.aiterra.co.il).
