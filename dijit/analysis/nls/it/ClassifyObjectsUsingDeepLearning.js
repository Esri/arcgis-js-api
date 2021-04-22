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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define({toolDefine:"Classifica oggetti usando l'apprendimento profondo",inputFeaturesLabel:"Scegli feature layer per gli oggetti (opzionale)",outputLayerName:"${layername}_classifiedObjects",modelLabel:"Scegli il modello di apprendimento profondo usato per classificare gli oggetti",modelArgsLabel:"Specifica gli argomenti del modello di apprendimento profondo",classLabelFieldLabel:"Definisci il nome campo di etichetta classe (opzionale)",processingModeLabel:"Modalità di elaborazione",processAsMosaicLabel:"Elabora come immagine a mosaico",processAsItemsLabel:"Elabora tutti gli elementi raster separatamente",queryModelArgsMsg:"Interrogazione argomenti modello in corso...",queryModelArgsErrMsg:"Impossibile interrogare argomenti modello.",valueLabel:"Valore",nameLabel:"Nome",analysisLayerLabel:"Scegli l'immagine usata per classificare gli oggetti",itemDescription:"Image service di analisi generato da Classifica oggetti usando apprendimento profondo",itemTags:"Risultato dell'analisi raster, Classifica oggetti usando apprendimento profondo, ${layername}",itemSnippet:"Image service di analisi generato da Classifica oggetti usando apprendimento profondo"});