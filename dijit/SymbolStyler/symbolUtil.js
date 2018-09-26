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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../../symbol","../../symbols/utils","dojo/Deferred","dojo/dom-construct","dojo/on","dojox/gfx"],function(e,t,i,r,n,o){var l={_pureOutlineStyles:"x,cross",isPoint:function(e){return l.isType(e,"marker")},isType:function(e,t){return e&&e.type.indexOf(t+"symbol")>-1},isLine:function(e){return l.isType(e,"line")},isPolygon:function(e){return l.isType(e,"fill")},hasPureOutlineStyle:function(e){return e&&l._pureOutlineStyles.indexOf(e.style)>-1},getOutline:function(e){return"simplelinesymbol"===e.type||"cartographiclinesymbol"===e.type?e:e.outline},cloneSymbol:function(t){return e.jsonUtils.fromJson(t.toJson())},setOutlineWidth:function(e,t){!isNaN(t)&&e&&l.getOutline(e).setWidth(t)},setOutlineStyle:function(t,i){if(i&&t){var r=l.getOutline(t);i=r.color?i:e.SimpleLineSymbol.STYLE_NULL,r.setStyle(i)}},setLineMarker:function(e,t){e&&l.getOutline(e).setMarker(t)},setSize:function(e,t){if(e&&!isNaN(t)){var i,r=e.width,n=t;if(r!=n)if("picturemarkersymbol"===e.type){if(i=e.url,t=l.preserveAspectRatio({dimensions:e,targetDimension:"width",targetSize:n}),e.setHeight(t.height),e.setWidth(t.width),!i||"http://"===i||-1===i.indexOf("http://")&&-1===i.indexOf("data:"))return;if(e.xoffset||e.yoffset){n=e.width;var o=n/r;e.setOffset(Math.round(e.xoffset*o),Math.round(e.yoffset*o))}}else e.setSize(n)}},getMarkerLength:function(e){return isNaN(e.width)?e.size:e.width},hasColor:function(e){return e&&e.color},setFillColor:function(e,t){e.setColor(t)},setOutlineColor:function(e,t){l.getOutline(e).setColor(t)},renderOnSurface:function(i,r){if(i){var n,s,a,u,h=80,f=30,d=l.isLine(i),c=!!i.outline,p=c?1.5*i.outline.width:1;if(d)h=250,f=i.marker?5.5*i.width:i.width;else if("simplemarkersymbol"===i.type)h=i.size,f=h;else if("picturemarkersymbol"===i.type){if(!i.url||"http://"===i.url||-1===i.url.indexOf("http://")&&-1===i.url.indexOf("https://")&&-1===i.url.indexOf("data:"))return;h=i.width,f=i.height}return h+=p,f+=p,n=o.createSurface(r,h,f),s=e.jsonUtils.getShapeDescriptors(i),d&&(s.defaultShape.path="M -90,0 L 90,0 E"),a=n.createShape(s.defaultShape).setFill(s.fill).setStroke(s.stroke),d&&t.applyLineMarker(a,i,null,this._acquireSVGMarker),u={dx:.5*h,dy:.5*f},a.applyTransform(u),n}},_acquireSVGMarker:function(e,i,r,n){var o="symbol-util__marker--"+n,l=t.createSVGMarker(i,o,r,n);return e.getParent().defNode.appendChild(l),l},preserveAspectRatio:function(e){var t=e.dimensions,i="height"===e.targetDimension?"height":"width",r=e.targetSize;return"height"===i?{height:r,width:t.width/t.height*r}:{height:t.height/t.width*r,width:r}},toFullLineStyle:function(t){var i;switch(t){case"dot":i=e.SimpleLineSymbol.STYLE_DOT;break;case"dash":i=e.SimpleLineSymbol.STYLE_DASH;break;case"dashdot":i=e.SimpleLineSymbol.STYLE_DASHDOT;break;case"longdashdotdot":i=e.SimpleLineSymbol.STYLE_DASHDOTDOT;break;default:i=e.SimpleLineSymbol.STYLE_SOLID}return i},toLineMarker:function(e){return e&&"none"!==e?{style:"arrow",placement:e}:null},testImageUrl:function(e){var t,o,l=new i,s=r.create("img");return t=n(s,"load",function(){if(0===s.width&&0===s.height)return void l.reject("image has both width and height of 0");l.resolve({width:s.width,height:s.height})}),o=n(s,"error",function(e){l.reject("error ocurred while loading image",e)}),s.src=e,l.promise.always(function(){t.remove(),o.remove(),r.destroy(s)}),l.promise}};return l});