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

define({toolDefine:"Generovať raster trendov",outputLayerName:"${layername}_trend",dimensionLabel:"Vybrať rozmer, podľa ktorého sa bude analyzovať trend premennej",variablesLabel:"Vybrať premenné na analýzu trendu",variablesListLabel:"Premenné [informácie o rozmere] (Opis)",trendLineTypeLabel:"Vybrať typ línie, ktorý sa prispôsobí premenným hodnotám pozdĺž prvku",linear:"Lineárny",harmonic:"Harmonický",polynomial:"Polynomický",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Špecifikovať časovú jednotku pre dĺžku sezónneho obdobia",cycleLength:"Špecifikovať dĺžku harmonického cyklu",cycleUnit:"Vybrať jednotku času dĺžky harmonického cyklu",years:"Roky",days:"Dni",months:"Mesiace",frequencyLabel:"Špecifikovať počet frekvencií pre harmonické prispôsobenie trendu",polynomialOrderLabel:"Špecifikovať stupeň polynómu pre prispôsobenie trendu",modelStatistics:"Vybrať štatistiky modelu, ktoré majú byť zahrnuté v rastri trendu",rmse:"Stredná kvadratická chyba",r2:"Koeficient determinácie",slopePValue:"P-hodnota koeficientu sklonu",ignoreNodataLabel:"Ignorovať vo výpočte chýbajúce hodnoty",ignore:"Ignorovať",analysisLayerLabel:"Vyberte vrstvu viacrozmerných snímok pre analýzu trendu",itemDescription:"Analýza obrazovej služby generovaná nástrojom Generovať raster trendov",itemTags:"Výsledok rastrovej analýzy, Generovať raster trendov, ${layername}",itemSnippet:"Analýza obrazovej služby generovaná nástrojom Generovať raster trendov"});