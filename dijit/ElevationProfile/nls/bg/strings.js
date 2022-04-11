// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Профил на кота",showMe:"покажи ми",selectLine:"<b>Изберете</b> обект на картата.",popupRequirement:"ЗАБЕЛЕЖКА: обектът трябва да е в слой с активирани изскачащи прозорци.",digitizeDistanceMeasureTool:"Изберете <b>инструменти</b> за измерване.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Задръжте курсора на мишката или докоснете диаграмата на профила на височината, за да покажете коти и да покажете местоположението на картата.",directionLabel:"Посока на профил"},buttons:{measureLabel:"Измерване",helpLabel:"Помощ",profileForward:"Напред",profileReverse:"Обръщане",flipProfileTitle:"Щракнете, за да обърнете посоката на профила",aggregationShowLabel:"Показване на обобщена информация",aggregationHideLabel:"Скриване на обобщена информация",aggregateElevationGainForward:"Придвижете напред Обобщената кота",aggregateElevationLossForward:"Загуба напред на обобщена кота",aggregateElevationGainReverse:"Обратно връщане на Обобщена кота",aggregateElevationLossReverse:"Обратна загуба на надморска височина"},chart:{title:"Профил на кота",demResolution:"DEM резолюция",elevationTitleTemplate:"Кота в {0}",distanceTitleTemplate:"Разстояние в {0}",gainLossTemplate:"Мин.:{min} Макс.:{max} Начало:{start} Край:{end} Промяна:{gainloss}"},errors:{MissingConstructorParameters:"Липсващ параметър на конструктор.",InvalidConfiguration:"Невалидна конфигурация.",UnableToProcessResults:"Резултатите от анализа не могат да бъдат обработени.",UnableToNormalizeGeometry:"Не може да се нормализира геометрията на входната полилиния",NullGeometry:"Геометрията на входната полилиния е нулева. Профилът не може да се обнови",InvalidProfileResults:"ProfileChart.обновяване (...) липсва параметър 'profileResults'."}});