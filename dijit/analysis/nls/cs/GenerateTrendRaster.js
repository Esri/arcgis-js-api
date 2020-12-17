// COPYRIGHT © 2020 Esri
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

define({toolDefine:"Generovat rastr trendu",outputLayerName:"${layername}_trend",dimensionLabel:"Vyberte rozměr, podle něhož bude analyzován trend proměnných",variablesLabel:"Vyberte proměnné k analýze trendu",variablesListLabel:"Proměnné [Informace o rozměrech] (Popis)",trendLineTypeLabel:"Vyberte typ linie, který odpovídá hodnotám proměnných dle rozměru",linear:"Přímá",harmonic:"Harmonická",polynomial:"Polynomická",mannKendall:"Mann-Kendall",seasonalKendall:"Sezónní Kendall",seasonalPeriod:"Určete jednotku času pro délku sezónního období.",cycleLength:"Určete délku harmonického cyklu",cycleUnit:"Určete časovou jednotku délky harmonického cyklu",years:"Roky",days:"Dny",months:"Měsíce",frequencyLabel:"Zadejte číslo frekvence pro harmonický trend",polynomialOrderLabel:"Zadejte číslo řádu polynomu pro polynomický trend",modelStatistics:"Zvolte statistiky modelu, které mají být zahrnuty v rastru trendu",rmse:"RMSE",r2:"R-squared",slopePValue:"P-hodnota koeficientu sklonu",ignoreNodataLabel:"Ignorovat při výpočtu chybějící hodnoty",ignore:"Ignorovat",analysisLayerLabel:"Vyberte vrstvu vícerozměrných snímků pro analýzu trendu",itemDescription:"Image služba analýzy vytvořená nástrojem Generovat rastr trendu",itemTags:"Výsledek analýzy rastru, Generovat rastr trendu, ${layername}",itemSnippet:"Image služba analýzy vytvořená nástrojem Generovat rastr trendu"});