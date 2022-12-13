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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","require"],(function(e,i){var r,n={};return n.init=function(){return r?r.promise:(r=new e,i(["./FieldInfoBuilder","./FieldInfoFormatUtil","./FieldInfoNameUtil","./FieldInfoRenderer","./RichTextJsonUtil","./FieldLibrary"],(function(e,i,t,o,d,l){n.builder=e,n.format=i,n.name=t,n.renderer=o,n.richText=d,n.fields=l,r.resolve()})),r.promise)},n.init(),n}));