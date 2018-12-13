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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayRecord","./collisions/Metric","./util/serializationUtils"],function(i,t,c,l,a){return function(){function d(i){this.insertAfter=null,this.id=i,this.displayRecords=[],this.metrics=[]}return d.prototype.copy=function(){var i=new d(this.id);return i.set(this),i},d.prototype.set=function(i){this.id=i.id,this.displayRecords=i.displayRecords,this.metrics=i.metrics,this.insertAfter=i.insertAfter},d.prototype.serialize=function(i){return i.push(this.id),a.serializeList(i,this.metrics),a.serializeList(i,this.displayRecords),i},d.deserialize=function(i,t){var e=t.store,s=i.readInt32(),r=new d(s),n={id:s,store:e},o=a.deserializeList(i,l.default);return o.length&&(r.metrics=o),r.displayRecords=a.deserializeList(i,c,n),r},d}()});