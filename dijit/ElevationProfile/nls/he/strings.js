// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"פרופיל גבהים",showMe:"הצג בפניי",selectLine:"<b>בחר</b> ישות במפה.",popupRequirement:"הערה: הישות חייבת להיות בשכבה המאפשרת חלונות קופצים.",digitizeDistanceMeasureTool:"השתמש בכלי <b>מדידה</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"רחף מעל או גע בתרשים פרופיל גבהים בכדי להציג גבהים ולהראות מיקום על המפה.",directionLabel:"כיוון פרופיל"},buttons:{measureLabel:"מדידה",helpLabel:"עזרה",profileForward:"לפנים",profileReverse:"לאחור",flipProfileTitle:"לחץ כדי להפוך כיוון פרופיל",aggregationShowLabel:"הצג פרטי צבירה",aggregationHideLabel:"הסתר נתוני צבירה",aggregateElevationGainForward:"צבור מרווח גובה לפנים",aggregateElevationLossForward:"צבור הפסד גובה לפנים",aggregateElevationGainReverse:"צבור מרווח גובה לאחור",aggregateElevationLossReverse:"צבור הפסד גובה לאחור"},chart:{title:"פרופיל גבהים",demResolution:"רזולוצית DEM",elevationTitleTemplate:"גובה ב{0}",distanceTitleTemplate:"מרחק ב{0}",gainLossTemplate:"מינימום:{min}   מקסימום:{max}   התחלה:{start}   סוף:{end}   שינוי:{gainloss}"},errors:{MissingConstructorParameters:"פרמטר בונה חסר.",InvalidConfiguration:"תצורה לא חוקית.",UnableToProcessResults:"לא ניתן לעבד את תוצאות הניתוח.",UnableToNormalizeGeometry:"לא ניתן לנרמל את קלט גיאומטריית הקו",NullGeometry:"קלט גיאומטריית הקו ריק. לא ניתן לעדכן את הפרופיל",InvalidProfileResults:"ב-ProfileChart.update(...)‎ חסר הפרמטר 'profileResults'."}});