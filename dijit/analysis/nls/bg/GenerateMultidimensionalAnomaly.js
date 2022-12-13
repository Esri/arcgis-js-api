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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define({toolDefine:"Генериране на многоизмерна аномалия",outputLayerName:"${layername}_anomaly",variablesLabel:"Изберете променлива(и), които ще бъдат генерирани",variablesListLabel:"Променливи [Информация за размерите] (Описание)",methodLabel:"Изберете метод за генериране на аномалия",calculationIntervalLabel:"Изберете времеви интервал, за да изчислите осреднената стойност",differenceFromMean:"Разлика от осреднената стойност",percentDifferenceFromMean:"Процентна разлика от осреднената стойност",percentOfMean:"Процент на осреднена стойност",zScore:"Резултат Z",differenceFromMedian:"Разлика от медиана",percentDifferenceFromMedian:"Процентна разлика от медиана",percentOfMedian:"Процент от медиана",all:"Всички",yearly:"Годишно",recurringMonthly:"Повтаря се месечно",recurringWeekly:"Повтаря се седмично",recurringDaily:"Повтаря се ежедневно",hourly:"Ежечасно",externalRaster:"Външен растер",meanRaster:"Изберете среден слой изображения като справка",ignoreNodataLabel:"Игнорирайте липсващите стойности при изчислението",ignore:"Игнорирайте",analysisLayerLabel:"Изберете слой с многоизмерни изображения, за да генерирате аномалия",itemDescription:"Услуга за анализ на изображения, генерирана от Генериране на многоизмерна аномалия",itemTags:"Резултат от растерния анализ, генериране на многоизмерна аномалия, ${layername}",itemSnippet:"Услуга за анализ на изображения, генерирана от Генериране на многоизмерна аномалия"});