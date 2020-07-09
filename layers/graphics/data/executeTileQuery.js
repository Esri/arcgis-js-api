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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/aaBoundingRect","../featureConversionUtils","../OptimizedGeometry","./QueryEngine","./utils"],(function(e,t,o,r,n,i,u){Object.defineProperty(t,"__esModule",{value:!0});var s=new n.default,a={esriGeometryPoint:r.convertToPoint,esriGeometryPolyline:r.convertToPolyline,esriGeometryPolygon:r.convertToPolygon,esriGeometryMultipoint:r.convertToMultipoint};t.executeTileQueryForIds=function(e,t,r){var n=r.pixelBuffer*t.resolution,i=o.pad(t.bounds,n,o.create()),u=[];return e.featureStore.forEachInBounds(i,(function(t){return u.push(e.featureAdapter.getObjectId(t))})),u},t.createTileFeatures=function(e,t,o,r,n,d,f,h,g){var y=a[o.geometryType],p=l[o.geometryType],v="esriGeometryPolygon"===o.geometryType&&!h,m=o.hasZ?o.hasM?4:3:o.hasM?3:2;f&&!d?r.forEachInBounds(n,(function(r){return function(e,t,o,r,n){if(t.has(o.objectId))return;var s=u.getCentroid(r,o,n),a=o.attributes;s&&(t.add(o.objectId),e.push(new i.Feature(a,o.localId,null,s)))}(e,t,r,o,g)})):d&&!f?r.forEachInBounds(n,(function(o){return function(e,t,o,r,n,u,a,l){if(t.has(o.objectId))return;var d=o.attributes,f=r(c(s,o.geometry,n,u,l,a),!1,!1);f&&(t.add(o.objectId),e.push(new i.Feature(d,o.localId,f,null)))}(e,t,o,y,m,p,g,v)})):r.forEachInBounds(n,(function(r){return function(e,t,o,r,n,a,l,d,f){if(t.has(o.objectId))return;var h=u.getCentroid(r,o,n),g=o.attributes,y=a(c(s,o.geometry,l,d,f,n),!1,!1);y&&h&&(t.add(o.objectId),e.push(new i.Feature(g,o.localId,y,h)))}(e,t,r,o,g,y,m,p,v)}))};var l={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0};function c(e,t,o,n,i,u){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;var s,a,l,c,d=t.coords,f=t.lengths;if(!f.length)return e.coords[0]=r.quantizeX(u,d[0]),e.coords[1]=r.quantizeY(u,d[1]),e.coords.length=o,e;for(var h=0,g=0,y=g,p=0,v=f;p<v.length;p++){var m=v[p];if(!(m<n))if(g=y,l=s=r.quantizeX(u,d[h]),c=a=r.quantizeY(u,d[h+1]),e.coords[g]=l,e.coords[g+1]=c,h+=o,1!==m){var I=(l=r.quantizeX(u,d[h]))-s,b=(c=r.quantizeY(u,d[h+1]))-a,z=b/I;g+=2,e.coords[g]=I,e.coords[g+1]=b,s=l,a=c,h+=o;for(var G=2;G<m;G++){if(l=r.quantizeX(u,d[h]),c=r.quantizeY(u,d[h+1]),l!==s||c!==a){var P=l-s,q=c-a,T=q/P;(z===T||!isFinite(z)&&!isFinite(T))&&(i||(b>=0&&q>=0||b<=0&&q<=0)&&(I>=0&&P>=0||I<=0&&P<=0))?(I+=P,b+=q):(I=P,b=q,g+=2),e.coords[g]=I,e.coords[g+1]=b,z=T,s=l,a=c}h+=o}var j=(g+2-y)/2;j>=n&&(e.lengths.push(j),y=g+2)}else e.lengths.push(1),y=g+2}return e.coords.length>y&&(e.coords.length=y),e.coords.length?e:null}t.quantizeOptimizedGeometryForDisplay=c}));