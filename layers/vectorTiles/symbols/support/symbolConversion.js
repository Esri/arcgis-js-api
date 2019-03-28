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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../Color","../../symbols","../../core/Error","../../core/lang","../FillSymbol3DLayer","../Font","../IconSymbol3DLayer","../LabelSymbol3D","../LineSymbol3D","../LineSymbol3DLayer","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../TextSymbol","../TextSymbol3DLayer","../WebStyleSymbol"],function(o,e,l,n,r,i,t,c,s,a,u,y,m,b,f,S,d,w,D,L,h){function p(o){return o in x?x[o]:(console.log(o+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}function v(o,e,l,i){if(void 0===e&&(e=!1),void 0===l&&(l=!1),void 0===i&&(i=!0),!o)return{symbol:null};var t;if(n.isSymbol3D(o)||o instanceof h)t=o.clone();else if(o instanceof d)t=g(o);else if(o instanceof w)t=z(o);else if(o instanceof m)t=z(o);else if(o instanceof S)t=E(o);else{if(!(o instanceof D))return{error:new r("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(o.type||o.declaredClass)+"' is unsupported in 3D",{symbol:o})};t=_(o,i)}if(e&&(t.id=o.id),l&&n.isSymbol3D(t))for(var c=0;c<t.symbolLayers.length;++c)t.symbolLayers.getItemAt(c)._ignoreDrivers=!0;return{symbol:t}}function g(o){return new u(new y({size:o.width||1,material:{color:o.color?o.color.clone():[255,255,255]}}))}function z(o){var e,n,r,i=o.color?o.color.clone():new l([255,255,255]);return o instanceof m?(o.color&&0===o.color.r&&0===o.color.g&&0===o.color.b&&(i=new l([255,255,255])),e={href:o.url},n=o.width<=o.height?o.height:o.width):(e={primitive:p(o.style)},n=o.size,o.outline&&o.outline.color&&o.outline.width>0&&(r={size:o.outline.width,color:o.outline.color.clone()})),new b(new s({size:n,resource:e,material:{color:i},outline:r}))}function E(o){var e=new t({material:{color:o.color?o.color.clone():[255,255,255]}});return o.outline&&o.outline.color&&(e.outline={size:o.outline.width||0,color:o.outline.color}),new f(e)}function _(o,e){var l=T(o.haloColor,o.haloSize),n=o.font?o.font.clone():new c;return new(e?a:b)(new L({size:n.size,font:n,halo:l,material:{color:o.color.clone()},text:o.text}))}function T(o,e){return o&&e>0?{color:i.clone(o),size:e}:null}Object.defineProperty(e,"__esModule",{value:!0});var x={};x[w.STYLE_CIRCLE]="circle",x[w.STYLE_CROSS]="cross",x[w.STYLE_DIAMOND]="kite",x[w.STYLE_SQUARE]="square",x[w.STYLE_X]="x",e.to3D=v});