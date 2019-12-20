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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry/support/aaBoundingRect","../featureConversionUtils","../OptimizedGeometry","./QueryEngine","./utils"],function(e,t,o,r,n,i,u,s,a,l){function c(e,t,o){var r=o.pixelBuffer,n=r*t.resolution,u=i.pad(t.bounds,n,i.create()),s=[];return e.featureStore.forEachInBounds(u,function(t){return s.push(e.featureAdapter.getObjectId(t))}),s}function d(e,t,o,r,n,i,u,s,a){var l=v[o.geometryType],c=m[o.geometryType],d="esriGeometryPolygon"===o.geometryType&&!s,h=o.hasZ?o.hasM?4:3:o.hasM?3:2;u&&!i?r.forEachInBounds(n,function(r){return f(e,t,r,o,a)}):i&&!u?r.forEachInBounds(n,function(o){return g(e,t,o,l,h,c,a,d)}):r.forEachInBounds(n,function(r){return y(e,t,r,o,a,l,h,c,d)})}function f(e,t,o,r,n){if(!t.has(o.objectId)){var i=l.getCentroid(r,o,n),u=o.attributes;i&&(t.add(o.objectId),e.push(new a.Feature(u,o.localId,null,i)))}}function g(e,t,o,r,n,i,u,s){if(!t.has(o.objectId)){var l=o.attributes,c=r(h(p,o.geometry,n,i,s,u),!1,!1);c&&(t.add(o.objectId),e.push(new a.Feature(l,o.localId,c,null)))}}function y(e,t,o,r,n,i,u,s,c){if(!t.has(o.objectId)){var d=l.getCentroid(r,o,n),f=o.attributes,g=i(h(p,o.geometry,u,s,c,n),!1,!1);g&&d&&(t.add(o.objectId),e.push(new a.Feature(f,o.localId,g,d)))}}function h(e,t,o,r,n,i){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;var s=t.coords,a=t.lengths;if(!a.length)return e.coords[0]=u.quantizeX(i,s[0]),e.coords[1]=u.quantizeY(i,s[1]),e.coords.length=o,e;for(var l,c,d,f,g=0,y=0,h=y,p=0,v=a;p<v.length;p++){var m=v[p];if(!(m<r)){y=h,d=l=u.quantizeX(i,s[g]),f=c=u.quantizeY(i,s[g+1]),e.coords[y]=d,e.coords[y+1]=f,g+=o,d=u.quantizeX(i,s[g]),f=u.quantizeY(i,s[g+1]);var I=d-l,b=f-c,z=b/I;y+=2,e.coords[y]=I,e.coords[y+1]=b,l=d,c=f,g+=o;for(var G=2;G<m;G++){if(d=u.quantizeX(i,s[g]),f=u.quantizeY(i,s[g+1]),d!==l||f!==c){var P=d-l,q=f-c,T=q/P,j=z===T||!isFinite(z)&&!isFinite(T),F=(b>=0&&q>=0||b<=0&&q<=0)&&(I>=0&&P>=0||I<=0&&P<=0);j&&(n||F)?(I+=P,b+=q):(I=P,b=q,y+=2),e.coords[y]=I,e.coords[y+1]=b,z=T,l=d,c=f}g+=o}var B=(y+2-h)/2;B>=r&&(e.lengths.push(B),h=y+2)}}return e.coords.length>h&&(e.coords.length=h),e.coords.length?e:null}Object.defineProperty(t,"__esModule",{value:!0});var p=new s.default,v={esriGeometryPoint:u.convertToPoint,esriGeometryPolyline:u.convertToPolyline,esriGeometryPolygon:u.convertToPolygon,esriGeometryMultipoint:u.convertToMultipoint};t.executeTileQueryForIds=c,t.createTileFeatures=d;var m={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0};t.quantizeOptimizedGeometryForDisplay=h});