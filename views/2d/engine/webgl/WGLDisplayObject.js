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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix/vec2","./WGLDisplayRecord","./collisions/Metric","./util/serializationUtils"],function(t,e,i,r,s,o){return function(){function t(t){this.xBucket=-1,this.yBucket=-1,this.xOverflow=-1,this.yOverflow=-1,this.id=t,this.displayRecords=[],this.metrics=[],this.anchor=null}return t.prototype.copy=function(){var e=new t(this.id);return e.set(this),e},t.prototype.set=function(t){this.id=t.id,this.displayRecords=t.displayRecords,this.metrics=t.metrics,this.anchor=t.anchor,this.xBucket=t.xBucket,this.yBucket=t.yBucket,this.xOverflow=t.xOverflow,this.yOverflow=t.yOverflow},t.prototype.addMetric=function(t,e,i,r){this.metrics.push(new s.default(t,{from:e,count:i},r))},t.prototype.serialize=function(t){return t.writeInt32(this.id),o.serializeList(t,this.metrics),o.serializeList(t,this.displayRecords),this.anchor?(t.writeF32(this.anchor[0]),t.writeF32(this.anchor[1]),t.writeInt32(this.xBucket),t.writeInt32(this.yBucket),t.writeInt32(this.xOverflow),t.writeInt32(this.yOverflow)):(t.writeF32(0),t.writeF32(0)),t},t.deserialize=function(e,n){var c=n.store,h=e.readInt32(),a=new t(h),l={id:h,store:c},d=o.deserializeList(e,s.default);d.length&&(a.metrics=d),a.displayRecords=o.deserializeList(e,r,l);var u=e.readF32(),f=e.readF32();return(u||f)&&(a.anchor=i.fromValues(u,f),a.xBucket=e.readInt32(),a.yBucket=e.readInt32(),a.xOverflow=e.readInt32(),a.yOverflow=e.readInt32()),a},t}()});