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

define({toolDefine:"Gerar Raster de Tendência",outputLayerName:"${layername}_trend",dimensionLabel:"Escolher dimensão junto da tendência de variável que será analisada",variablesLabel:"Escolher variáveis para analisar tendência",variablesListLabel:"Variáveis [Info da Dimensão] (Descrição)",trendLineTypeLabel:"Escolha o tipo da linha para ajustar valores de variável ao longo de uma dimensão",linear:"Linear",harmonic:"Harmônico",polynomial:"Polinomial",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"Especifique a unidade de tempo para a duração de um período sazonal",cycleLength:"Especifique a duração do ciclo harmônico",cycleUnit:"Escolha a unidade de tempo da duração do ciclo harmônico",years:"Anos",days:"Dias",months:"Meses",frequencyLabel:"Especifique o número de frequência para o ajuste de tendência harmônica",polynomialOrderLabel:"Especifique o número de ordem polinômia parao ajuste de tendência",modelStatistics:"Escolha as estatísticas do modelo a serem incluídas no raster de tendências",rmse:"RMSE",r2:"R-quadrado",slopePValue:"coeficiente de declividade do valor P",ignoreNodataLabel:"Ignorar valores ausentes no cálculo",ignore:"Ignorar",analysisLayerLabel:"Escolha a camada de imagens multidimensional para analisar tendência",itemDescription:"Serviço de Imagem da Análise gerado de Gerar Raster de Tendência",itemTags:"Resultado da Análise de Raster, Gerar Raster de Tendência, ${layername}",itemSnippet:"Serviço de Imagem da Análise gerado de Gerar Raster de Tendência"});