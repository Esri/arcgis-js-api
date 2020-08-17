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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define({toolDefine:"Générer une anomalie multidimensionnelle",outputLayerName:"${layername}_anomalie",variablesLabel:"Choisir la ou les variables pour lesquelles des anomalies seront générées",variablesListLabel:"Variables [Infos de dimension] (Description)",methodLabel:"Choisir la méthode de génération des anomalies",calculationIntervalLabel:"Choisir un intervalle temporel pour calculer la moyenne",differenceFromMean:"Différence par rapport à la moyenne",percentDifferenceFromMean:"Différence en pourcentage par rapport à la moyenne",percentOfMean:"Pourcentage de la moyenne",zScore:"Score Z",differenceFromMedian:"Différence par rapport à la médiane",percentDifferenceFromMedian:"Différence en pourcentage par rapport à la médiane",percentOfMedian:"Pourcentage de la médiane",all:"Tout",yearly:"Annuelle",recurringMonthly:"Récurrence mensuelle",recurringWeekly:"Récurrence hebdomadaire",recurringDaily:"Récurrence quotidienne",hourly:"Par heure",externalRaster:"Raster externe",meanRaster:"Sélectionner la couche d’images de moyenne en tant que référence",ignoreNodataLabel:"Ignorer les valeurs manquantes dans le calcul",ignore:"Ignorer",analysisLayerLabel:"Choisir la couche d’imagerie multidimensionnelle à utiliser pour générer une anomalie",itemDescription:"Service d’analyse d’images généré avec Générer une anomalie multidimensionnelle",itemTags:"Résultat d’analyse raster, Générer une anomalie multidimensionnelle, ${layername}",itemSnippet:"Service d’analyse d’images généré avec Générer une anomalie multidimensionnelle"});
