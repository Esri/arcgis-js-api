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

define({toolDefine:"Definiera objekt med djupinlärning",outputLayerName:"${layername}_detected",modelLabel:"Välj den djupinlärningsmodell som används för att identifiera objekt",modelArgsLabel:"Ange modellargument för djupinlärning",nameLabel:"Namn",valueLabel:"Värde",removeDuplicatesLable:"Ta bort dubblerade geoobjekt från utdata (valfritt)",queryModelArgsMsg:"Söker modellargument ...",queryModelArgsErrMsg:"Det gick inte att söka efter modellargument.",nonMaxSuppressionLabel:"Ej maximal nedhållning",options:"Alternativ",confidenceLabel:"Fält för konfidensnivå",classValueLabel:"Klassvärdefält",maxOverlapLabel:"Maximalt överlappningsförhållande",numberOnlyMsg:"Endast numeriska värden är tillåtna.",processingModeLabel:"Bearbetningsläge",processAsMosaicLabel:"Bearbeta som mosaikbearbetad bild",processAsItemsLabel:"Bearbeta alla rasterobjekt separat",analysisLayerLabel:"Välj bild som används för att identifiera objekt",itemDescription:"Analysbildtjänst skapad från Identifiera objekt med djupinlärning",itemTags:"Rasteranalysresultat, identifiera objekt med djupinlärning, ${layername}",itemSnippet:"Analysbildtjänst skapad från Identifiera objekt med djupinlärning"});