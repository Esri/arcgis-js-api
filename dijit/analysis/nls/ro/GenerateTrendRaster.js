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

define({toolDefine:"Generarea Rasterului de Tendințe",outputLayerName:"${layername}_trend",dimensionLabel:"Alegeți dimensiunea pe care va fi analizată fiecare tendință a variabilelor",variablesLabel:"Alegeți variabilele pentru a analiza tendința",variablesListLabel:"Variabile [informații dimensiuni] (Descriere)",trendLineTypeLabel:"Alegeți tipul liniei care să corespundă valorilor variabilelor pe o dimensiune",linear:"Liniar",harmonic:"Armonică",polynomial:"Polinomial",mannKendall:"Mann-Kendall",seasonalKendall:"Sezonier-Kendall",seasonalPeriod:"Specificați unitatea de timp pentru durata unei perioade sezoniere",cycleLength:"Specificați lungimea ciclului armonic",cycleUnit:"Alegeți unitatea de timp a lungimii ciclului armonic",years:"Ani",days:"Zile",months:"Luni",frequencyLabel:"Specificați numărul frecvenței pentru fixarea tendinței armonice",polynomialOrderLabel:"Specificați numărul ordinului polinomial pentru fixarea tendinței",modelStatistics:"Alegeți statisticile model de inclus în rasterul de tendință",rmse:"RMSE",r2:"R la pătrat",slopePValue:"Valoare P a coeficientului de pantă",ignoreNodataLabel:"Ignorare valori lipsă în calcul",ignore:"Ignorare",analysisLayerLabel:"Alegeți stratul tematic de imagini multidimensionale pentru a analiza tendința",itemDescription:"Serviciu de imagini de analiză generat din Generare raster de tendințe",itemTags:"Rezultat analiză raster, Generare raster de tendințe, ${layername}",itemSnippet:"Serviciu de imagini de analiză generat din Generare raster de tendințe"});