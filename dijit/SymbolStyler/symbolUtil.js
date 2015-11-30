// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["../../symbol","dojo/Deferred","dojo/dom-construct","dojo/on","dojox/gfx"],function(e,t,i,n,r){var o={_pureOutlineStyles:"x,cross",isPoint:function(e){return o.isType(e,"marker")},isType:function(e,t){return e&&e.type.indexOf(t+"symbol")>-1},isLine:function(e){return o.isType(e,"line")},isPolygon:function(e){return o.isType(e,"fill")},hasPureOutlineStyle:function(e){return e&&o._pureOutlineStyles.indexOf(e.style)>-1},getOutline:function(e){return"simplelinesymbol"===e.type||"cartographiclinesymbol"===e.type?e:e.outline},cloneSymbol:function(t){return e.jsonUtils.fromJson(t.toJson())},setOutlineWidth:function(e,t){!isNaN(t)&&e&&o.getOutline(e).setWidth(t)},setOutlineStyle:function(t,i){if(i&&t){var n=o.getOutline(t);i=n.color?i:e.SimpleLineSymbol.STYLE_NULL,n.setStyle(i)}},setSize:function(e,t){if(e&&!isNaN(t)){var i,n=e.width,r=t;if(n!=r)if("picturemarkersymbol"===e.type){if(i=e.url,e.setHeight(e.height/e.width*r),e.setWidth(r),!i||"http://"===i||-1===i.indexOf("http://")&&-1===i.indexOf("data:"))return;if(e.xoffset||e.yoffset){r=e.width;var o=r/n;e.setOffset(Math.round(e.xoffset*o),Math.round(e.yoffset*o))}}else e.setSize(r)}},getMarkerLength:function(e){return isNaN(e.width)?e.size:Math.max(e.width,e.height)},hasColor:function(e){return e&&e.color},setFillColor:function(e,t){e.setColor(t)},setOutlineColor:function(e,t){o.getOutline(e).setColor(t)},renderOnSurface:function(t,i){if(t){var n,l,s,u,f,a=80,c=30,d=o.isLine(t),h=!!t.outline,y=h?1.5*t.outline.width:1;if(d)a=190,c=20;else if("simplemarkersymbol"===t.type)a=t.size,c=a;else if("picturemarkersymbol"===t.type){if(!t.url||"http://"===t.url||-1===t.url.indexOf("http://")&&-1===t.url.indexOf("https://")&&-1===t.url.indexOf("data:"))return;a=Math.max(t.width,t.height),c=a}return a+=y,c+=y,n=r.createSurface(i,a,c),l=e.jsonUtils.getShapeDescriptors(t),d&&(l.defaultShape.path="M -90,0 L 90,0 E"),s=n.createShape(l.defaultShape).setFill(l.fill).setStroke(l.stroke),u=n.getDimensions(),f={dx:.5*u.width,dy:.5*u.height},s.applyTransform(f),n}},toFullLineStyle:function(t){var i;switch(t){case"dot":i=e.SimpleLineSymbol.STYLE_DOT;break;case"dash":i=e.SimpleLineSymbol.STYLE_DASH;break;case"dashdot":i=e.SimpleLineSymbol.STYLE_DASHDOT;break;case"dashdotdot":i=e.SimpleLineSymbol.STYLE_DASHDOTDOT;break;default:i=e.SimpleLineSymbol.STYLE_SOLID}return i},testImageUrl:function(e){var r,o,l=new t,s=l.promise,u=i.create("img");return r=n(u,"load",function(){0===u.width&&0===u.height?l.reject():l.resolve()}),o=n(u,"error",function(){l.reject()}),u.src=e,s.always(function(){r.remove(),o.remove(),i.destroy(u)}),s}};return o});