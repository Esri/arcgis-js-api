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

define({toolDefine:"Muestra",outputLayerName:"${layername}_sampled",locationLayer:"Elegir capa de ubicación",uniqueIDField:"Especificar campo de Id. único",acquisitionDefinition:"Especificar información de adquisición de datos de ubicación (opcional)",acquisitionDimension:"Especificar formato de información de adquisición y dimensiones (opcional)",buffer:"Especificar el valor o campo de distancia de zona de influencia",formatOptions:"Opciones de formato",dimensionField:"Valor o campo de dimensión",dimensionFieldOrValue:"Valor o campo de dimensión",relativeDaysBefore:"Valor relativo anterior",relativeDaysAfter:"Valor relativo posterior",singleFieldOrValue:"Valor o campo único",singleFieldWithRelativeValues:"Valor o campo único con valores relativos",startEndFieldsOrValues:"Valores o campos de inicio y fin",startFieldOrValue:"Valor o campo de inicio",endFieldOrValue:"Valor o campo de finalización",statisticsType:"Elegir el tipo de estadística",percentile:"Percentil",percentileValue:"Valor de percentil",resample:"Especificar técnica de remuestreo",nearest:"Más cercano",bilinear:"Bilineal",cubic:"Cúbico",outputLayout:"Especificar diseño de salida",layoutRow:"Los valores muestreados aparecen en una fila",layoutColumn:"Los valores muestreados aparecen en una columna",outputType:"Especificar tipo de salida",features:"Entidades",table:"Tabla",removeLayer:"Quitar capa",dimensionError:"No se puede cargar la información de dimensión. Todas las variables deben tener las mismas dimensiones",analysisLayerLabel:"Elegir capa(s) de imágenes a muestrear",itemDescription:"Servicio de imágenes de análisis generado a partir de Muestra",itemTags:"Resultado de análisis de ráster, Muestra ${layername}",itemSnippet:"Servicio de imágenes de análisis generado a partir de Muestra"});