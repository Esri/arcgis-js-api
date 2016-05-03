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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../../symbols/Font","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/PictureMarkerSymbol","../../../../symbols/SimpleFillSymbol","../../../../symbols/TextSymbol","../../../../symbols/Symbol3D","../../../../symbols/Symbol","../../../../symbols/LineSymbol3D","../../../../symbols/PointSymbol3D","../../../../symbols/PolygonSymbol3D","../../../../symbols/LabelSymbol3D","../../../../renderers/support/jsonUtils"],function(e,o,t,r,l,n,s,a,i,c,y,m,f,b){function u(e){return e.toRgb().map(function(e){return e})}function S(e){return e.r+e.g+e.b===0}function d(e){return Math.round(100*(1-e.a))}function p(e){return"data:"===e.substring(0,5)}function v(e){var o={};return o[r.STYLE_CIRCLE]="circle",o[r.STYLE_CROSS]="cross",o[r.STYLE_DIAMOND]="kite",o[r.STYLE_SQUARE]="square",o[r.STYLE_X]="x",e in o?o[e]:(console.log(e+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}var g=function(i,b,g){var L;if(i instanceof t)L=c.fromJSON({symbolLayers:[{type:"Line",enable:!0,size:i.width||1,material:{color:i.color?u(i.color):[255,255,255],transparency:i.color?d(i.color):100}}]});else if(i instanceof l||i instanceof r){var h,I,k=i.color?u(i.color):[255,255,255],w=null==i.color?100:d(i.color);i instanceof l?(i.color&&S(i.color)&&(k=[255,255,255]),h=i.source.imageData&&i.source.contentType?{dataURI:"data:"+i.source.contentType+";base64,"+i.source.imageData}:p(i.url)?{dataURI:i.url}:{href:i.url},I=i.width):(h={primitive:v(i.style)},I=i.size);var D={type:"Icon",enable:!0,size:I,screenOffset:[i.xoffset,i.yoffset],resource:h,material:{color:k,transparency:w}};i.outline&&i.outline.color&&i.outline.width>0&&(D.outline={size:i.outline.width,color:u(i.outline.color),transparency:d(i.outline.color)}),L=y.fromJSON({symbolLayers:[D]})}else if(i instanceof n){var x={symbolLayers:[{type:"Fill",enable:!0,material:{color:i.color?u(i.color):[255,255,255],transparency:i.color?d(i.color):100}}]};if(L=m.fromJSON(x),i.outline&&i.outline.color){var O=L.symbolLayers.getItemAt(0);O.outline={size:i.outline.width||0,color:i.outline.color}}}else if(i instanceof s){var T;switch(i.verticalAlignment){case"top":T="top";break;case"middle":T="center";break;case"bottom":T="bottom";break;default:T="center"}switch(i.horizontalAlignment){case"left":T+="Left";break;case"center":T+="Center";break;case"right":T+="Right";break;default:T+="Center"}var z=e.clone(o.defaultProps);i.font&&e.mixin(z,i.font),L=f.fromJSON({symbolLayers:[{type:"Text",enable:!0,size:z.size,font:{family:z.family,weight:z.weight,style:z.style},material:{color:u(i.color)},placement:T,screenOffset:[i.xoffset,i.yoffset],text:i.text}]})}else i instanceof a?L=i:console.warn("SymbolConverter: don't know how to convert symbol of type '%s'",i.type||i.declaredClass);if(b&&L&&(L.id=i.id),g&&L)for(var A=0;A<L.symbolLayers.length;++A)L.symbolLayers.getItemAt(A)._ignoreDrivers=!0;return L},L=function(e){function o(e){return e instanceof i&&!(e instanceof a)?g(e,!1,!1):e}var t=b.fromJSON(e.toJSON());t.defaultSymbol=o(t.defaultSymbol),t.symbol=o(t.symbol);var r=t.classBreakInfos||t.uniqueValueInfos;return Array.isArray(r)&&r.forEach(function(e){e.symbol=o(e.symbol)}),"undefined"!=typeof e.isMaxInclusive&&(t.isMaxInclusive=e.isMaxInclusive),t};return{toWeb3DSymbol:g,toWeb3DRenderer:L}});