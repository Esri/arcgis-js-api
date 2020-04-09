// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/Error","../../core/object","../../core/Warning","../ClassBreaksRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../SimpleRenderer","../UniqueValueRenderer"],(function(e,r,n,t,s,u,a,i,o,d,l,c){Object.defineProperty(r,"__esModule",{value:!0});var p={simple:l,uniqueValue:c,classBreaks:a,heatmap:d,dotDensity:o,dictionary:i};function f(e,r,n){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return n&&n.messages&&n.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null;var t=function(e){return e&&p[e.type]||null}(e);if(t){var s=new t;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new u("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function y(e,r,s){return e?function(e,r){if(!r||"web-scene"!==r.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return n.neverReached(e),!1}}(e,s)?e.write(r,s):(s.messages&&s.messages.push(new t("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:s})),null):null}r.read=f,r.writeTarget=function(e,r,n,t){var u=y(e,{},t);u&&s.setDeepValue(n,u,r)},r.write=y,r.fromJSON=function(e,r){return f(e,0,r)}}));