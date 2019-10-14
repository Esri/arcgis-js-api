// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/Error","../../core/object","../../core/Warning","../ClassBreaksRenderer","../DictionaryRenderer","../DotDensityRenderer","../HeatmapRenderer","../SimpleRenderer","../UniqueValueRenderer"],function(e,r,n,t,s,u,a,i,o,l,d,c){function p(e){return e?g[e.type]||null:null}function f(e,r,n){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return n&&n.messages&&n.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null;var t=p(e);if(t){var s=new t;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new u("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function y(e,r,n,t){var u=w(e,{},t);u&&s.setDeepValue(n,u,r)}function m(e,r){if(!r||"web-scene"!==r.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return n.neverReached(e),!1}}function w(e,r,n){return e?m(e,n)?e.write(r,n):(n.messages&&n.messages.push(new t("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:n})),null):null}function R(e,r){return f(e,null,r)}Object.defineProperty(r,"__esModule",{value:!0});var g={simple:d,uniqueValue:c,classBreaks:a,heatmap:l,dotDensity:o,dictionary:i};r.read=f,r.writeTarget=y,r.write=w,r.fromJSON=R});