// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../Color","../../symbols","../../core/Error","../../core/lang","../Font"],function(o,e,l,r,n,i,t){function c(o){return o in f?f[o]:(console.log(o+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}function s(o,e,l,i){if(void 0===e&&(e=!1),void 0===l&&(l=!1),void 0===i&&(i=!0),!o)return{symbol:null};var t;if(r.isSymbol3D(o)||o instanceof r.WebStyleSymbol)t=o.clone();else if(o instanceof r.SimpleLineSymbol)t=a(o);else if(o instanceof r.SimpleMarkerSymbol)t=u(o);else if(o instanceof r.PictureMarkerSymbol)t=u(o);else if(o instanceof r.SimpleFillSymbol)t=y(o);else{if(!(o instanceof r.TextSymbol))return{error:new n("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(o.type||o.declaredClass)+"' is unsupported in 3D",{symbol:o})};t=m(o,i)}if(e&&(t.id=o.id),l&&r.isSymbol3D(t))for(var c=0;c<t.symbolLayers.length;++c)t.symbolLayers.getItemAt(c)._ignoreDrivers=!0;return{symbol:t}}function a(o){return new r.LineSymbol3D(new r.LineSymbol3DLayer({size:o.width||1,material:{color:o.color?o.color.clone():[255,255,255]}}))}function u(o){var e,n,i,t=o.color?o.color.clone():new l([255,255,255]);o instanceof r.PictureMarkerSymbol?(o.color&&0===o.color.r&&0===o.color.g&&0===o.color.b&&(t=new l([255,255,255])),e={href:o.url},n=o.width<=o.height?o.height:o.width):(e={primitive:c(o.style)},n=o.size,o.outline&&o.outline.width>0&&(i={size:o.outline.width,color:o.outline.color?o.outline.color.clone():[255,255,255]}));var s={size:n,resource:e,material:{color:t},outline:i};return new r.PointSymbol3D(new r.IconSymbol3DLayer(s))}function y(o){var e=new r.FillSymbol3DLayer({material:{color:o.color?o.color.clone():[255,255,255,0]}});return o.outline&&(e.outline={size:o.outline.width||0,color:o.outline.color?o.outline.color.clone():[255,255,255]}),new r.PolygonSymbol3D(e)}function m(o,e){var l=b(o.haloColor,o.haloSize),n=o.font?o.font.clone():new t;return new(e?r.LabelSymbol3D:r.PointSymbol3D)(new r.TextSymbol3DLayer({size:n.size,font:n,halo:l,material:{color:o.color.clone()},text:o.text}))}function b(o,e){return o&&e>0?{color:i.clone(o),size:e}:null}Object.defineProperty(e,"__esModule",{value:!0});var f={};f.circle="circle",f.cross="cross",f.diamond="kite",f.square="square",f.x="x",e.to3D=s});