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

define({toolDefine:"Generar ráster de tendencia",outputLayerName:"${layername}_trend",dimensionLabel:"Elegir la dimensión a lo largo de la cual se analizará la tendencia de la variable",variablesLabel:"Elegir las variables de las que se analizará la tendencia",variablesListLabel:"Variables [Información de dimensión] (Descripción)",trendLineTypeLabel:"Elegir el tipo de línea con la que se ajustarán los valores de variable a lo largo de una dimensión",linear:"Lineal",harmonic:"Armónica",polynomial:"Polinómica",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Especificar la unidad de tiempo para la duración de un ciclo estacional",cycleLength:"Especificar la longitud del ciclo armónico",cycleUnit:"Elegir la unidad de tiempo de la longitud del ciclo armónico",years:"Años",days:"Días",months:"Meses",frequencyLabel:"Especificar el número de frecuencia para el ajuste de tendencia armónica",polynomialOrderLabel:"Especificar el número de orden polinómico para el ajuste de tendencia",modelStatistics:"Elegir estadísticas de modelo para incluirlas en el ráster de tendencia",rmse:"RMSE",r2:"R cuadrado",slopePValue:"Valor P de coeficiente de pendiente",ignoreNodataLabel:"Ignorar valores que faltan en cálculo",ignore:"Ignorar",analysisLayerLabel:"Elegir una capa de imágenes multidimensional de la que se analizará la tendencia",itemDescription:"Servicio de imágenes de análisis generado a partir de Generar ráster de tendencia",itemTags:"Resultado de análisis de ráster, Generar ráster de tendencia, ${layername}",itemSnippet:"Servicio de imágenes de análisis generado a partir de Generar ráster de tendencia"});