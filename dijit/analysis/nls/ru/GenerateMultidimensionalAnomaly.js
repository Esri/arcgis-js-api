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

define({toolDefine:"Создать многомерную аномалию",outputLayerName:"${layername}_anomaly",variablesLabel:"Выберите переменные, для которых будут сгенерированы аномалии",variablesListLabel:"Переменные [Dimension Info] (Описание)",methodLabel:"Выбрать метод генерирования аномалии",calculationIntervalLabel:"Выбрать временной интервал для вычисления среднего",differenceFromMean:"Отличие от среднего",percentDifferenceFromMean:"Процентное отличие от среднего",percentOfMean:"Процент от среднего",zScore:"Z-Оценка",differenceFromMedian:"Отличие от медианы",percentDifferenceFromMedian:"Процентное отличие от медианы",percentOfMedian:"Процент от медианы",all:"Все",yearly:"Ежегодно",recurringMonthly:"Через каждый месяц",recurringWeekly:"Через каждую неделю",recurringDaily:"Через каждый день",hourly:"Каждый час",externalRaster:"Внешний растр",meanRaster:"Выбрать слой изображений среднего в качестве базового",ignoreNodataLabel:"Игнорировать пропущенные значения при вычислениях",ignore:"Игнорировать",analysisLayerLabel:"Выбрать слой многомерных изображений для генерирования аномалии",itemDescription:"Сервис анализа изображений, полученный после запуска Создать многомерную аномалию",itemTags:"Результат анализа растра, Создать многомерную аномалию, ${layername}",itemSnippet:"Сервис анализа изображений, полученный после запуска Создать многомерную аномалию"});