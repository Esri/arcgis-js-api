// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/centroid","../../../../layers/graphics/OptimizedGeometry","./I3SUtil"],function(t,e,r,i,n,o){Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t){this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent}return t.prototype.getObjectId=function(t){return t.id},t.prototype.getAttributes=function(t){var e=t.meta,r=t.index,i={};this.objectIdField&&(i[this.objectIdField]=t.id);var n=e.attributeInfo.attributeData;if(null!=n)for(var u=0,a=Object.keys(n);u<a.length;u++){var d=a[u];i[d]=o.getCachedAttributeValue(n[d],r)}return i},t.prototype.getAttribute=function(t,e){if(e===this.objectIdField)return t.id;var r=t.meta,i=t.index,n=r.attributeInfo.attributeData;return null==n?null:o.getCachedAttributeValue(n[e],i)},t.prototype.getGeometry=function(t){if(t.geometry)return t.geometry;var e=this.getFeatureExtent(t,a),r=e[0],i=e[1],o=e[2],u=e[3],d=e[4];return new n.default([5],[r,i,o,u,i,o,u,d,o,r,d,o,r,i,o])},t.prototype.getCentroid=function(t,e){if(t.geometry)return i.getCentroidOptimizedGeometry(new n.default,t.geometry,e.hasZ,e.hasM);var r=this.getFeatureExtent(t,a),o=r[0],u=r[1],d=r[2],c=r[3],l=r[4],g=r[5];return new n.default([0],[(o+c)/2,(u+l)/2,(d+g)/2])},t.prototype.cloneWithGeometry=function(t,e){return{id:t.id,index:t.index,meta:t.meta,geometry:e}},t}();e.I3SQueryFeatureAdapter=u;var a=r.create()});