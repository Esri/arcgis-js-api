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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Elevation Profile",showMe:"показати мені",selectLine:"<b>Виберіть</b> об'єкт на карті.",popupRequirement:"ПРИМІТКА: об'єкт має знаходитись в шарі з активованими спливаючими елементами.",digitizeDistanceMeasureTool:"Скористайтесь інструментами <b>Вимірювання</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Наведіть курсор або доторкніться до діаграми Elevation Profile, щоб відобразити висоту та показати місце розташування на карті.",directionLabel:"Напрямок профілю"},buttons:{measureLabel:"Виміряти",helpLabel:"Довідка",profileForward:"Вперед",profileReverse:"Повернути у зворотньому напрямку",flipProfileTitle:"Клацніть, щоб змінити напрямок профілю на зворотний.",aggregationShowLabel:"Показати інформацію агрегування",aggregationHideLabel:"Приховати інформацію агрегування",aggregateElevationGainForward:"Агрегувати збільшення висоти вперед",aggregateElevationLossForward:"Агрегувати зменшення висоти вперед",aggregateElevationGainReverse:"Агрегувати збільшення висоти назад",aggregateElevationLossReverse:"Агрегувати зменшення висоти назад"},chart:{title:"Elevation Profile",demResolution:"Роздільна здатність ЦМР",elevationTitleTemplate:"Висота в {0}",distanceTitleTemplate:"Відстань в {0}",gainLossTemplate:"Мін.: {min}   Макс.: {max}   Початок: {start}   Кінець: {end}   Змінити:{gainLoss}"},errors:{MissingConstructorParameters:"Відсутній параметр конструктору.",InvalidConfiguration:"Неприпустима конфігурація.",UnableToProcessResults:"Не вдалося обробити результати аналізу.",UnableToNormalizeGeometry:"Не вдалося нормалізувати вхідну геометрію поліліній.",NullGeometry:"Вхідна геометрія поліліній має значення null. Не вдалося оновити профіль",InvalidProfileResults:"У ProfileChart.update(...) відсутній параметр 'profileResults'."}});