// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["../../symbol","dojo/Deferred","dojo/dom-construct","dojo/on","dojox/gfx"],function(e,t,i,n,r){var o={_pureOutlineStyles:"x,cross",isPoint:function(e){return o.isType(e,"marker")},isType:function(e,t){return e&&e.type.indexOf(t+"symbol")>-1},isLine:function(e){return o.isType(e,"line")},isPolygon:function(e){return o.isType(e,"fill")},hasPureOutlineStyle:function(e){return e&&o._pureOutlineStyles.indexOf(e.style)>-1},getOutline:function(e){return"simplelinesymbol"===e.type||"cartographiclinesymbol"===e.type?e:e.outline},cloneSymbol:function(t){return e.jsonUtils.fromJson(t.toJson())},setOutlineWidth:function(e,t){!isNaN(t)&&e&&o.getOutline(e).setWidth(t)},setOutlineStyle:function(t,i){if(i&&t){var n=o.getOutline(t);i=n.color?i:e.SimpleLineSymbol.STYLE_NULL,n.setStyle(i)}},setSize:function(e,t){if(e&&!isNaN(t)){var i,n=e.width,r=t;if(n!=r)if("picturemarkersymbol"===e.type){if(i=e.url,t=o.preserveAspectRatio({dimensions:e,targetDimension:"width",targetSize:r}),e.setHeight(t.height),e.setWidth(t.width),!i||"http://"===i||-1===i.indexOf("http://")&&-1===i.indexOf("data:"))return;if(e.xoffset||e.yoffset){r=e.width;var s=r/n;e.setOffset(Math.round(e.xoffset*s),Math.round(e.yoffset*s))}}else e.setSize(r)}},getMarkerLength:function(e){return isNaN(e.width)?e.size:e.width},hasColor:function(e){return e&&e.color},setFillColor:function(e,t){e.setColor(t)},setOutlineColor:function(e,t){o.getOutline(e).setColor(t)},renderOnSurface:function(t,i){if(t){var n,s,l,h,u,a=80,f=30,d=o.isLine(t),c=!!t.outline,m=c?1.5*t.outline.width:1;if(d)a=190,f=20;else if("simplemarkersymbol"===t.type)a=t.size,f=a;else if("picturemarkersymbol"===t.type){if(!t.url||"http://"===t.url||-1===t.url.indexOf("http://")&&-1===t.url.indexOf("https://")&&-1===t.url.indexOf("data:"))return;a=t.width,f=t.height}return a+=m,f+=m,n=r.createSurface(i,a,f),s=e.jsonUtils.getShapeDescriptors(t),d&&(s.defaultShape.path="M -90,0 L 90,0 E"),l=n.createShape(s.defaultShape).setFill(s.fill).setStroke(s.stroke),h=n.getDimensions(),u={dx:.5*h.width,dy:.5*h.height},l.applyTransform(u),n}},preserveAspectRatio:function(e){var t=e.dimensions,i="height"===e.targetDimension?"height":"width",n=e.targetSize;return"height"===i?{height:n,width:t.width/t.height*n}:{height:t.height/t.width*n,width:n}},toFullLineStyle:function(t){var i;switch(t){case"dot":i=e.SimpleLineSymbol.STYLE_DOT;break;case"dash":i=e.SimpleLineSymbol.STYLE_DASH;break;case"dashdot":i=e.SimpleLineSymbol.STYLE_DASHDOT;break;case"dashdotdot":i=e.SimpleLineSymbol.STYLE_DASHDOTDOT;break;default:i=e.SimpleLineSymbol.STYLE_SOLID}return i},testImageUrl:function(e){var r,o,s=new t,l=i.create("img");return r=n(l,"load",function(){return 0===l.width&&0===l.height?void s.reject("image has both width and height of 0"):void s.resolve({width:l.width,height:l.height})}),o=n(l,"error",function(e){s.reject("error ocurred while loading image",e)}),l.src=e,s.promise.always(function(){r.remove(),o.remove(),i.destroy(l)}),s.promise}};return o});