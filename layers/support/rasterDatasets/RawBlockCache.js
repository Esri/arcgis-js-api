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

define(["require","exports","../../../geometry","./EphemeralBlockCache","../rasterFunctions/rasterProjectionHelper"],(function(e,t,n,r,a){Object.defineProperty(t,"__esModule",{value:!0});var o=new Map,l=new r;t.register=function(e,t){var n={extent:null,rasterInfo:t,cache:new Map};if(o.has(e)){var r=o.get(e);return r.push(n),r.length-1}return o.set(e,[n]),0},t.unregister=function(e,t){o.has(e)&&(o.get(e)[t]=null)},t.deleteRaster=function(e){o.delete(e)},t.decreaseRefCount=function(e,t,n){if(!o.has(e))return null==t?l.decreaseRefCount(e,n):0;var r=o.get(e);if(null==r[t])return l.decreaseRefCount(e,n);var a=r[t].cache;if(a.has(n)){var c=a.get(n);if(c.refCount--,0===c.refCount){a.delete(n);for(var i=0;i<r.length;i++)r[i]&&r[i].cache.has(n)&&r[i].cache.delete(n);c.controller&&c.controller.abort()}return c.refCount}return 0},t.getBlock=function(e,t,n){if(!o.has(e))return null==t?l.getBlock(e,n):null;var r=o.get(e);if(null==r[t]){for(var a=0;a<r.length;a++){if(r[a]&&r[a].cache.has(n))return(c=r[a].cache.get(n)).refCount++,c.block}return l.getBlock(e,n)}var c,i=r[t].cache;if(i.has(n))return(c=i.get(n)).refCount++,c.block;for(a=0;a<r.length;a++)if(a!==t&&r[a]&&r[a]&&r[a].cache.has(n)){var u=r[a].cache.get(n);return u.refCount++,i.set(n,u),u.block}return null},t.putBlock=function(e,t,n,r,a){if(void 0===a&&(a=null),o.has(e)){var c=o.get(e);null!=c[t]?c[t].cache.set(n,{refCount:1,block:r,controller:a}):l.putBlock(e,n,r,a)}else null==t&&l.putBlock(e,n,r,a)},t.deleteBlock=function(e,t,n){if(o.has(e)){var r=o.get(e);null!=r[t]?r[t].cache.delete(n):l.deleteBlock(e,n)}else null==t&&l.deleteBlock(e,n)},t.update=function(e,t,r,l,c,i,u){void 0===u&&(u=null);var f=function(e,t){if(!o.has(e))return null;var n=o.get(e);return null==n[t]?null:n[t]}(e,t),s=f.extent,h=f.cache,g=f.rasterInfo,x=r.clone().normalize();if(r=x[0],!s||s.xmin!==r.xmin||s.xmax!==r.xmax||s.ymin!==r.ymin||s.ymax!==r.ymax){var m=g.spatialReference,d=a.projectExtent(r,m,u),v=new n.Point({x:l,y:l,spatialReference:r.spatialReference});if(null!==c||(c=a.projectResolution(v,m,r,u))){var y=a.snapPyramid(c,g,i||"closest"),p=y.pyramidLevel,k=y.pyramidResolution;if(!y.excessiveReading){for(var B=Math.floor((d.xmin-g.storageInfo.origin.x)/k.x),C=Math.floor((g.storageInfo.origin.y-d.ymax)/k.y),M=Math.ceil((d.xmax-d.xmin)/k.x-.1),R=Math.ceil((d.ymax-d.ymin)/k.y-.1),b=p>0?g.storageInfo.pyramidBlockWidth:g.storageInfo.blockWidth,I=p>0?g.storageInfo.pyramidBlockHeight:g.storageInfo.blockHeight,w=Math.floor(B/b),j=Math.floor(C/I),P=Math.floor((B+M-1)/b),E=Math.floor((C+R-1)/I),H=new Set,W=j-1;W<=E+1;W++)for(var _=w-1;_<=P+1;_++)H.add(p+"/"+W+"/"+_);h.forEach((function(e,t){H.has(t)||h.delete(t)})),f.extent={xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax}}}}}}));