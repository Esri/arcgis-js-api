// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","../core/lang","../symbols/support/jsonUtils","./Renderer"],function(e,l,r,s){var i=e(s,{declaredClass:"esri.renderer.SimpleRenderer",properties:{description:{value:null,json:{writable:!0}},label:{value:null,json:{writable:!0}},symbol:{value:null,json:{read:r.read,write:function(e,l,s){l.symbol=r.write(e,{},s)}}},type:"simple"},getSymbol:function(e,l){return this.symbol},clone:function(){return new i({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l.clone(this.visualVariables)})}});return i});