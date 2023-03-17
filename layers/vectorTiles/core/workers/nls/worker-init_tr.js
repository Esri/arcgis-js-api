// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define("esri/layers/vectorTiles/core/workers/nls/worker-init_tr",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 Tn","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",perMille:"‰",group:".",percentFormat:"%#,##0","decimalFormat-long":"000 trilyon",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E a h:mm","days-standAlone-short":["Pa","Pt","Sa","Ça","Pe","Cu","Ct"],"months-format-narrow":["O","Ş","M","N","M","H","T","A","E","E","K","A"],"field-second-relative+0":"şimdi","quarters-standAlone-narrow":["1.","2.","3.","4."],"field-weekday":"Haftanın Günü","dateFormatItem-yQQQ":"y/QQQ","dateFormatItem-yMEd":"dd.MM.y E","field-wed-relative+0":"bu çarşamba","field-wed-relative+1":"gelecek çarşamba","dateFormatItem-GyMMMEd":"G d MMM y E","dateFormatItem-MMMEd":"d MMMM E",eraNarrow:["MÖ","MS"],"field-tue-relative+-1":"geçen salı","days-format-short":["Pa","Pt","Sa","Ça","Pe","Cu","Ct"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y","field-fri-relative+-1":"geçen cuma","field-wed-relative+-1":"geçen çarşamba","months-format-wide":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"ÖS","dateFormat-full":"d MMMM y EEEE","field-thu-relative+-1":"geçen perşembe","dateFormatItem-Md":"dd/MM","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"dd.MM.y","field-era":"Miladi Dönem","dateFormatItem-yM":"MM/y","months-standAlone-wide":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],"timeFormat-short":"HH:mm","quarters-format-wide":["1. çeyrek","2. çeyrek","3. çeyrek","4. çeyrek"],"dateFormatItem-yQQQQ":"y/QQQQ","timeFormat-long":"HH:mm:ss z","field-year":"Yıl","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Saat","months-format-abbr":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],"field-sat-relative+0":"bu cumartesi","field-sat-relative+1":"gelecek cumartesi","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"bugün","field-thu-relative+0":"bu perşembe","field-day-relative+1":"yarın","field-thu-relative+1":"gelecek perşembe","dateFormatItem-GyMMMd":"G dd MMM y","dateFormatItem-H":"HH","months-standAlone-abbr":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],"quarters-format-abbr":["Ç1","Ç2","Ç3","Ç4"],"quarters-standAlone-wide":["1. çeyrek","2. çeyrek","3. çeyrek","4. çeyrek"],"dateFormatItem-Gy":"G y","dateFormatItem-M":"L","days-standAlone-wide":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"HH:mm:ss","field-sun-relative+0":"bu pazar","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"gelecek pazar","quarters-standAlone-abbr":["Ç1","Ç2","Ç3","Ç4"],eraAbbr:["MÖ","MS"],"field-minute":"Dakika","field-dayperiod":"ÖÖ/ÖS","days-standAlone-abbr":["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1.","2.","3.","4."],"field-day-relative+-1":"dün","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"a h","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"dd/MM E","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"bu cuma","field-fri-relative+1":"gelecek cuma","field-day":"Gün","days-format-wide":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],"field-zone":"Saat Dilimi","months-standAlone-narrow":["O","Ş","M","N","M","H","T","A","E","E","K","A"],"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"geçen yıl","field-month-relative+-1":"geçen ay","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"a h:mm","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],eraNames:["Milattan Önce","Milattan Sonra"],"dateFormatItem-yMMMd":"dd MMM y","days-format-narrow":["P","P","S","Ç","P","C","C"],"field-month":"Ay","days-standAlone-narrow":["P","P","S","Ç","P","C","C"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"bu salı","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"gelecek salı","dayPeriods-format-wide-am":"ÖÖ","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"bu pazartesi","field-mon-relative+1":"gelecek pazartesi","dateFormat-short":"d.MM.y","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E a h:mm:ss","dayPeriods-format-narrow-noon":"n","field-second":"Saniye","field-sat-relative+-1":"geçen cumartesi","dateFormatItem-yMMMEd":"d MMM y E","field-sun-relative+-1":"geçen pazar","field-month-relative+0":"bu ay","field-month-relative+1":"gelecek ay","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"d E","field-week":"Hafta","dateFormat-medium":"d MMM y","field-week-relative+-1":"geçen hafta","field-year-relative+0":"bu yıl","field-year-relative+1":"gelecek yıl","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"a h:mm:ss","dateFormatItem-GyMMM":"G MMM y","field-mon-relative+-1":"geçen pazartesi","field-week-relative+0":"bu hafta","field-week-relative+1":"gelecek hafta","dateFormatItem-yMM":"MM.y","field-day-relative+2":"öbür gün","dateFormatItem-MMMMd":"dd MMMM","field-day-relative+-2":"evvelsi gün","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-MMMMEd":"dd MMMM E","dateFormatItem-mmss":"mm:ss",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});