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

define({toolDefine:"Genera el ràster de tendència",outputLayerName:"${layername}_trend",dimensionLabel:"Trieu la dimensió amb què s'analitzarà la tendència de la variable",variablesLabel:"Trieu les variables de les quals voleu analitzar la tendència",variablesListLabel:"Variables [informació de la dimensió] (descripció)",trendLineTypeLabel:"Trieu el tipus de línea per ajustar els valors amb una dimensió",linear:"Lineal",harmonic:"Harmònic",polynomial:"Polinomial",mannKendall:"Mann-Kendall",seasonalKendall:"Estacional-Kendall",seasonalPeriod:"Especifiqueu la unitat de temps per a la durada del període estacional",cycleLength:"Especifiqueu la durada del cicle harmònic",cycleUnit:"Trieu la unitat de temps de la durada del cicle harmònic",years:"Anys",days:"Dies",months:"Mesos",frequencyLabel:"Especifiqueu el nombre de freqüència de l'ajust de tendència harmònic",polynomialOrderLabel:"Especifiqueu el nombre d'ordre de polinomi de l'ajust de tendència",modelStatistics:"Trieu les estadístiques del model que s'inclouran al ràster de tendència",rmse:"RMSE",r2:"R quadrat",slopePValue:"Valor P del coeficient de pendent",ignoreNodataLabel:"Ignora els valors que falten al càlcul",ignore:"Ignora",analysisLayerLabel:"Trieu la capa d'imatges multidimensionals per analitzar la tendència",itemDescription:"Servei d'imatges d'anàlisi generat des de Genera el ràster de tendència",itemTags:"Resultat de l'anàlisi del ràster, Genera el ràster de tendència, ${layername}",itemSnippet:"Servei d'imatges d'anàlisi generat des de Genera el ràster de tendència"});