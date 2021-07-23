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

define({display:{elevationProfileTitle:"Perfil de Elevação",showMe:"mostre-me",selectLine:"<b>Selecione</b> um elemento no mapa.",popupRequirement:"NOTA: o elemento tem de estar numa camada com Janelas pop-up ativadas.",digitizeDistanceMeasureTool:"Utilize as ferramentas de <b>Medição</b> .",selectFeatureHelpUrl:"http://help.arcgis.com/pt-pt/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Passe por cima ou toque no gráfico de Perfil de Elevação para exibir elevações e mostrar a localização no mapa.",directionLabel:"Direção do Perfil"},buttons:{measureLabel:"Medir",helpLabel:"Ajuda",profileForward:"Para a frente",profileReverse:"Inverter",flipProfileTitle:"Clicar para Rodar a Direção do Perfil",aggregationShowLabel:"Exibir Informações de Agregação",aggregationHideLabel:"Ocultar Informações de Agregação",aggregateElevationGainForward:"Perda de Elevação Agregada Avanço",aggregateElevationLossForward:"Ganho de Elevação Agregada Avanço",aggregateElevationGainReverse:"Ganho de Elevação Agregada Retrocesso",aggregateElevationLossReverse:"Perda de Elevação Agregada Retrocesso"},chart:{title:"Perfil de Elevação",demResolution:"Resolução do DEM",elevationTitleTemplate:"Elevação em {0}",distanceTitleTemplate:"Distância em {0}",gainLossTemplate:"Mín:{min}   Máx:{max}   Inicial:{start}   Final:{end}   Diferença:{gainloss}"},errors:{MissingConstructorParameters:"Parâmetro de construção ausente.",InvalidConfiguration:"Configuração inválida.",UnableToProcessResults:"Não foi possível processar os resultados da análise.",UnableToNormalizeGeometry:"Não é possível normalizar a geometria de polilinha de entrada",NullGeometry:"Geometria de polilinha de entrada é nula. Não foi possível atualizar o perfil",InvalidProfileResults:"ProfileChart.update(...) falta o parâmetro 'profileResults'."}});