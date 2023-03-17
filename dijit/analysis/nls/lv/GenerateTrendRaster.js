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

define({toolDefine:"Ģenerēt Tendenču rastru",outputLayerName:"${layername}_trend",dimensionLabel:"Izvēlieties dimensiju, gar kuru tiks analizētas mainīgo tendences",variablesLabel:"Izvēlieties mainīgo(-s), lai analizētu tendences",variablesListLabel:"Mainīgie [Izmēru informācija] (Apraksts)",trendLineTypeLabel:"Izvēlieties līnijas veidu, kas atbilstu mainīgo vērtībām gar izvēlēto dimensiju",linear:"Lineāra",harmonic:"Harmoniska",polynomial:"Polinoma",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Norādiet laika mērvienību sezonas perioda ilgumam",cycleLength:"Norādiet harmoniskā cikla garumu",cycleUnit:"Izvēlieties harmoniskā cikla garuma laika vienību",years:"Gadi",days:"Dienas",months:"Mēneši",frequencyLabel:"Norādiet frekvences skaitli harmoniskās tendences pielāgošanai",polynomialOrderLabel:"Norādiet polinoma kārtas skaitli, lai pielāgotu tendences",modelStatistics:"Izvēlieties modeļa statistiku, kas jāiekļauj tendenču rastrā",rmse:"RMSE",r2:"R kvadrātā",slopePValue:"Slīpuma koeficienta p vērtība",ignoreNodataLabel:"Ignorēt aprēķinā trūkstošās vērtības",ignore:"Ignorēt",analysisLayerLabel:"Lai analizētu tendences, izvēlieties multidimensionālu attēlu slāni",itemDescription:"Analīzes attēlu serviss ,kas ģenerēts no Ģenerēt tendenču rastru",itemTags:"Rastra analīzes rezultāts, Ģenerēt tendenču rastru ${layername}",itemSnippet:"Analīzes attēlu serviss, kas ģenerēts no Ģenerēt tendenču rastru"});