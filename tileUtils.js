// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/has","./kernel","./geometry/Point","./geometry/Extent"],(function(o,e,t,n,i){var r={_addFrameInfo:function(e,t){var n,i,r,a=2*t.origin[1],l=t.origin[0],f=e.origin.x,h=e.width;o.forEach(e.lods,(function(o){n=Math.round(a/o.resolution),i=Math.ceil(n/h),r=Math.floor((l-f)/(h*o.resolution)),o._frameInfo||(o._frameInfo=[i,r,r+i-1,n])}))},getContainingTileCoords:function(o,e,t){var n=o.origin,i=t.resolution,r=o.width*i,a=o.height*i,l=Math.floor((e.x-n.x)/r);return{row:Math.floor((n.y-e.y)/a),col:l}},getCandidateTileInfo:function(o,e,t){var r=function(o,e,t){var n,i,r,a,l=o.width,f=o.height,h=t.xmax-t.xmin,s=t.ymax-t.ymin,x=o.__tileInfo===e,u=x?o.getMinZoom():-1,d=x?o.getMaxZoom():-1,g=-1,y=e.lods,c=Math.abs;for(u=u>-1?u:0,d=d>-1?d:y.length-1,n=u;n<=d;n++)if(r=y[n]){if(a=c(h>s?s-f*r.resolution:h-l*r.resolution),!(g<0||a<=g))break;i=r,g=a}return i}(o,e,t),a=function(o,e,t){var n=t.resolution,r=(e.xmin+e.xmax)/2,a=(e.ymin+e.ymax)/2,l=o.width/2*n,f=o.height/2*n;return new i(r-l,a-f,r+l,a+f,e.spatialReference)}(o,t,r);return{tile:function(o,e,t,n){var i=n.resolution,r=e.width,a=e.height,l=e.origin,f=o.__visibleDelta,h=Math.floor,s=r*i,x=a*i,u=h((l.y-t.y)/x),d=h((t.x-l.x)/s),g=l.x+d*s,y=l.y-u*x;return{point:t,coords:{row:u,col:d},offsets:{x:h(Math.abs((t.x-g)*r/s))+f.x,y:h(Math.abs((t.y-y)*a/x))+f.y}}}(o,e,new n(a.xmin,a.ymax,t.spatialReference),r),lod:r,extent:a}},getTileExtent:function(o,e,t,n){var r=o.origin,a=o.lods[e].resolution,l=o.width,f=o.height;return new i(n*a*l+r.x,r.y-(t+1)*a*f,(n+1)*a*l+r.x,r.y-t*a*f,o.spatialReference)}};return e("extend-esri")&&(t.TileUtils=r),r}));