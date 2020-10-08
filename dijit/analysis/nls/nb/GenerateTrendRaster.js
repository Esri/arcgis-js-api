// COPYRIGHT © 201 Esri
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

define({toolDefine:"Generer trendraster",outputLayerName:"${layername}_trend",dimensionLabel:"Velg dimensjonen som variabel trend blir analysert langs",variablesLabel:"Velg variabelen(e) for analyse av trend",variablesListLabel:"Variabler [dimensjonsinfo] (beskrivelse)",trendLineTypeLabel:"Velg linjetypen for å tilpasse variable verdier langs en dimensjon",linear:"Lineær",harmonic:"Harmonisk",polynomial:"Polynom",mannKendall:"Mann-Kendall",seasonalKendall:"Sesong-Kendall",seasonalPeriod:"Angi tidsenheten for en sesong",cycleLength:"Spesifiser lengden for harmonisk syklus",cycleUnit:"Velg tidsenhet for harmonisk sykluslengde",years:"År",days:"Dager",months:"Måneder",frequencyLabel:"Angi frekvenstall for den harmoniske trendtilpasningen",polynomialOrderLabel:"Angi polynomisk tallrekkefølge for trendtilpasningen",modelStatistics:"Velg modellstatistikk som skal inkluderes i trendraster",rmse:"RMSE",r2:"determinantkoeffisient",slopePValue:"P-verdi for helningskoeffisient",ignoreNodataLabel:"Ignorer manglende verdier i beregningen",ignore:"Ignorer",analysisLayerLabel:"Velg flerdimensjonalt bildelag for trendanalyse",itemDescription:"Analysebildetjeneste generert fra Generer trendraster",itemTags:"Rasteranalyseresultat, Generer trendraster, ${layername}",itemSnippet:"Analysebildetjeneste generert fra Generer trendraster"});