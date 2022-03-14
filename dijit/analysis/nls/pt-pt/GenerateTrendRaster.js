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

define({toolDefine:"Gerar Raster de Tendência",outputLayerName:"${layername}_trend",dimensionLabel:"Escolher dimensão ao longo da qual a tendência de variável será analisada",variablesLabel:"Escolher variável(is) para analisar tendência",variablesListLabel:"Variáveis [Info da Dimensão] (Descrição)",trendLineTypeLabel:"Escolher o tipo de linha para ajustar os valores da variável ao longo de uma dimensão",linear:"Linear",harmonic:"Harmonioso",polynomial:"Polinomial",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Especifique a unidade de tempo para a duração do período sazonal.",cycleLength:"Especificar a duração do ciclo harmónico",cycleUnit:"Escolher a unidade de tempo da duração do ciclo harmónico",years:"Anos",days:"Dias",months:"Meses",frequencyLabel:"Especificar o número de frequência para o ajuste de tendência harmonisa",polynomialOrderLabel:"Especificar o número de ordem polinomial para o ajuste de tendência",modelStatistics:"Escolher estatística do modelo a incluir no raster de tendência",rmse:"RMSE",r2:"R-quadrado",slopePValue:"Valor P de coeficiente de inclinação",ignoreNodataLabel:"Ignorar valores em falta no cálculo",ignore:"Ignorar",analysisLayerLabel:"Escolher layer de imagem multidimensional para analisar tendência",itemDescription:"Serviço de Imagem de Análise gerado a partir de Gerar Raster de Tendência",itemTags:"Resultado de Análise Raster, Gerar Raster de Tendência, ${layername}",itemSnippet:"Serviço de Imagem de Análise gerado a partir de Gerar Raster de Tendência"});