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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({toolDefine:"Generera trendraster",outputLayerName:"${layername}_trend",dimensionLabel:"Välj dimension längs vilken variabeltrenden ska analyseras",variablesLabel:"Välj variabel/variabler för att analysera trend",variablesListLabel:"Variabler [Dimensionsinformation] (Beskrivning)",trendLineTypeLabel:"Välj typ av linje för att anpassa variabelvärden längs en dimension",linear:"Linjär",harmonic:"Harmonisk",polynomial:"Polynom",mannKendall:"Mann-Kendall",seasonalKendall:"Säsongsbaserad Kendall",seasonalPeriod:"Ange tidsenhet för längden på säsongsperioden",cycleLength:"Ange längden på harmonisk cykel",cycleUnit:"Välj tidsenhet för längden på harmonisk cykel",years:"År",days:"Dagar",months:"Månader",frequencyLabel:"Ange frekvensnumret för den harmoniska trendanpassningen",polynomialOrderLabel:"Ange polynomordningstalet för trendanpassningen",modelStatistics:"Välj modellstatistik som ska inkluderas i trendraster",rmse:"RMSE",r2:"R-kvadrat",slopePValue:"P-värde hos lutningskoefficient",ignoreNodataLabel:"Ignorera saknade värden i beräkningen",ignore:"Ignorera",analysisLayerLabel:"Välj flerdimensionellt bildlager för att analysera trend",itemDescription:"Analysbildtjänst genererad från Generera trendraster",itemTags:"Rasteranalysresultat, Generera trendraster, ${layername}",itemSnippet:"Analysbildtjänst genererad från Generera trendraster"});