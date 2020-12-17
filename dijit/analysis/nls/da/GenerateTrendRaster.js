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

define({toolDefine:"Generer tendensraster",outputLayerName:"${layername}_trend",dimensionLabel:"Vælg den dimension, som variablernes tendens analyseres langs",variablesLabel:"Vælg en eller flere variabler for at analysere tendens",variablesListLabel:"Variabler [Dimension Info] (beskrivelse)",trendLineTypeLabel:"Vælg den type linje, der passer til variablerne langs en dimension",linear:"Lineær",harmonic:"Harmonisk",polynomial:"Polynomial",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Angiver tidsenhed for varigheden af en sæsonbestemt periode.",cycleLength:"Angiv længden af den harmoniske cyklus",cycleUnit:"Vælg tidsenheden for den harmoniske cykluslængde",years:"År",days:"Dage",months:"Måneder",frequencyLabel:"Angiv frekvenstallet for den harmoniske tendenstilpasning",polynomialOrderLabel:"Angiv tallet for den polynomiske rækkefølge for tendenstilpasningen",modelStatistics:"Vælg den modelstatistik, der skal medtages i tendensraster",rmse:"RMSE",r2:"R-kvadratisk",slopePValue:"P-værdi for hældningskoefficient",ignoreNodataLabel:"Ignorér manglende værdier i beregning",ignore:"Ignorér",analysisLayerLabel:"Vælg et flerdimensionalt billedlag for at analysere tendens",itemDescription:"Analysebilledtjeneste genereret ud fra Generer tendensraster",itemTags:"Rasteranalyseresultat, Generer tendensraster, ${layername}",itemSnippet:"Analysebilledtjeneste genereret ud fra Generer tendensraster"});