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

define({toolDefine:"Amostra",outputLayerName:"${layername}_sampled",locationLayer:"Escolher camada de localização",uniqueIDField:"Especificar campo de ID Único",acquisitionDefinition:"Especificar informações de aquisição dos dados de localização (Opcional)",acquisitionDimension:"Especificar formato de dimensão(ões) e informações de aquisição (Opcional)",buffer:"Especificar valor ou campo de distância do buffer",formatOptions:"Opções de formato",dimensionField:"Campo ou valor de dimensão",dimensionFieldOrValue:"Campo ou valor de dimensão",relativeDaysBefore:"Valor relativo antes",relativeDaysAfter:"Valor relativo após",singleFieldOrValue:"Campo ou valor único",singleFieldWithRelativeValues:"Campo ou valor com valores relativos",startEndFieldsOrValues:"Campos ou valores iniciais e finais",startFieldOrValue:"Campo ou valor inicial",endFieldOrValue:"Campo ou valor final",statisticsType:"Escolher tipo de estatística",percentile:"Percentil",percentileValue:"Valor de percentil",resample:"Especificar técnica de resampling",nearest:"Mais Próximo",bilinear:"Bilinear",cubic:"Cúbico",outputLayout:"Especificar layout de saída",layoutRow:"Os valores de amostra são apresentados em linha",layoutColumn:"Os valores de amostra são apresentados em coluna",outputType:"Especificar tipo de saída",features:"Capacidades",table:"Tabela",removeLayer:"Remover camada",dimensionError:"Não foi possível carregar as informações de dimensão. Todas as variáveis devem ter a(s) mesma(s) dimensão(ões)",analysisLayerLabel:"Escolher camada(s) de imagem para amostra",itemDescription:"Serviço de Imagens de Análise gerado a partir de Amostra",itemTags:"Resultado da Análise de Raster, Amostra, ${layername}",itemSnippet:"Serviço de Imagens de Análise gerado a partir de Amostra"});