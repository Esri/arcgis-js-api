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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({toolDefine:"Згенерувати растр тренду",outputLayerName:"${layername}_тренд",dimensionLabel:"Вибрати вимір, за яким буде аналізовано тренд змінних",variablesLabel:"Вибрати змінну(-і) для аналізу тренду",variablesListLabel:"Змінні [інформація про вимір] (опис)",trendLineTypeLabel:"Вибрати тип лінії для підбору значень змінних вздовж виміру",linear:"Лінійний",harmonic:"Гармонічний",polynomial:"Поліноміальний",mannKendall:"Манн-Кендалл",seasonalKendall:"Сезонний-Кендалл",seasonalPeriod:"Вкажіть одиницю часу для тривалості сезонного періоду",cycleLength:"Вкажіть довжину гармонічного циклу",cycleUnit:"Виберіть одиницю часу довжини гармонічного циклу",years:"Роки",days:"Днів",months:"Місяці",frequencyLabel:"Вкажіть номер частоти для підбору гармонічного тренду",polynomialOrderLabel:"Вкажіть номер поліноміального порядку для підбору тренду",modelStatistics:"Виберіть статистику моделі для растра тренду",rmse:"Середньоквадратична помилка (RMSE)",r2:"R-квадрат",slopePValue:"P-значення коефіцієта ухилу",ignoreNodataLabel:"Ігнорувати відсутні значення в обчисленні",ignore:"Ігнорувати",analysisLayerLabel:"Вибрати багатовимірний шар зображень для аналізу тренду",itemDescription:"Аналітичний сервіс зображень, згенерований за допомогою інструменту «Згенетувати растр тренду»",itemTags:"Результат растрового аналізу, Згенерувати растр тренду, ${layername}",itemSnippet:"Аналітичний сервіс зображень, згенерований за допомогою інструменту «Згенетувати растр тренду»"});