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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({toolDefine:"Klassificera objekt med djupinlärning",inputFeaturesLabel:"Välj geoobjektlager för objekt (valfritt)",outputLayerName:"${layername}_classifiedObjects",modelLabel:"Välj den djupinlärningsmodell som används för att klassificera objekt",modelArgsLabel:"Ange modellargument för djupinlärning",classLabelFieldLabel:"Definiera fältnamn för klassetikett (valfritt)",processingModeLabel:"Bearbetningsläge",processAsMosaicLabel:"Bearbeta som mosaikbearbetad bild",processAsItemsLabel:"Bearbeta alla rasterobjekt separat",queryModelArgsMsg:"Söker modellargument ...",queryModelArgsErrMsg:"Det gick inte att söka efter modellargument.",valueLabel:"Värde",nameLabel:"Namn",analysisLayerLabel:"Välj bild som används för att klassificera objekt",itemDescription:"Analysbildtjänst skapad från Klassificera objekt med djupinlärning",itemTags:"Rasteranalysresultat, Klassificera objekt med djupinlärning, ${layername}",itemSnippet:"Analysbildtjänst skapad från Klassificera objekt med djupinlärning"});