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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"الملف التعريفي للارتفاع",showMe:"عرض",selectLine:"<b>حدد</b> معلم في الخريطة.",popupRequirement:"ملاحظة: يجب وجود المعلم في طبقة مع تعطيل العناصر المنبثقة.",digitizeDistanceMeasureTool:"استخدم <b>أدوات</b> قياس.",selectFeatureHelpUrl:"http://help.arcgis.com/ar/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/ar/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"التحويم فوق مخطط الملف التعريفي للارتفاع أو لمسه لعرض الارتفاعات وعرض المواقع على الخريطة.",directionLabel:"اتجاه الملف التعريفي"},buttons:{measureLabel:"قياس",helpLabel:"تعليمات",profileForward:"للأمام",profileReverse:"عكس",flipProfileTitle:"انقر لانعكاس اتجاه الملف التعريفي",aggregationShowLabel:"إظهار معلومات التجميع",aggregationHideLabel:"إخفاء معلومات التجميع",aggregateElevationGainForward:"توجيه الحصول على تجميع الارتفاع للأمام",aggregateElevationLossForward:"توجيه فقدان تجميع الارتفاع للأمام",aggregateElevationGainReverse:"انعكاس الحصول على تجميع الارتفاع",aggregateElevationLossReverse:"انعكاس فقدان تجميع الارتفاع"},chart:{title:"الملف التعريفي للارتفاع",demResolution:"دقة DEM",elevationTitleTemplate:"الارتفاع بـ {0}",distanceTitleTemplate:"المسافة بـ {0}",gainLossTemplate:"الحد الأدنى:{min}   الحد الأقصى:{max}   البداية:{start}   النهاية:{end}   تغيير:{gainloss}"},errors:{MissingConstructorParameters:"يوجد معطى مفقود في المنشئ.",InvalidConfiguration:"تكوين غير صحيح.",UnableToProcessResults:"يتعذر معالجة نتائج التحليلات.",UnableToNormalizeGeometry:"يتعذر تقليل تكرار إدخال شكل هندسي متعدد الخطوط",NullGeometry:"الشكل الهندسي متعدد الخطوط للمدخلات فارغ. يتعذر تحديث الملف التعريفي",InvalidProfileResults:"فقدان ProfileChart.update(...) معلمة 'profileResults'."}});