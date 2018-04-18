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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"Perfil de Elevação",showMe:"mostre-me",selectLine:"<b>Selecione</b> uma feição no mapa.",popupRequirement:"OBSERVAÇÃO: a feição deve estar em uma camada com Pop-ups habilitados.",digitizeDistanceMeasureTool:"Utilize as ferramentas de <b>Medir</b>.",selectFeatureHelpUrl:"http://help.arcgis.com/pt-br/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/pt-br/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"Paire ou toque o gráfico do Perfil de Elevação para exibir elevações e mostrar um local no mapa.",directionLabel:"Direção do Perfil"},buttons:{measureLabel:"Medir",helpLabel:"Ajuda",profileForward:"Para Frente",profileReverse:"Inverter",flipProfileTitle:"Clique para inveter a Direção do Perfil",aggregationShowLabel:"Mostrar Informações de Agregação",aggregationHideLabel:"Ocultar Informações de Agregação",aggregateElevationGainForward:"Agregar Ganho de Elevação Adiante",aggregateElevationLossForward:"Agregar Perda de Elevação Adiante",aggregateElevationGainReverse:"Agregar Ganho de Elevação Reversa",aggregateElevationLossReverse:"Agregar Perda de Elevação Reversa"},chart:{title:"Perfil de Elevação",demResolution:"Resolução do DEM",elevationTitleTemplate:"Elevação em {0}",distanceTitleTemplate:"Distância em {0}",gainLossTemplate:"Mín:{min}   Máx:{max}   Inicial:{start}   Final:{end}   Alterar:{gainloss}"},errors:{MissingConstructorParameters:"Parâmetro do construtor ausente.",InvalidConfiguration:"Configuração inválida.",UnableToProcessResults:"Não foi possível processar resultados da análise.",UnableToNormalizeGeometry:"Não foi possível normalizar a geometria de polilinha de entrada",NullGeometry:"A geometria de polilinha de entrada é nula. Não foi possível atualizar o perfil",InvalidProfileResults:"ProfileChart.update(...) sem o parâmetro 'profileResults'."}});