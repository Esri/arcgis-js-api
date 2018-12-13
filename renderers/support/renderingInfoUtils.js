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

define(["require","exports"],function(e,r){function t(e,r){if(!e||e.symbol)return null;var t=r.renderer;return e&&t&&t.getObservationRenderer?t.getObservationRenderer(e):t}function i(e,r){if(e.symbol)return e.symbol;var i=t(e,r);return i&&i.getSymbol(e,r)}function o(e,r){var o=t(e,r),n=i(e,r);if(!n)return null;var l={renderer:o,symbol:n};if(!(o&&"visualVariables"in o&&o.visualVariables))return l;for(var a=o.getVisualVariableValues(e,r),s=["proportional","proportional","proportional"],u=0,p=a;u<p.length;u++){var y=p[u],b=y.variable,d=y.value;if("color"===b.type)l.color=d.toRgba();else if("size"===b.type)if("outline"===b.target)l.outlineSize=d;else{var f=b.axis,v=b.useSymbolValue?"symbolValue":d;"width"===f?s[0]=v:"depth"===f?s[1]=v:"height"===f?s[2]=v:s[0]=s[1]="width-and-depth"===f?v:s[2]=v}else"opacity"===b.type?l.opacity=d:"rotation"===b.type&&"tilt"===b.axis?l.tilt=d:"rotation"===b.type&&"roll"===b.axis?l.roll=d:"rotation"===b.type&&(l.heading=d)}return(isFinite(s[0])||isFinite(s[1])||isFinite(s[2]))&&(l.size=s),l}Object.defineProperty(r,"__esModule",{value:!0}),r.getRenderer=t,r.getSymbol=i,r.getRenderingInfo=o});