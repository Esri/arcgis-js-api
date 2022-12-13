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

define({toolDefine:"Ustvari raster trenda",outputLayerName:"${layername}_trend",dimensionLabel:"Izberite dimnezijo vzdolž katere bo potekala analiza trenda spremenljivke",variablesLabel:"Izberite spremenljivko(-e) za analizo trenda",variablesListLabel:"Spremenljivke [Informacije dimenzije] (opis)",trendLineTypeLabel:"Izberite vrsto linije za prilagoditev vrednosti spremenljivke vzdolž dimenzije",linear:"Linearno",harmonic:"Harmonično",polynomial:"Polinomno",mannKendall:"Mann-Kendall test",seasonalKendall:"Seasonal-Kendall test",seasonalPeriod:"Določite časovno enoto, uporabljeno za dolžino sezonskega obdobja",cycleLength:"Določite dolžino harmoničnega cikla",cycleUnit:"Izberite časovno enoto dolžine harmoničnega cikla",years:"Leta",days:"Dni",months:"Meseci",frequencyLabel:"Določite številko pogostosti za harmonično prilagajanje trenda",polynomialOrderLabel:"Določite polinomno številko vrstnega reda za prilagajanje trenda",modelStatistics:"Izberite statistiko modela, ki bo vključena v raster trenda",rmse:"RMSE",r2:"R-kvadrat",slopePValue:"P-vrednost koeficienta naklona",ignoreNodataLabel:"Prezri manjkajoče vrednosti v izračunu",ignore:"Prezri",analysisLayerLabel:"Izberite večdimenzionalni slikovni sloj za analizo trenda",itemDescription:"Analiza slikovne storitve, ustvarjena iz Ustvari raster trenda",itemTags:"Rezultati rastrske analize, Ustvari raster trenda, ${layername}",itemSnippet:"Analiza slikovne storitve, ustvarjena iz Ustvari raster trenda"});