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

define(["require","exports","../../../geometry","../rasterFunctions/rasterProjectionHelper"],(function(e,n,t,r){Object.defineProperty(n,"__esModule",{value:!0});var a=new Map;n.register=function(e,n){var t={extent:null,rasterInfo:n,cache:new Map};if(a.has(e)){var r=a.get(e);return r.push(t),r.length-1}return a.set(e,[t]),0},n.unregister=function(e,n){a.has(e)&&(a.get(e)[n]=null)},n.deleteRaster=function(e){a.delete(e)},n.getBlock=function(e,n,t){if(!a.has(e))return null;var r=a.get(e);if(null==r[n]){for(var o=0;o<r.length;o++)if(r[o].cache.has(t))return r[o].cache.get(t);return null}var i=r[n].cache;if(i.has(t))return i.get(t);for(o=0;o<r.length;o++)if(o!==n&&r[o]&&r[o].cache.has(t)){var l=r[o].cache.get(t);return i.set(t,l),l}return null},n.putBlock=function(e,n,t,r){if(!a.has(e))return null;var o=a.get(e);if(null==o[n])return null;o[n].cache.set(t,r)},n.update=function(e,n,o,i,l,c,f){void 0===f&&(f=null);var u=function(e,n){if(!a.has(e))return null;var t=a.get(e);return null==t[n]?null:t[n]}(e,n),s=u.extent,h=u.cache,x=u.rasterInfo,m=o.clone().normalize();if(o=m[0],!s||s.xmin!==o.xmin||s.xmax!==o.xmax||s.ymin!==o.ymin||s.ymax!==o.ymax){var g=x.spatialReference,y=r.projectExtent(o,g,f),d=new t.Point({x:i,y:i,spatialReference:o.spatialReference});if(null!==l||(l=r.projectResolution(d,g,o,f))){var p=r.snapPyramid(l,x,c||"closest"),v=p.pyramidLevel,M=p.pyramidResolution;if(!p.excessiveReading){for(var I=Math.floor((y.xmin-x.storageInfo.origin.x)/M.x),R=Math.floor((x.storageInfo.origin.y-y.ymax)/M.y),k=Math.ceil((y.xmax-y.xmin)/M.x-.1),j=Math.ceil((y.ymax-y.ymin)/M.y-.1),w=v>0?x.storageInfo.pyramidBlockWidth:x.storageInfo.blockWidth,B=v>0?x.storageInfo.pyramidBlockHeight:x.storageInfo.blockHeight,P=Math.floor(I/w),b=Math.floor(R/B),H=Math.floor((I+k-1)/w),E=Math.floor((R+j-1)/B),W=new Set,_=b-1;_<=E+1;_++)for(var q=P-1;q<=H+1;q++)W.add(v+"/"+_+"/"+q);h.forEach((function(e,n){W.has(n)||h.delete(n)})),u.extent={xmin:o.xmin,ymin:o.ymin,xmax:o.xmax,ymax:o.ymax}}}}}}));