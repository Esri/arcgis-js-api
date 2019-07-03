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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/object","../../core/Warning","../ClassBreaksRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../SimpleRenderer","../StretchRenderer","../UniqueValueRenderer"],function(e,r,n,t,u,s,a,i,o,l,d,p){function c(e){return e?R[e.type]||null:null}function f(e,r,n){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return n&&n.messages&&n.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null;var t=c(e);if(t){var s=new t;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new u("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function y(e,r,n,u){var s=m(e,{},u);s&&t.setDeepValue(n,s,r)}function m(e,r,t){return e?t&&"web-scene"===t.origin&&"heatmap"===e.type?(t.messages&&t.messages.push(new n("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:t})),null):e.write(r,t):null}function w(e,r){return f(e,null,r)}Object.defineProperty(r,"__esModule",{value:!0});var R={simple:l,uniqueValue:p,classBreaks:s,heatmap:o,dotDensity:i,rasterStretch:d,dictionary:a};r.read=f,r.writeTarget=y,r.write=m,r.fromJSON=w});