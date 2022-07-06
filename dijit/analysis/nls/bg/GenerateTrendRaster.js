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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({toolDefine:"Генериране на Тренд растер",outputLayerName:"${layername}_тенденция",dimensionLabel:"Изберете размер, по който ще се анализира променливата тенденция",variablesLabel:"Изберете променлива (и), за да анализирате тенденцията",variablesListLabel:"Променливи [Информация за размерите] (Описание)",trendLineTypeLabel:"Изберете типа линия, за да пасне на променливите стойности по размер",linear:"Линейна",harmonic:"Хармонична",polynomial:"Полиномиална",mannKendall:"Ман-Кендъл",seasonalKendall:"Сезонен-Кендъл",seasonalPeriod:"Посочете единицата време за продължителността на сезонен период",cycleLength:"Посочете дължината на хармоничния цикъл",cycleUnit:"Изберете единица време за дължина на хармоничния цикъл",years:"Години",days:"Дни",months:"Месеци",frequencyLabel:"Посочете номера на честотата за хармоничното регулиране на тенденцията",polynomialOrderLabel:"Посочете полиномиалния номер на поръчката за регулиране на тенденцията",modelStatistics:"Изберете статистика на модела, която да бъде включена в тенденционен растер",rmse:"RMSE",r2:"R-квадрат",slopePValue:"P-стойност на коефициент на наклон",ignoreNodataLabel:"Игнорирайте липсващите стойности при изчислението",ignore:"Игнорирайте",analysisLayerLabel:"Изберете слой с многоизмерни изображения, за да анализирате тенденцията",itemDescription:"Услуга за анализ на изображения, генерирана от Генериране на тенденционен растер",itemTags:"Резултат от растерния анализ, Генериране на тенденционен растер, ${layername}",itemSnippet:"Услуга за Анализ на изображения, генерирана от Генериране на тенденционен растер"});