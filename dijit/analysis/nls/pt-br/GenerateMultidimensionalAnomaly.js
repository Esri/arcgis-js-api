// COPYRIGHT © 201 Esri
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

define({toolDefine:"Gerar Anomalia Multidimensional",outputLayerName:"${layername}_anomaly",variablesLabel:"Escolha variáveis para as quais serão geradas anomalias",variablesListLabel:"Variáveis [Info da Dimensão] (Descrição)",methodLabel:"Escolher método para gerar anomalia",calculationIntervalLabel:"Escolher intervalo temporal para calcular a média",differenceFromMean:"Diferença da Média",percentDifferenceFromMean:"Diferença de Porcentagem da Média",percentOfMean:"Porcentagem da Média",zScore:"Valor Z",differenceFromMedian:"Diferença da Mediana",percentDifferenceFromMedian:"Diferença de Porcentagem da Mediana",percentOfMedian:"Porcentagem da Mediana",all:"Todos",yearly:"Anualmente",recurringMonthly:"Mensalmente Recorrente",recurringWeekly:"Semanalmente Recorrente",recurringDaily:"Diariamente Recorrente",hourly:"A Cada Hora",externalRaster:"Raster Externo",meanRaster:"Escolha a camada de imagens da média como referência",ignoreNodataLabel:"Ignorar valores ausentes no cálculo",ignore:"Ignorar",analysisLayerLabel:"Escolher camada de imagens multidimensionais para gerar anomalia",itemDescription:"O Serviço de Imagem da Análise gerado de Gerar Anomalia Multidimensional",itemTags:"Resultado da Análise de Raster, Gerar Anomalia Multidimensional, ${layername}",itemSnippet:"O Serviço de Imagem da Análise gerado de Gerar Anomalia Multidimensional"});