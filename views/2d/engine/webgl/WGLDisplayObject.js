// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayRecord","./collisions/Metric","./util/serializationUtils"],function(i,t,o,c,d){return function(){function n(i){this.insertAfter=null,this.id=i,this.displayRecords=[],this.metrics=[]}return n.prototype.copy=function(){var i=new n(this.id);return i.set(this),i},n.prototype.clone=function(){var i=new n(this.id);return i.displayRecords=this.displayRecords.map(function(i){return i.clone()}),i.metrics=this.metrics.map(function(i){return i.clone()}),i.insertAfter=this.insertAfter,i},n.prototype.set=function(i){this.id=i.id,this.displayRecords=i.displayRecords,this.metrics=i.metrics,this.insertAfter=i.insertAfter},n.prototype.serialize=function(i){return i.push(this.id),d.serializeList(i,this.metrics),d.serializeList(i,this.displayRecords),i},n.deserialize=function(i){var t=i.readInt32(),e=new n(t),s={id:t},r=d.deserializeList(i,c.default);return r.length&&(e.metrics=r),e.displayRecords=d.deserializeList(i,o,s),e},n}()});