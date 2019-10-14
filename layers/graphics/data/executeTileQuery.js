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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry/support/aaBoundingRect","../../../geometry/support/spatialReferenceUtils","./QueryEngine","./utils"],function(e,t,r,o,n,u,a,i,s){function d(e,t,r){var o=r.pixelBuffer,n=o*t.resolution,a=u.pad(t.bounds,n,u.create()),i=[];return e.featureStore.forEachInBounds(a,function(t){return i.push(e.featureAdapter.getObjectId(t))}),i}function l(e,t,r){var o=r.returnGeometry,n=r.returnCentroid,i=r.pixelBuffer,s=new Set,d=[],l=i*t.resolution,f=u.pad(t.bounds,l,u.create());if(c(d,s,e,e.featureStore,f,o,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]}),"esriGeometryPoint"===e.geometryType||n){var p=a.getInfo(e.spatialReference);if(p){var b=p.valid,I=b[0],g=b[1];if(f[0]<I){var y=u.fromValues(g-l,f[1],g,f[3]);c(d,s,e,e.featureStore,y,o,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[g,t.bounds[3]]})}if(f[2]>g){var h=u.fromValues(I,f[1],I+l,f[3]);c(d,s,e,e.featureStore,h,o,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[I-g+t.bounds[0],t.bounds[3]]})}}}return d.sort(function(t,r){return t.attributes[e.objectIdField]-r.attributes[e.objectIdField]}),{features:d,objectIds:s}}function c(e,t,r,o,n,u,a,d){a&&!u?o.forEachInBounds(n,function(o){if(!t.has(o.objectId)){var n=s.getCentroid(r,o,d),u=o.attributes;n&&(t.add(o.objectId),e.push(new i.Feature(u,o.localId,null,n)))}}):u&&!a?o.forEachInBounds(n,function(o){if(!t.has(o.objectId)){var n=o.attributes,u=s.getGeometry(r,o,0,d);u&&(t.add(o.objectId),e.push(new i.Feature(n,o.localId,u,null)))}}):o.forEachInBounds(n,function(o){if(!t.has(o.objectId)){var n=o.attributes,u=s.getGeometry(r,o,0,d),a=s.getCentroid(r,o,d);u&&a&&(t.add(o.objectId),e.push(new i.Feature(n,o.localId,u,a)))}})}Object.defineProperty(t,"__esModule",{value:!0}),t.executeTileQueryForIds=d,t.executeTileQuery=l});