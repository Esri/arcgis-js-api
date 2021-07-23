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

define({toolDefine:"Generar anomalía multidimensional",outputLayerName:"${layername}_anomaly",variablesLabel:"Elegir variables de las que se generarán anomalías",variablesListLabel:"Variables [Información de dimensión] (Descripción)",methodLabel:"Elija el método para generar anomalías",calculationIntervalLabel:"Elegir el intervalo temporal que se utilizará para calcular el valor medio",differenceFromMean:"Diferencia desde valor medio",percentDifferenceFromMean:"Diferencia porcentual desde valor medio",percentOfMean:"Porcentaje de valor medio",zScore:"Puntuación Z",differenceFromMedian:"Diferencia de mediana",percentDifferenceFromMedian:"Diferencia porcentual desde mediana",percentOfMedian:"Porcentaje de mediana",all:"Todo",yearly:"Anualmente",recurringMonthly:"Recurrente mensualmente",recurringWeekly:"Recurrente semanalmente",recurringDaily:"Recurrente diariamente",hourly:"Cada hora",externalRaster:"Ráster externo",meanRaster:"Elegir capa de imágenes de un valor medio como referencia",ignoreNodataLabel:"Ignorar valores que faltan en cálculo",ignore:"Ignorar",analysisLayerLabel:"Elegir capa de imágenes multidimensional para generar una anomalía",itemDescription:"Servicio de imágenes de análisis generado a partir de Generar anomalía multidimensional",itemTags:"Resultado de análisis de ráster, Generar anomalía multidimensional, ${layername}",itemSnippet:"Servicio de imágenes de análisis generado a partir de Generar anomalía multidimensional"});