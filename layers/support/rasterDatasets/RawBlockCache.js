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

define(["require","exports","../../../geometry","./EphemeralBlockCache","../rasterFunctions/rasterProjectionHelper"],(function(e,t,r,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.deleteBlock=t.putBlock=t.getBlock=t.decreaseRefCount=t.deleteRaster=t.unregister=t.register=t.getRasterId=void 0;var l=new Map,o=new n;t.getRasterId=function(e,t){return null==t?e:e+"?sliceId="+t},t.register=function(e,t){var r={extent:null,rasterInfo:t,cache:new Map};if(l.has(e)){var n=l.get(e);return n.push(r),n.length-1}return l.set(e,[r]),0},t.unregister=function(e,t){l.has(e)&&(l.get(e)[t]=null)},t.deleteRaster=function(e){l.delete(e)},t.decreaseRefCount=function(e,t,r){if(!l.has(e))return null==t?o.decreaseRefCount(e,r):0;var n=l.get(e);if(null==n[t])return o.decreaseRefCount(e,r);var a=n[t].cache;if(a.has(r)){var i=a.get(r);if(i.refCount--,0===i.refCount){a.delete(r);for(var c=0;c<n.length;c++)n[c]&&n[c].cache.has(r)&&n[c].cache.delete(r);i.controller&&i.controller.abort()}return i.refCount}return 0},t.getBlock=function(e,t,r){if(!l.has(e))return null==t?o.getBlock(e,r):null;var n=l.get(e);if(null==n[t]){for(var a=0;a<n.length;a++){if(n[a]&&n[a].cache.has(r))return(i=n[a].cache.get(r)).refCount++,i.block}return o.getBlock(e,r)}var i,c=n[t].cache;if(c.has(r))return(i=c.get(r)).refCount++,i.block;for(a=0;a<n.length;a++)if(a!==t&&n[a]&&n[a]&&n[a].cache.has(r)){var u=n[a].cache.get(r);return u.refCount++,c.set(r,u),u.block}return null},t.putBlock=function(e,t,r,n,a){if(void 0===a&&(a=null),l.has(e)){var i=l.get(e);if(null!=i[t]){var c={refCount:1,block:n,isResolved:!1,isRejected:!1,controller:a};n.then((function(){return c.isResolved=!0})).catch((function(){return c.isRejected=!0})),i[t].cache.set(r,c)}else o.putBlock(e,r,n,a)}else null==t&&o.putBlock(e,r,n,a)},t.deleteBlock=function(e,t,r){if(l.has(e)){var n=l.get(e);null!=n[t]?n[t].cache.delete(r):o.deleteBlock(e,r)}else null==t&&o.deleteBlock(e,r)},t.update=function(e,t,n,o,i,c,u){void 0===u&&(u=null);var f=function(e,t){if(!l.has(e))return null;var r=l.get(e);return null==r[t]?null:r[t]}(e,t),s=f.extent,h=f.cache,x=f.rasterInfo;if(!s||s.xmin!==n.xmin||s.xmax!==n.xmax||s.ymin!==n.ymin||s.ymax!==n.ymax){for(var d=n.clone().normalize(),g=x.spatialReference,m=new Set,v=0;v<d.length;v++){var y=d[v];if(!(y.xmax-y.xmin<=o||y.ymax-y.ymin<=o)){var p=a.projectExtent(y,g,u),k=new r.Point({x:o,y:o,spatialReference:y.spatialReference});if(null===i&&!(i=a.projectResolution(k,g,y,u)))return;var R=a.snapPyramid(i,x,c||"closest"),B=R.pyramidLevel,M=R.pyramidResolution;if(R.excessiveReading)return;for(var C={x:Math.max(0,Math.floor((p.xmin-x.storageInfo.origin.x)/M.x)),y:Math.max(0,Math.floor((x.storageInfo.origin.y-p.ymax)/M.y))},I=Math.ceil((p.xmax-p.xmin)/M.x-.1),b=Math.ceil((p.ymax-p.ymin)/M.y-.1),j=B>0?x.storageInfo.pyramidBlockWidth:x.storageInfo.blockWidth,w=B>0?x.storageInfo.pyramidBlockHeight:x.storageInfo.blockHeight,P=Math.max(0,Math.floor(C.x/j)-1),E=Math.max(0,Math.floor(C.y/w)-1),H=Math.floor((C.x+I-1)/j)+1,W=Math.floor((C.y+b-1)/w)+1,_=E;_<=W;_++)for(var q=P;q<=H;q++)m.add(B+"/"+_+"/"+q)}}h.forEach((function(e,t){if(!m.has(t)){var r=h.get(t);(null==r||r.isResolved||r.isRejected)&&h.delete(t)}})),f.extent={xmin:n.xmin,ymin:n.ymin,xmax:n.xmax,ymax:n.ymax}}}}));