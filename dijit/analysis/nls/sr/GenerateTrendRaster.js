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

define({toolDefine:"Kreiranje trenda rastera",outputLayerName:"${layername}_trend",dimensionLabel:"Izaberite dimenzije uz čiju će se promenljivu analizirati trend",variablesLabel:"Izaberite promenljivu(e) za analizu trenda",variablesListLabel:"Promenljive [Informacije za dimenziju] (Opis)",trendLineTypeLabel:"Izaberite tip linije koja odgovara promenljivim vrednostima uz dimenziju",linear:"Linearno",harmonic:"Harmonizovano",polynomial:"Polinomno",mannKendall:"Mann-Kendall",seasonalKendall:"Sezonski-Kendall",seasonalPeriod:"Navedite vremensku jedinicu za tužinu perioda sezone",cycleLength:"Navedite dužinu harmoničnog ciklusa",cycleUnit:"Izaberite vremensku jedinicu za dužinu harmoničnog ciklusa",years:"Godine",days:"Dani",months:"Meseci",frequencyLabel:"Navedite broj frekvencije za harmonizovano uklapanje trenda",polynomialOrderLabel:"Izaberite polinomijalni redni broj za uklapanje trenda",modelStatistics:"Izaberite model statistike koji će biti uključen u raster trenda",rmse:"RMSE",r2:"R-kvadrat",slopePValue:"P-vrednost koeficijenta nagiba",ignoreNodataLabel:"Ignoriši nedostajuće vrednosti u izračunavanju",ignore:"Zanemari",analysisLayerLabel:"Izaberite višedimenzionalne slojeve snimaka za analizu trenda",itemDescription:"Servis za analizu snimka kreiran iz Kreiranja rastera trenda",itemTags:"Raster analize rezultata, Kreiranje rastera trenda, ${layername}",itemSnippet:"Servis za analizu snimka generisan je iz Kreiranja trenda rastera"});