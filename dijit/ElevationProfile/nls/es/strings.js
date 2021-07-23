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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Perfil de elevación",showMe:"mostrarme",selectLine:"<b>Seleccione</b> una entidad en el mapa.",popupRequirement:"NOTA: la entidad debe estar en una capa con las ventanas emergentes activadas.",digitizeDistanceMeasureTool:"Use las herramientas de <b>Medición</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Desplázate por el diagrama del perfil de elevación o tócalo para visualizar las elevaciones y mostrar la ubicación en el mapa.",directionLabel:"Dirección del perfil"},buttons:{measureLabel:"Medir",helpLabel:"Ayuda",profileForward:"Hacia delante",profileReverse:"Invertir",flipProfileTitle:"Hacer clic para invertir la dirección del perfil",aggregationShowLabel:"Mostrar información de agregación",aggregationHideLabel:"Ocultar información de agregación",aggregateElevationGainForward:"Agregar desnivel positivo adelante",aggregateElevationLossForward:"Agregar desnivel negativo adelante",aggregateElevationGainReverse:"Agregar desnivel positivo inverso",aggregateElevationLossReverse:"Agregar desnivel negativo inverso"},chart:{title:"Perfil de elevación",demResolution:"Resolución DEM",elevationTitleTemplate:"Elevación en {0}",distanceTitleTemplate:"Distancia en {0}",gainLossTemplate:"Mín:{min}   Máx:{max}   Inicio:{start}   Fin:{end}   Cambio:{gainloss}"},errors:{MissingConstructorParameters:"Parámetro de constructor faltante.",InvalidConfiguration:"Configuración no válida.",UnableToProcessResults:"No se pueden procesar los resultados del análisis.",UnableToNormalizeGeometry:"No se puede normalizar la geometría de polilíneas de entrada",NullGeometry:"La geometría de polilíneas de entrada es nula. No se puede actualizar el perfil",InvalidProfileResults:"En ProfileChart.update(...) falta el parámetro 'profileResults'."}});