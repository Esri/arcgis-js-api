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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry/support/aaBoundingRect","../featureConversionUtils","../OptimizedGeometry","./QueryEngine","./utils"],(function(e,t,r,o,n,i,u,s,a,l){Object.defineProperty(t,"__esModule",{value:!0});var c=new s.default,d={esriGeometryPoint:u.convertToPoint,esriGeometryPolyline:u.convertToPolyline,esriGeometryPolygon:u.convertToPolygon,esriGeometryMultipoint:u.convertToMultipoint};t.executeTileQueryForIds=function(e,t,r){var o=r.pixelBuffer*t.resolution,n=i.pad(t.bounds,o,i.create()),u=[];return e.featureStore.forEachInBounds(n,(function(t){return u.push(e.featureAdapter.getObjectId(t))})),u},t.createTileFeatures=function(e,t,r,o,n,i,u,s,y){var h=d[r.geometryType],p=f[r.geometryType],v="esriGeometryPolygon"===r.geometryType&&!s,m=r.hasZ?r.hasM?4:3:r.hasM?3:2;u&&!i?o.forEachInBounds(n,(function(o){return function(e,t,r,o,n){if(t.has(r.objectId))return;var i=l.getCentroid(o,r,n),u=r.attributes;i&&(t.add(r.objectId),e.push(new a.Feature(u,r.localId,null,i)))}(e,t,o,r,y)})):i&&!u?o.forEachInBounds(n,(function(r){return function(e,t,r,o,n,i,u,s){if(t.has(r.objectId))return;var l=r.attributes,d=o(g(c,r.geometry,n,i,s,u),!1,!1);d&&(t.add(r.objectId),e.push(new a.Feature(l,r.localId,d,null)))}(e,t,r,h,m,p,y,v)})):o.forEachInBounds(n,(function(o){return function(e,t,r,o,n,i,u,s,d){if(t.has(r.objectId))return;var f=l.getCentroid(o,r,n),y=r.attributes,h=i(g(c,r.geometry,u,s,d,n),!1,!1);h&&f&&(t.add(r.objectId),e.push(new a.Feature(y,r.localId,h,f)))}(e,t,o,r,y,h,m,p,v)}))};var f={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0};function g(e,t,r,o,n,i){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;var s,a,l,c,d=t.coords,f=t.lengths;if(!f.length)return e.coords[0]=u.quantizeX(i,d[0]),e.coords[1]=u.quantizeY(i,d[1]),e.coords.length=r,e;for(var g=0,y=0,h=y,p=0,v=f;p<v.length;p++){var m=v[p];if(!(m<o)){y=h,l=s=u.quantizeX(i,d[g]),c=a=u.quantizeY(i,d[g+1]),e.coords[y]=l,e.coords[y+1]=c,g+=r;var I=(l=u.quantizeX(i,d[g]))-s,b=(c=u.quantizeY(i,d[g+1]))-a,z=b/I;y+=2,e.coords[y]=I,e.coords[y+1]=b,s=l,a=c,g+=r;for(var G=2;G<m;G++){if(l=u.quantizeX(i,d[g]),c=u.quantizeY(i,d[g+1]),l!==s||c!==a){var P=l-s,q=c-a,T=q/P;(z===T||!isFinite(z)&&!isFinite(T))&&(n||(b>=0&&q>=0||b<=0&&q<=0)&&(I>=0&&P>=0||I<=0&&P<=0))?(I+=P,b+=q):(I=P,b=q,y+=2),e.coords[y]=I,e.coords[y+1]=b,z=T,s=l,a=c}g+=r}var j=(y+2-h)/2;j>=o&&(e.lengths.push(j),h=y+2)}}return e.coords.length>h&&(e.coords.length=h),e.coords.length?e:null}t.quantizeOptimizedGeometryForDisplay=g}));