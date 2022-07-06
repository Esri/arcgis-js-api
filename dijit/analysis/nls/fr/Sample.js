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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define({toolDefine:"Échantillon",outputLayerName:"${layername}_sampled",locationLayer:"Choisir la couche de localisants",uniqueIDField:"Spécifier un champ d’ID unique",acquisitionDefinition:"Spécifier les informations d’acquisition des données de localisation (facultatif)",acquisitionDimension:"Spécifier les dimensions et le format des informations d’acquisition (facultatif)",buffer:"Spécifier le champ ou la valeur de distance de la zone tampon",formatOptions:"Options de format",dimensionField:"Champ ou valeur de dimension",dimensionFieldOrValue:"Champ ou valeur de dimension",relativeDaysBefore:"Valeur relative avant",relativeDaysAfter:"Valeur relative après",singleFieldOrValue:"Champ ou valeur unique",singleFieldWithRelativeValues:"Champ ou valeur unique avec des valeurs relatives",startEndFieldsOrValues:"Champs ou valeurs de début et de fin",startFieldOrValue:"Champ ou valeur de début",endFieldOrValue:"Champ ou valeur de fin",statisticsType:"Choisir le type de statistiques",percentile:"Centile",percentileValue:"Valeur de centile",resample:"Spécifier la méthode de rééchantillonnage",nearest:"Le plus proche",bilinear:"Bilinéaire",cubic:"Cubique",outputLayout:"Spécifier la couche en sortie",layoutRow:"Les valeurs échantillonnées apparaissent en ligne",layoutColumn:"Les valeurs échantillonnées apparaissent en colonne",outputType:"Spécifier le type en sortie",features:"Entités",table:"Table",removeLayer:"Supprimer la couche",dimensionError:"Impossible de charger les informations de dimension. Toutes les variables doivent avoir les mêmes dimensions",analysisLayerLabel:"Sélectionner les couches d’images à échantillonner",itemDescription:"Service d’imagerie d’analyse généré à partir de l’échantillonnage",itemTags:"Résultat d’analyse raster, Échantillonnage, ${layername}",itemSnippet:"Service d’imagerie d’analyse généré à partir de l’échantillonnage"});