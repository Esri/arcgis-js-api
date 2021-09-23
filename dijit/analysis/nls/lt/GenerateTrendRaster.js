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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({toolDefine:"Generuoti tendencijų rastrą",outputLayerName:"${layername}_trend",dimensionLabel:"Pasirinkti matmenį, pagal kurį bus analizuojamos kintamųjų tendencijos",variablesLabel:"Pasirinkti kintamąjį (kintamuosius), kurio (kurių) tendencijos bus analizuojamos",variablesListLabel:"Kintamųjų [matmens informacija] (aprašas)",trendLineTypeLabel:"Pasirinkti linijos, kuri bus naudojama pagal matmenį talpinti kintamųjų reikšmes, tipą",linear:"Linijinis",harmonic:"Harmoninis",polynomial:"Daugianaris",mannKendall:"Mann-Kendall",seasonalKendall:"Sezoninis-Kendall",seasonalPeriod:"Nurodykite sezono laikotarpio ilgio laiko matavimo vienetą",cycleLength:"Nurodykite harmoninio ciklo trukmę",cycleUnit:"Pasirinkite harmoninio ciklo trukmės laiko vienetą",years:"Metai",days:"Dienos",months:"Mėnesiai",frequencyLabel:"Nurodyti harmoninio tendencijų talpinimo dažnio skaičių",polynomialOrderLabel:"Nurodyti tendencijų talpinimo daugianario laipsnio skaičių",modelStatistics:"Pasirinkite modelio statistinius rodiklius, kurie bus įtraukti į tendencijų rastrą",rmse:"RMSE",r2:"R kvadratu",slopePValue:"Nuolydžio koeficiento P reikšmė",ignoreNodataLabel:"Nepaisyti trūkstamų reikšmių skaičiuojant",ignore:"Ignoruoti",analysisLayerLabel:"Pasirinkti daugiamatį vaizdų sluoksnį, kurio tendencijos bus analizuojamos",itemDescription:"Analizės vaizdo paslauga, sugeneruota panaudojus Generuoti tendencijų rastrą",itemTags:"Rastro analizės rezultatas, Generuoti tendencijų rastrą, ${layername}",itemSnippet:"Analizės vaizdo paslauga, sugeneruota panaudojus Generuoti tendencijų rastrą"});