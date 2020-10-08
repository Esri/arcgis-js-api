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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/centroid","../../../../layers/graphics/OptimizedGeometry","./I3SUtil"],(function(e,t,r,i,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I3SQueryFeatureAdapter=void 0;var u=function(){function e(e){this.objectIdField=e.objectIdField,this.getFeatureExtent=e.getFeatureExtent}return e.prototype.getObjectId=function(e){return e.id},e.prototype.getAttributes=function(e){var t=e.meta,i=e.index,o={};this.objectIdField&&(o[this.objectIdField]=e.id);var n=r.isSome(t.attributeInfo)&&t.attributeInfo.attributeData;if(r.isSome(n))for(var u=0,d=Object.keys(n);u<d.length;u++){var c=d[u];o[c]=a.getCachedAttributeValue(n[c],i)}return o},e.prototype.getAttribute=function(e,t){if(t===this.objectIdField)return e.id;var i=e.meta,o=e.index,n=r.isSome(i.attributeInfo)&&i.attributeInfo.attributeData;return r.isSome(n)?a.getCachedAttributeValue(n[t],o):null},e.prototype.getGeometry=function(e){if(e.geometry)return e.geometry;var t=this.getFeatureExtent(e,d),r=t[0],i=t[1],o=t[2],a=t[3],u=t[4];return new n.default([5],[r,i,o,a,i,o,a,u,o,r,u,o,r,i,o])},e.prototype.getCentroid=function(e,t){if(e.geometry)return o.getCentroidOptimizedGeometry(new n.default,e.geometry,t.hasZ,t.hasM);var r=this.getFeatureExtent(e,d),i=r[0],a=r[1],u=r[2],c=r[3],s=r[4],f=r[5];return new n.default([0],[(i+c)/2,(a+s)/2,(u+f)/2])},e.prototype.cloneWithGeometry=function(e,t){return{id:e.id,index:e.index,meta:e.meta,geometry:t}},e}();t.I3SQueryFeatureAdapter=u;var d=i.create()}));