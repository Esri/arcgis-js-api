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

define({toolDefine:"Trendraszter létrehozása",outputLayerName:"${layername}_trend",dimensionLabel:"Válassza ki azt a dimenziót, amelyek mentén a változótendencia elemzése történik majd",variablesLabel:"Trendelemzésre használni kívánt változó(k) kiválasztása",variablesListLabel:"Változók [Dimenzióadatok] (Leírás)",trendLineTypeLabel:"Válassza ki azt a vonaltípust, amihez egy dimenzió mentén a változóértékek illesztve lesznek",linear:"Lineáris",harmonic:"Harmonikus",polynomial:"Polinom",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Adja meg a szezonális időszak időegységét",cycleLength:"Adja meg a harmonikus periódus hosszát",cycleUnit:"Válassza ki a harmonikus periódus hosszának időegységét",years:"Év",days:"nap(ok)",months:"Hónap",frequencyLabel:"Adja meg a harmonikus trendillesztés frekvenciaszámát",polynomialOrderLabel:"Adja meg a trendillesztés polinóm sorszámát",modelStatistics:"Válassza ki a trendraszterbe felvenni kívánt modellstatisztikát",rmse:"RMSE",r2:"R-négyzet",slopePValue:"Lejtési együttható p értéke",ignoreNodataLabel:"Hiányzó értékek figyelmen kívül hagyása a számításban",ignore:"Figyelmen kívül hagy",analysisLayerLabel:"Többdimenziós képréteg választása a trendelemzéshez",itemDescription:"A trendraszter-generálásból létrehozott elemzési képszolgáltatás",itemTags:"Raszteres elemzés végeredménye, Trendraszter generálása, ${layername}",itemSnippet:"A trendraszter-generálásból létrehozott elemzési képszolgáltatás"});