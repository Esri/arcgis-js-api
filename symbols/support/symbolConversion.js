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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/lang","../../core/Error","../Font","../SimpleLineSymbol","../SimpleMarkerSymbol","../PictureMarkerSymbol","../SimpleFillSymbol","../TextSymbol","../WebStyleSymbol","../Symbol3D","../LineSymbol3D","../PointSymbol3D","../PolygonSymbol3D","../LabelSymbol3D","../LineSymbol3DLayer","../IconSymbol3DLayer","../FillSymbol3DLayer","../TextSymbol3DLayer","../../Color"],function(o,e,l,n,r,i,t,c,s,a,u,y,m,f,b,S,d,w,h,L,p,v){function D(o){return o in C?C[o]:(console.log(o+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}function g(o,e,l,n){if(void 0===e&&(e=!1),void 0===l&&(l=!1),void 0===n&&(n=!0),!o)return{symbol:null};var i;if(o instanceof m||o instanceof y)i=o.clone();else if(o instanceof t)i=z(o);else if(o instanceof c)i=_(o);else if(o instanceof s)i=_(o);else if(o instanceof a)i=E(o);else{if(!(o instanceof u))return{error:new r("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(o.type||o.declaredClass)+"' is unsupported in 3D",{symbol:o})};i=x(o,n)}if(e&&(i.id=o.id),l&&i.isInstanceOf(m))for(var f=0;f<i.symbolLayers.length;++f)i.symbolLayers.getItemAt(f)._ignoreDrivers=!0;return{symbol:i}}function z(o){return new f(new w({size:o.width||1,material:{color:o.color?o.color.clone():[255,255,255]}}))}function _(o){var e,l,n,r=o.color?o.color.clone():new v([255,255,255]);o instanceof s?(o.color&&0===o.color.r&&0===o.color.g&&0===o.color.b&&(r=new v([255,255,255])),e={href:o.url},l=o.width<=o.height?o.height:o.width):(e={primitive:D(o.style)},l=o.size,o.outline&&o.outline.color&&o.outline.width>0&&(n={size:o.outline.width,color:o.outline.color.clone()}));var i={size:l,resource:e,material:{color:r},outline:n};return new b(new h(i))}function E(o){var e=new L({material:{color:o.color?o.color.clone():[255,255,255]}});return o.outline&&o.outline.color&&(e.outline={size:o.outline.width||0,color:o.outline.color}),new S(e)}function x(o,e){var n=l.clone(i.defaultProps);o.font&&l.mixin(n,o.font);var r=T(o.haloColor,o.haloSize),t=e?d:b;return new t(new p({size:n.size,font:{family:n.family,weight:n.weight,style:n.style},halo:r,material:{color:o.color.clone()},text:o.text}))}function T(o,e){return o&&e>0?{color:n.clone(o),size:e}:null}Object.defineProperty(e,"__esModule",{value:!0});var C={};C[c.STYLE_CIRCLE]="circle",C[c.STYLE_CROSS]="cross",C[c.STYLE_DIAMOND]="kite",C[c.STYLE_SQUARE]="square",C[c.STYLE_X]="x",e.to3D=g});