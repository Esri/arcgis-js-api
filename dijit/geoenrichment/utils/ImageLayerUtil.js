// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/graphic","esri/symbols/PictureMarkerSymbol","esri/geometry/Extent","esri/geometry/ScreenPoint","./ImageUtil"],(function(t,e,n,r,i){function o(t,n,r,o,a){var h=new e;return n&&h.setWidth(n),r&&h.setHeight(r),h.setOffset(void 0!==o?o:0,void 0!==a?a:0),h.setUrl(t),h.contentType=i.getImageContentType(t)||"image/png",h}return{dataURLToPictureMarkers:function(e,n,a,h){return function(t,e,n){var r=Math.ceil(e/150),a=Math.ceil(n/150),h=[];return i.imageFromUrl(t).then((function(t){for(var e=0;e<r;e++)for(var n=0;n<a;n++){var g=Math.round(150*e),u=Math.round(150*n),m=o(i.imageToDataURL(t,{width:150,height:150,pos:{x:-g,y:-u}}),150,150,75,-75);h.push({symbol:m,x:g,y:u})}return h}))}(n,a,h).then((function(n){return n.map((function(n){return new t(e.toMap(new r(n.x,n.y)),n.symbol)}))}))},clipImageByExtent:function(t,e,r){return r?i.imageFromUrl(t).then((function(t){e.toJson||(e=new n(e));var o=e.intersects(r),a=r.getWidth(),h=r.getHeight(),g=i.imageToDataURL(t,{width:t.width*(o.getWidth()/a),height:t.height*(o.getHeight()/h),pos:{x:t.width*((r.xmin-o.xmin)/a),y:t.height*((o.ymax-r.ymax)/h)}});return{extent:o.toJson(),dataURL:g}})):null}}}));