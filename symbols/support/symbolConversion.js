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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/Error","../Font","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../SimpleFillSymbol","../TextSymbol","../WebStyleSymbol","../Symbol3D","../LineSymbol3D","../PointSymbol3D","../PolygonSymbol3D","../LabelSymbol3D","../LineSymbol3DLayer","../IconSymbol3DLayer","../FillSymbol3DLayer","../TextSymbol3DLayer","../../Color"],function(e,o,t,r,l,n,i,c,a,s,f,m,y,u,b,S,d,w,h,p,g){function L(e){return e in z?z[e]:(console.log(e+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}function D(e,o,t){if(void 0===o&&(o=!1),void 0===t&&(t=!1),!e)return{symbol:null};var l;if(e instanceof m||e instanceof f)l=e;else if(e instanceof n)l=v(e);else if(e instanceof i)l=k(e);else if(e instanceof c)l=k(e);else if(e instanceof a)l=x(e);else{if(!(e instanceof s))return{error:new r("symbol-conversion:unsupported-2d-symbol","Unsupported 2D symbol of tyoe '"+(e.type||e.declaredClass)+"'",{symbol:e})};l=T(e)}if(o&&(l.id=e.id),t&&l.isInstanceOf(m))for(var y=0;y<l.symbolLayers.length;++y)l.symbolLayers.getItemAt(y)._ignoreDrivers=!0;return{symbol:l}}function v(e){return new y(new d({size:e.width||1,material:{color:e.color?e.color.clone():[255,255,255]}}))}function k(e){var o,t,r,l=e.color?e.color.clone():new g([255,255,255]);e instanceof c?(e.color&&0===e.color.r&&0===e.color.g&&0===e.color.b&&(l=new g([255,255,255])),o=e.source.imageData&&e.source.contentType?{href:"data:"+e.source.contentType+";base64,"+e.source.imageData}:{href:e.url},t=e.width<=e.height?e.height:e.width):(o={primitive:L(e.style)},t=e.size,e.outline&&e.outline.color&&e.outline.width>0&&(r={size:e.outline.width,color:e.outline.color.clone()}));var n={size:t,screenOffset:[e.xoffset,e.yoffset],resource:o,material:{color:l},outline:r};return new u(new w(n))}function x(e){var o=new h({material:{color:e.color?e.color.clone():[255,255,255]}});return e.outline&&e.outline.color&&(o.outline={size:e.outline.width||0,color:e.outline.color}),new b(o)}function T(e){var o;switch(e.verticalAlignment){case"top":o="top";break;case"middle":o="center";break;case"bottom":o="bottom";break;default:o="center"}switch(e.horizontalAlignment){case"left":o+="Left";break;case"center":o+="Center";break;case"right":o+="Right";break;default:o+="Center"}var r=t.clone(l.defaultProps);return e.font&&t.mixin(r,e.font),new S(new p({size:r.size,font:{family:r.family,weight:r.weight,style:r.style},material:{color:e.color.clone()},placement:o,screenOffset:[e.xoffset,e.yoffset],text:e.text}))}var z={};z[i.STYLE_CIRCLE]="circle",z[i.STYLE_CROSS]="cross",z[i.STYLE_DIAMOND]="kite",z[i.STYLE_SQUARE]="square",z[i.STYLE_X]="x",o.to3D=D});