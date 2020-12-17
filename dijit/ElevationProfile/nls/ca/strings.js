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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Perfil d’elevació",showMe:"mostra-m’ho",selectLine:"<b>Seleccioneu</b> una entitat al mapa.",popupRequirement:"NOTA: L’entitat ha d’estar en una capa amb les finestres emergents activades.",digitizeDistanceMeasureTool:"Utilitza les eines de <b>Mesura</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Desplaceu-vos pel gràfic del perfil d’elevació o toqueu-lo per visualitzar les elevacions i mostrar la ubicació al mapa.",directionLabel:"Adreça del perfil"},buttons:{measureLabel:"Mesura",helpLabel:"Ajuda",profileForward:"Endavant",profileReverse:"Inverteix",flipProfileTitle:"Feu clic per invertir la direcció del perfil",aggregationShowLabel:"Mostra la informació d’agregació",aggregationHideLabel:"Amaga la informació d’agregació",aggregateElevationGainForward:"Afegeix desnivell positiu cap endavant",aggregateElevationLossForward:"Afegeix desnivell negatiu cap endavant",aggregateElevationGainReverse:"Afegeix desnivell positiu invers",aggregateElevationLossReverse:"Afegeix desnivell negatiu invers"},chart:{title:"Perfil d’elevació",demResolution:"Resolució DEM",elevationTitleTemplate:"Elevació en {0}",distanceTitleTemplate:"Distància en {0}",gainLossTemplate:"Mín.: {min}; màx.: {max}; inici: {start}; final: {end}; canvi: {gainloss}"},errors:{MissingConstructorParameters:"Falta el paràmetre de constructor.",InvalidConfiguration:"Configuració no vàlida.",UnableToProcessResults:"No es poden processar els resultats de l’anàlisi.",UnableToNormalizeGeometry:"No es pot normalitzar la geometria de polilínies d’entrada",NullGeometry:"La geometria de polilínies d’entrada és nul·la. No es pot actualitzar el perfil",InvalidProfileResults:'Falta el paràmetre "profileResults" a l’element ProfileChart.update(...).'}});