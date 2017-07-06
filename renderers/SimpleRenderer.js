// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["../core/declare","../core/lang","../symbols/support/jsonUtils","./Renderer"],function(e,l,n,r){var s=e(r,{declaredClass:"esri.renderers.SimpleRenderer",properties:{description:{value:null,json:{write:!0}},label:{value:null,json:{write:!0}},symbol:{value:null,json:{read:n.read,write:function(e,l,r,s){l.symbol=n.write(e,{},s)}}},type:"simple"},getSymbol:function(e,l){return this.symbol},clone:function(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l.clone(this.visualVariables),authoringInfo:l.clone(this.authoringInfo)})}});return s});