// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/has","./kernel","./geometry/Point","./geometry/Extent"],function(o,e,t,n,i){function r(o,e,t){var n,i,r,a,l=o.width,f=o.height,h=t.xmax-t.xmin,s=t.ymax-t.ymin,x=o.__tileInfo===e,u=x?o.getMinZoom():-1,d=x?o.getMaxZoom():-1,g=-1,y=e.lods,c=Math.abs;for(u=u>-1?u:0,d=d>-1?d:y.length-1,n=u;d>=n;n++)if(r=y[n]){if(a=c(h>s?s-f*r.resolution:h-l*r.resolution),!(0>g||g>=a))break;i=r,g=a}return i}function a(o,e,t){var n=t.resolution,r=(e.xmin+e.xmax)/2,a=(e.ymin+e.ymax)/2,l=o.width/2*n,f=o.height/2*n;return new i(r-l,a-f,r+l,a+f,e.spatialReference)}function l(o,e,t,n){var i=n.resolution,r=e.width,a=e.height,l=e.origin,f=o.__visibleDelta,h=Math.floor,s=r*i,x=a*i,u=h((l.y-t.y)/x),d=h((t.x-l.x)/s),g=l.x+d*s,y=l.y-u*x,c=h(Math.abs((t.x-g)*r/s))+f.x,m=h(Math.abs((t.y-y)*a/x))+f.y;return{point:t,coords:{row:u,col:d},offsets:{x:c,y:m}}}var f={_addFrameInfo:function(e,t){var n,i,r,a=2*t.origin[1],l=t.origin[0],f=e.origin.x,h=e.width;o.forEach(e.lods,function(o){n=Math.round(a/o.resolution),i=Math.ceil(n/h),r=Math.floor((l-f)/(h*o.resolution)),o._frameInfo||(o._frameInfo=[i,r,r+i-1,n])})},getContainingTileCoords:function(o,e,t){var n=o.origin,i=t.resolution,r=o.width*i,a=o.height*i,l=Math.floor((e.x-n.x)/r),f=Math.floor((n.y-e.y)/a);return{row:f,col:l}},getCandidateTileInfo:function(o,e,t){var i=r(o,e,t),f=a(o,t,i),h=l(o,e,new n(f.xmin,f.ymax,t.spatialReference),i);return{tile:h,lod:i,extent:f}},getTileExtent:function(o,e,t,n){var r=o.origin,a=o.lods[e],l=a.resolution,f=o.width,h=o.height;return new i(n*l*f+r.x,r.y-(t+1)*l*h,(n+1)*l*f+r.x,r.y-t*l*h,o.spatialReference)}};return e("extend-esri")&&(t.TileUtils=f),f});