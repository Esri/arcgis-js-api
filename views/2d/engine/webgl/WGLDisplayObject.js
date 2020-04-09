// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayRecord","./collisions/Metric","./util/serializationUtils"],(function(i,t,e,s,r){return function(){function i(i){this.insertAfter=null,this.id=i,this.displayRecords=[],this.metrics=[]}return i.prototype.copy=function(){var t=new i(this.id);return t.set(this),t},i.prototype.clone=function(){var t=new i(this.id);return t.displayRecords=this.displayRecords.map((function(i){return i.clone()})),t.metrics=this.metrics.map((function(i){return i.clone()})),t.insertAfter=this.insertAfter,t},i.prototype.set=function(i){this.id=i.id,this.displayRecords=i.displayRecords,this.metrics=i.metrics,this.insertAfter=i.insertAfter},i.prototype.serialize=function(i){return i.push(this.id),r.serializeList(i,this.metrics),r.serializeList(i,this.displayRecords),i},i.deserialize=function(t){var n=t.readInt32(),o=new i(n),c={id:n},d=r.deserializeList(t,s.default);return d.length&&(o.metrics=d),o.displayRecords=r.deserializeList(t,e,c),o},i}()}));