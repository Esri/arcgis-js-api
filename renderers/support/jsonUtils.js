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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/object","../../core/Warning","../ClassBreaksRenderer","../DotDensityRenderer","../HeatmapRenderer","../SimpleRenderer","../StretchRenderer","../UniqueValueRenderer"],function(e,r,n,t,u,s,a,o,l,i,d){function p(e){return e?w[e.type]||null:null}function c(e,r,n){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return n&&n.messages&&n.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null;var t=p(e);if(t){var s=new t;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new u("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function f(e,r,n,u){var s=m(e,{},u);s&&t.setDeepValue(n,s,r)}function m(e,r,t){return e?t&&"web-scene"===t.origin&&"heatmap"===e.type?(t.messages&&t.messages.push(new n("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:t})),null):e.write(r,t):null}function y(e,r){return c(e,null,r)}Object.defineProperty(r,"__esModule",{value:!0});var w={simple:l,uniqueValue:d,classBreaks:s,heatmap:o,dotDensity:a,rasterStretch:i};r.read=c,r.writeTarget=f,r.write=m,r.fromJSON=y});