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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../../symbol","../../symbols/utils","dojo/Deferred","dojo/dom-construct","dojo/on","dojox/gfx"],(function(e,t,i,r,n,o){var s={_pureOutlineStyles:"x,cross",isPoint:function(e){return s.isType(e,"marker")},isType:function(e,t){return e&&e.type.indexOf(t+"symbol")>-1},isLine:function(e){return s.isType(e,"line")},isPolygon:function(e){return s.isType(e,"fill")},hasPureOutlineStyle:function(e){return e&&s._pureOutlineStyles.indexOf(e.style)>-1},getOutline:function(e){return"simplelinesymbol"===e.type||"cartographiclinesymbol"===e.type?e:e.outline},cloneSymbol:function(t){return e.jsonUtils.fromJson(t.toJson())},setOutlineWidth:function(e,t){var i=e&&s.getOutline(e);!isNaN(t)&&i&&i.setWidth(t)},setOutlineStyle:function(t,i){var r=t&&s.getOutline(t);i&&r&&(i=r.color?i:e.SimpleLineSymbol.STYLE_NULL,r.setStyle(i))},setLineMarker:function(e,t){var i=s.getOutline(e);i&&i.setMarker(t)},setSize:function(e,t){if(e&&!isNaN(t)){var i,r=e.width,n=t;if(r!=n)if("picturemarkersymbol"===e.type){if(i=e.url,t=s.preserveAspectRatio({dimensions:e,targetDimension:"width",targetSize:n}),e.setHeight(t.height),e.setWidth(t.width),!i||"http://"===i||-1===i.indexOf("http://")&&-1===i.indexOf("data:"))return;if(e.xoffset||e.yoffset){var o=(n=e.width)/r;e.setOffset(Math.round(e.xoffset*o),Math.round(e.yoffset*o))}}else e.setSize(n)}},getMarkerLength:function(e){return isNaN(e.width)?e.size:e.width},hasColor:function(e){return e&&e.color},setFillColor:function(e,t){e.setColor(t)},setOutlineColor:function(e,t){var i=s.getOutline(e);i&&i.setColor(t)},renderOnSurface:function(i,r){if(i){var n,l,u,a,h=80,f=30,d=s.isLine(i),c=!!i.outline?1.5*i.outline.width:1;if(d)h=250,f=i.marker?5.5*i.width:i.width;else if("simplemarkersymbol"===i.type)f=h=i.size;else if("picturemarkersymbol"===i.type){if(!i.url||"http://"===i.url||-1===i.url.indexOf("http://")&&-1===i.url.indexOf("https://")&&-1===i.url.indexOf("data:"))return;h=i.width,f=i.height}return h+=c,f+=c,n=o.createSurface(r,h,f),l=e.jsonUtils.getShapeDescriptors(i),d&&(l.defaultShape.path="M -90,0 L 90,0 E"),u=n.createShape(l.defaultShape).setFill(l.fill).setStroke(l.stroke),d&&t.applyLineMarker(u,i,null,this._acquireSVGMarker),a={dx:.5*h,dy:.5*f},u.applyTransform(a),n}},_acquireSVGMarker:function(e,i,r,n){var o="symbol-util__marker--"+n,s=t.createSVGMarker(i,o,r,n);return e.getParent().defNode.appendChild(s),s},preserveAspectRatio:function(e){var t=e.dimensions,i="height"===e.targetDimension?"height":"width",r=e.targetSize;return"height"===i?{height:r,width:t.width/t.height*r}:{height:t.height/t.width*r,width:r}},toLineMarker:function(e){return e&&"none"!==e?{style:"arrow",placement:e}:null},testImageUrl:function(e){var t,o,s=new i,l=r.create("img");return t=n(l,"load",(function(){0!==l.width||0!==l.height?s.resolve({width:l.width,height:l.height}):s.reject(new Error("image has both width and height of 0"))})),o=n(l,"error",(function(){s.reject(new Error("could not load image"))})),l.src=e,s.promise.always((function(){t.remove(),o.remove(),r.destroy(l)})),s.promise}};return s}));