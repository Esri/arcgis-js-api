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

define({toolDefine:"Générer un raster de tendance",outputLayerName:"${layername}_trend",dimensionLabel:"Choisir la dimension le long de laquelle les tendances de la variable seront analysées",variablesLabel:"Choisir la ou les variables dont les tendances doivent être analysées",variablesListLabel:"Variables [Informations de dimension] (Description)",trendLineTypeLabel:"Choisir le type de ligne à utiliser pour ajuster les valeurs de variable le long d’une dimension",linear:"Linéaire",harmonic:"Harmonique",polynomial:"Polynomial",mannKendall:"Mann-Kendall",seasonalKendall:"Kendall saisonnier",seasonalPeriod:"Indiquez l’unité de temps de la durée d’une saison.",cycleLength:"Spécifier la durée du cycle harmonique",cycleUnit:"Sélectionner l’unité de temps de la durée du cycle harmonique",years:"Années",days:"Jours",months:"Mois",frequencyLabel:"Spécifier le numéro de fréquence pour l’ajustement de tendance harmonique",polynomialOrderLabel:"Spécifier le numéro d’ordre polynomial pour l’ajustement de tendance",modelStatistics:"Sélectionner les statistiques du modèle à inclure dans le raster de tendance",rmse:"EQM",r2:"R-carré",slopePValue:"Valeur P du coefficient de pente",ignoreNodataLabel:"Ignorer les valeurs manquantes dans le calcul",ignore:"Ignorer",analysisLayerLabel:"Choisir la couche d’imagerie multidimensionnelle pour l’analyse des tendances",itemDescription:"Service d’imagerie d’analyse généré avec Générer un raster de tendance",itemTags:"Résultat d’analyse raster, Générer un raster de tendance, ${layername}",itemSnippet:"Service d’imagerie d’analyse généré avec Générer un raster de tendance"});