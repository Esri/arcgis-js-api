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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Profil d’élévation",showMe:"me montrer",selectLine:"<b>Sélectionnez</b> une entité dans la carte.",popupRequirement:"REMARQUE : l’entité doit être dans une couche dans laquelle les fenêtres contextuelles sont activées.",digitizeDistanceMeasureTool:"Utilisez les outils <b>Mesure</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/fr/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/fr/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Passez le pointeur sur le diagramme Profil d’élévation ou touchez-le pour afficher les élévations et indiquer l’emplacement sur la carte.",directionLabel:"Sens du profil"},buttons:{measureLabel:"Mesurer",helpLabel:"Aide",profileForward:"Avant",profileReverse:"Arrière",flipProfileTitle:"Cliquez pour inverser le sens du profil",aggregationShowLabel:"Afficher les informations d’agrégation",aggregationHideLabel:"Masquer les informations d’agrégation",aggregateElevationGainForward:"Agrégation des dénivelés positifs avant",aggregateElevationLossForward:"Agrégation des dénivelés négatifs avant",aggregateElevationGainReverse:"Agrégation des dénivelés positifs inverses",aggregateElevationLossReverse:"Agrégation des dénivelés négatifs inverses"},chart:{title:"Profil d’élévation",demResolution:"Résolution MNA",elevationTitleTemplate:"Élévation en {0}",distanceTitleTemplate:"Distance en {0}",gainLossTemplate:"Min :{min}   Max :{max}   Début :{start}   Fin :{end}   Changement :{gainloss}"},errors:{MissingConstructorParameters:"Paramètre de construction manquant.",InvalidConfiguration:"Configuration non valide.",UnableToProcessResults:"Impossible de traiter les résultats d’analyse.",UnableToNormalizeGeometry:"Impossible de normaliser la géométrie de type polyligne en entrée.",NullGeometry:"La géométrie de type polyligne en entrée est nulle. Impossible de mettre à jour le profil",InvalidProfileResults:"ProfileChart.update(...) paramètre 'profileResults' manquant."}});