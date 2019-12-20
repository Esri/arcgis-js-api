// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix/vec2","./WGLDisplayRecord","./collisions/Metric","./util/serializationUtils"],function(t,e,i,r,s,n){return function(){function t(t){this.xBucket=-1,this.yBucket=-1,this.xOverflow=-1,this.yOverflow=-1,this.id=t,this.displayRecords=[],this.metrics=[],this.anchor=null}return t.prototype.addMetric=function(t,e,i,r){this.metrics.push(new s.default(t,{from:e,count:i},r))},t.prototype.serialize=function(t){return t.writeInt32(this.id),n.serializeList(t,this.metrics),n.serializeList(t,this.displayRecords),this.anchor?(t.writeF32(this.anchor[0]),t.writeF32(this.anchor[1]),t.writeInt32(this.xBucket),t.writeInt32(this.yBucket),t.writeInt32(this.xOverflow),t.writeInt32(this.yOverflow)):(t.writeF32(0),t.writeF32(0)),t},t.deserialize=function(e,o){var a=o.store,c=e.readInt32(),l=new t(c),h={id:c,store:a},d=n.deserializeList(e,s.default);d.length&&(l.metrics=d),l.displayRecords=n.deserializeList(e,r,h);var u=e.readF32(),f=e.readF32();return(u||f)&&(l.anchor=i.fromValues(u,f),l.xBucket=e.readInt32(),l.yBucket=e.readInt32(),l.xOverflow=e.readInt32(),l.yOverflow=e.readInt32()),l},t}()});