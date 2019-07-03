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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/Set","../../../geometry/support/aaBoundingRect","../../../geometry/support/spatialReferenceUtils","./QueryEngine","./utils"],function(e,t,r,o,n,u,a,i,s,d){function l(e,t,r){var o=r.pixelBuffer,n=o*t.resolution,u=a.pad(t.bounds,n,a.create()),i=[];return e.featureStore.forEachInBounds(u,function(t){return i.push(e.featureAdapter.getObjectId(t))}),i}function f(e,t,r){var o=r.returnGeometry,n=r.returnCentroid,s=r.pixelBuffer,d=new u.default,l=[],f=s*t.resolution,p=a.pad(t.bounds,f,a.create());if(c(l,d,e,e.featureStore,p,o,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]}),"esriGeometryPoint"===e.geometryType||n){var b=i.getInfo(e.spatialReference);if(b){var I=b.valid,g=I[0],h=I[1];if(p[0]<g){var j=a.fromValues(h-f,p[1],h,p[3]);c(l,d,e,e.featureStore,j,o,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[h,t.bounds[3]]})}if(p[2]>h){var y=a.fromValues(g,p[1],g+f,p[3]);c(l,d,e,e.featureStore,y,o,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[g-h+t.bounds[0],t.bounds[3]]})}}}return l.sort(function(t,r){return t.attributes[e.objectIdField]-r.attributes[e.objectIdField]}),{features:l,objectIds:d}}function c(e,t,r,o,n,u,a,i){a&&!u?o.forEachInBounds(n,function(o){if(!t.has(o.objectId)){var n=d.getCentroid(r,o,i),u=o.attributes;n&&(t.add(o.objectId),e.push(new s.Feature(u,o.localId,null,n)))}}):u&&!a?o.forEachInBounds(n,function(o){if(!t.has(o.objectId)){var n=o.attributes,u=d.getGeometry(r,o,0,i);u&&(t.add(o.objectId),e.push(new s.Feature(n,o.localId,u,null)))}}):o.forEachInBounds(n,function(o){if(!t.has(o.objectId)){var n=o.attributes,u=d.getGeometry(r,o,0,i),a=d.getCentroid(r,o,i);u&&a&&(t.add(o.objectId),e.push(new s.Feature(n,o.localId,u,a)))}})}Object.defineProperty(t,"__esModule",{value:!0}),t.executeTileQueryForIds=l,t.executeTileQuery=f});