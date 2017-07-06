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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/lang","../../core/Error","../Font","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../SimpleFillSymbol","../TextSymbol","../WebStyleSymbol","../Symbol3D","../LineSymbol3D","../PointSymbol3D","../PolygonSymbol3D","../LabelSymbol3D","../LineSymbol3DLayer","../IconSymbol3DLayer","../FillSymbol3DLayer","../TextSymbol3DLayer","../../Color"],function(e,o,l,r,t,n,i,c,a,s,f,m,u,y,b,S,d,h,w,p,v,L){function g(e){return e in E?E[e]:(console.log(e+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}function D(e,o,l,r){if(void 0===o&&(o=!1),void 0===l&&(l=!1),void 0===r&&(r=!0),!e)return{symbol:null};var n;if(e instanceof u||e instanceof m)n=e.clone();else if(e instanceof i)n=k(e);else if(e instanceof c)n=z(e);else if(e instanceof a)n=z(e);else if(e instanceof s)n=x(e);else{if(!(e instanceof f))return{error:new t("symbol-conversion:unsupported-2d-symbol","Unsupported 2D symbol of tyoe '"+(e.type||e.declaredClass)+"'",{symbol:e})};n=_(e,r)}if(o&&(n.id=e.id),l&&n.isInstanceOf(u))for(var y=0;y<n.symbolLayers.length;++y)n.symbolLayers.getItemAt(y)._ignoreDrivers=!0;return{symbol:n}}function k(e){return new y(new h({size:e.width||1,material:{color:e.color?e.color.clone():[255,255,255]}}))}function z(e){var o,l,r,t=e.color?e.color.clone():new L([255,255,255]);e instanceof a?(e.color&&0===e.color.r&&0===e.color.g&&0===e.color.b&&(t=new L([255,255,255])),o={href:e.url},l=e.width<=e.height?e.height:e.width):(o={primitive:g(e.style)},l=e.size,e.outline&&e.outline.color&&e.outline.width>0&&(r={size:e.outline.width,color:e.outline.color.clone()}));var n={size:l,screenOffset:[e.xoffset,e.yoffset],resource:o,material:{color:t},outline:r};return new b(new w(n))}function x(e){var o=new p({material:{color:e.color?e.color.clone():[255,255,255]}});return e.outline&&e.outline.color&&(o.outline={size:e.outline.width||0,color:e.outline.color}),new S(o)}function _(e,o){var r;switch(e.verticalAlignment){case"top":r="top";break;case"middle":r="center";break;case"bottom":r="bottom";break;default:r="center"}switch(e.horizontalAlignment){case"left":r+="Left";break;case"center":r+="Center";break;case"right":r+="Right";break;default:r+="Center"}var t=l.clone(n.defaultProps);e.font&&l.mixin(t,e.font);var i=C(e.haloColor,e.haloSize),c=o?d:b;return new c(new v({size:t.size,font:{family:t.family,weight:t.weight,style:t.style},halo:i,material:{color:e.color.clone()},placement:r,screenOffset:[e.xoffset,e.yoffset],text:e.text}))}function C(e,o){return e&&o>0?{color:r.clone(e),size:o}:null}Object.defineProperty(o,"__esModule",{value:!0});var E={};E[c.STYLE_CIRCLE]="circle",E[c.STYLE_CROSS]="cross",E[c.STYLE_DIAMOND]="kite",E[c.STYLE_SQUARE]="square",E[c.STYLE_X]="x",o.to3D=D});