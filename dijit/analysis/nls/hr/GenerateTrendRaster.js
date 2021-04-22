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

define({toolDefine:"Generiraj raster trenda",outputLayerName:"${layername}_trend",dimensionLabel:"Odaberite dimenziju uz koju će se analizirati promjenjivi trend",variablesLabel:"Odaberite varijablu(e) za analaziranje trenda",variablesListLabel:"Varijable [Podaci o dimenziji] (Opis)",trendLineTypeLabel:"Odaberite vrstu retka kako biste stavili varijabilne vrijednosti uz dimenziju",linear:"Linearno",harmonic:"Harmonijski",polynomial:"Polinomno",mannKendall:"Mann-Kendall",seasonalKendall:"Sezonski-Kendall",seasonalPeriod:"Odredite jedinicu vremena za duljinu sezonskog perioda",cycleLength:"Navedite duljinu harmoničkog ciklusa",cycleUnit:"Odaberite jedinicu vremena duljine harmoničkog ciklusa",years:"Godine",days:"Dani",months:"Mjeseci",frequencyLabel:"Navedite broj frekvencija za uklapanje u harmonijski trend",polynomialOrderLabel:"Navedite redni broj polinoma za podešavanje trenda",modelStatistics:"Odaberite statistike modela koje će biti uključene u raster trenda",rmse:"RMSE",r2:"R na kvadrat",slopePValue:"P vrijednost koeficijenta nagiba",ignoreNodataLabel:"Zanemari vrijednosti koje nedostaju u izračunu",ignore:"Zanemari",analysisLayerLabel:"Odaberite sloj višedimenzionalnih slika za analizu trenda",itemDescription:"Analiza usluge slike generirana iz Generiraj raster trenda",itemTags:"Rezultat analize rastera, Generiraj raster trenda, ${layername}",itemSnippet:"Analiza usluge slike generirana iz Generiraj raster trenda"});