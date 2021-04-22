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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Профиль рельефа",showMe:"показать",selectLine:"<b>Выберите</b> объект на карте.",popupRequirement:"Примечание: объект должен быть в слое с включенными всплывающими окнами.",digitizeDistanceMeasureTool:"Используйте инструменты группы <b>Измерение</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/ru/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/ru/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Наведите курсор мыши или щелкните график профиля рельефа для отображения высот и местоположений на карте.",directionLabel:"Направление профиля"},buttons:{measureLabel:"Измерение",helpLabel:"Справка",profileForward:"Прямая",profileReverse:"Обратно",flipProfileTitle:"Щелкните, чтобы перевернуть направление профиля",aggregationShowLabel:"Показать информацию об агрегировании",aggregationHideLabel:"Скрыть информацию об агрегировании",aggregateElevationGainForward:"Агрегировать подъем высот вперед",aggregateElevationLossForward:"Агрегировать падение высот вперед",aggregateElevationGainReverse:"Агрегировать подъем высот назад",aggregateElevationLossReverse:"Агрегировать падение высот назад"},chart:{title:"Профиль рельефа",demResolution:"Разрешение ЦМР",elevationTitleTemplate:"Высота в {0}",distanceTitleTemplate:"Расстояние в {0}",gainLossTemplate:"Мин:{min}   Макс:{max}   Начало:{start}   Конец:{end}   Изменено:{gainloss}"},errors:{MissingConstructorParameters:"Пропуск параметра конструктора.",InvalidConfiguration:"Недопустимая конфигурация.",UnableToProcessResults:"Не удалось обработать результаты анализа.",UnableToNormalizeGeometry:"Не удалось нормализовать входную полилинейную геометрию",NullGeometry:"Нулевая входная полилинейная геометрия. Не удалось обновить профиль.",InvalidProfileResults:"ProfileChart.update(...) отсутствует параметр 'profileResults'."}});