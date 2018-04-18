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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../Color","../../core/Error","../../core/lang","../FillSymbol3DLayer","../Font","../IconSymbol3DLayer","../LabelSymbol3D","../LineSymbol3D","../LineSymbol3DLayer","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../Symbol3D","../TextSymbol","../TextSymbol3DLayer","../WebStyleSymbol"],function(o,e,l,n,r,i,t,c,s,a,u,y,m,f,b,S,d,w,h,L,p,D){function v(o){return o in C?C[o]:(console.log(o+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}function g(o,e,l,n){if(void 0===e&&(e=!1),void 0===l&&(l=!1),void 0===n&&(n=!0),!o)return{symbol:null};var i;if(o instanceof h||o instanceof D)i=o.clone();else if(o instanceof d)i=z(o);else if(o instanceof w)i=_(o);else if(o instanceof m)i=_(o);else if(o instanceof S)i=E(o);else{if(!(o instanceof L))return{error:new r("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(o.type||o.declaredClass)+"' is unsupported in 3D",{symbol:o})};i=x(o,n)}if(e&&(i.id=o.id),l&&i.isInstanceOf(h))for(var t=0;t<i.symbolLayers.length;++t)i.symbolLayers.getItemAt(t)._ignoreDrivers=!0;return{symbol:i}}function z(o){return new u(new y({size:o.width||1,material:{color:o.color?o.color.clone():[255,255,255]}}))}function _(o){var e,l,r,i=o.color?o.color.clone():new n([255,255,255]);return o instanceof m?(o.color&&0===o.color.r&&0===o.color.g&&0===o.color.b&&(i=new n([255,255,255])),e={href:o.url},l=o.width<=o.height?o.height:o.width):(e={primitive:v(o.style)},l=o.size,o.outline&&o.outline.color&&o.outline.width>0&&(r={size:o.outline.width,color:o.outline.color.clone()})),new f(new s({size:l,resource:e,material:{color:i},outline:r}))}function E(o){var e=new t({material:{color:o.color?o.color.clone():[255,255,255]}});return o.outline&&o.outline.color&&(e.outline={size:o.outline.width||0,color:o.outline.color}),new b(e)}function x(o,e){var n=l.clone(c.defaultProps);o.font&&l.mixin(n,o.font);var r=T(o.haloColor,o.haloSize);return new(e?a:f)(new p({size:n.size,font:{family:n.family,weight:n.weight,style:n.style},halo:r,material:{color:o.color.clone()},text:o.text}))}function T(o,e){return o&&e>0?{color:i.clone(o),size:e}:null}Object.defineProperty(e,"__esModule",{value:!0});var C={};C[w.STYLE_CIRCLE]="circle",C[w.STYLE_CROSS]="cross",C[w.STYLE_DIAMOND]="kite",C[w.STYLE_SQUARE]="square",C[w.STYLE_X]="x",e.to3D=g});