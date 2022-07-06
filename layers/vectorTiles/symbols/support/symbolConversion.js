// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../Color","../../symbols","../../core/Error","../../core/lang","../FillSymbol3DLayer","../Font","../IconSymbol3DLayer","../LabelSymbol3D","../LineSymbol3D","../LineSymbol3DLayer","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../TextSymbol","../TextSymbol3DLayer","../WebStyleSymbol"],(function(o,e,l,r,n,i,t,c,s,a,y,u,m,b,f,S,d,w,D,L,h){Object.defineProperty(e,"__esModule",{value:!0});var p={};function v(o){var e,r,n,i,t=o.color?o.color.clone():new l([255,255,255]);return o instanceof m?(o.color&&0===o.color.r&&0===o.color.g&&0===o.color.b&&(t=new l([255,255,255])),e={href:o.url},r=o.width<=o.height?o.height:o.width):(e={primitive:(i=o.style,i in p?p[i]:(console.log(i+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle"))},r=o.size,o.outline&&o.outline.color&&o.outline.width>0&&(n={size:o.outline.width,color:o.outline.color.clone()})),new b(new s({size:r,resource:e,material:{color:t},outline:n}))}p[w.STYLE_CIRCLE]="circle",p[w.STYLE_CROSS]="cross",p[w.STYLE_DIAMOND]="kite",p[w.STYLE_SQUARE]="square",p[w.STYLE_X]="x",e.to3D=function(o,e,l,s){if(void 0===e&&(e=!1),void 0===l&&(l=!1),void 0===s&&(s=!0),!o)return{symbol:null};var p;if(r.isSymbol3D(o)||o instanceof h)p=o.clone();else if(o instanceof d)p=function(o){return new y(new u({size:o.width||1,material:{color:o.color?o.color.clone():[255,255,255]}}))}(o);else if(o instanceof w)p=v(o);else if(o instanceof m)p=v(o);else if(o instanceof S)p=function(o){var e=new t({material:{color:o.color?o.color.clone():[255,255,255]}});o.outline&&o.outline.color&&(e.outline={size:o.outline.width||0,color:o.outline.color});return new f(e)}(o);else{if(!(o instanceof D))return{error:new n("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(o.type||o.declaredClass)+"' is unsupported in 3D",{symbol:o})};p=function(o,e){var l=(n=o.haloColor,t=o.haloSize,n&&t>0?{color:i.clone(n),size:t}:null),r=o.font?o.font.clone():new c;var n,t;return new(e?a:b)(new L({size:r.size,font:r,halo:l,material:{color:o.color.clone()},text:o.text}))}(o,s)}if(e&&(p.id=o.id),l&&r.isSymbol3D(p))for(var g=0;g<p.symbolLayers.length;++g)p.symbolLayers.getItemAt(g)._ignoreDrivers=!0;return{symbol:p}}}));