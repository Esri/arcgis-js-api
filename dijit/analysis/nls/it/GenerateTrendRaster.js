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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define({toolDefine:"Genera raster di tendenza",outputLayerName:"${layername}_trend",dimensionLabel:"Scegli dimensione lungo la quale verrà analizzata la tendenza delle variabili",variablesLabel:"Scegli variabili per analizzare tendenza",variablesListLabel:"Variabili [Informazioni dimensione] (Descrizione)",trendLineTypeLabel:"Scegli il tipo di linea per inserire i valori delle variabili lungo una dimensione",linear:"Lineare",harmonic:"Armonica",polynomial:"Polinomiale",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Specificare l'unità di tempo per la durata di un periodo stagionale",cycleLength:"Specificare la lunghezza del ciclo armonico",cycleUnit:"Scegliere l'unità di tempo della lunghezza del ciclo armonico",years:"Anni",days:"Giorni",months:"Mesi",frequencyLabel:"Specifica il numero di frequenza per l'adattamento delle tendenze armoniche",polynomialOrderLabel:"Specifica il numero dell'ordine polinomiale per l'adattamento delle tendenze",modelStatistics:"Scegliere le statistiche del modello da includere nel raster di tendenza",rmse:"RMSE",r2:"quadrato a R",slopePValue:"Valore P del coefficiente di pendenza",ignoreNodataLabel:"Ignora valori mancanti nei calcoli",ignore:"Ignora",analysisLayerLabel:"Scegli layer immagini multidimensionale per analizzare tendenza",itemDescription:"Image service di analisi generato da Genera raster di tendenza",itemTags:"Risultato dell'analisi raster, Genera raster di tendenza, ${layername}",itemSnippet:"Image service di analisi generato da Genera raster di tendenza"});