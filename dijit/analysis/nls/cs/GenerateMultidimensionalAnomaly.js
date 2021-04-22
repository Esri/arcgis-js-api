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

define({toolDefine:"Generovat vícerozměrnou anomálii (Generate Multidimensional Anomaly)",outputLayerName:"${layername}_anomaly",variablesLabel:"Vyberte proměnnou (proměnné), u kterých se budou generovat anomálie",variablesListLabel:"Proměnné [informace o rozměrech] (popis)",methodLabel:"Vyberte metodu generování anomálie",calculationIntervalLabel:"Zvolte časový interval pro výpočet střední hodnoty",differenceFromMean:"Rozdíl od střední hodnoty",percentDifferenceFromMean:"Procentuální rozdíl od střední hodnoty",percentOfMean:"Procento střední hodnoty",zScore:"Z-skóre",differenceFromMedian:"Rozdíl od mediánu",percentDifferenceFromMedian:"Procentuální rozdíl od mediánu",percentOfMedian:"Procento mediánu",all:"Vše",yearly:"Ročně",recurringMonthly:"Opakující se jednou za měsíc",recurringWeekly:"Opakující se jednou za týden",recurringDaily:"Opakující se denně",hourly:"Každou hodinu",externalRaster:"Externí rastr",meanRaster:"Vyberte vrstvu obrazových dat střední hodnoty jako referenční",ignoreNodataLabel:"Ignorovat při výpočtu chybějící hodnoty",ignore:"Ignorovat",analysisLayerLabel:"Vyberte vrstvu vícerozměrných snímků, u které chcete generovat anomálii.",itemDescription:"Analytická image služba vygenerovaná nástrojem Generovat vícerozměrnou anomálii",itemTags:"Výsledek analýzy rastru, generovat vícerozměrnou anomálii, ${layername}",itemSnippet:"Analytická image služba vygenerovaná nástrojem Generovat vícerozměrnou anomálii"});