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

define(["require","exports"],function(e,r){function t(e,r){if(!e||e.symbol)return null;var t=r.renderer;return e&&t&&t.getObservationRenderer?t.getObservationRenderer(e):t}function i(e,r){if(e.symbol)return e.symbol;var i=t(e,r);return i&&i.getSymbol(e,r)}function o(e,r){var o=t(e,r),n=i(e,r);if(!n)return null;var l={renderer:o,symbol:n};if(o){if(o.colorInfo&&(l.color=o.getColor(e).toRgba()),o.sizeInfo){var a=o.getSize(e);l.size=[a,a,a]}if(o.visualVariables){for(var s=o.getVisualVariableValues(e,r),a=["proportional","proportional","proportional"],u=0,f=s;u<f.length;u++){var p=f[u],y=p.variable,b=p.value;if("color"===y.type)l.color=b.toRgba();else if("size"===y.type)if("outline"===y.target)l.outlineSize=b;else{var g=y.axis,d=y.useSymbolValue?"symbolValue":b;"width"===g?a[0]=d:"depth"===g?a[1]=d:"height"===g?a[2]=d:"width-and-depth"===g?a[0]=a[1]=d:a[0]=a[1]=a[2]=d}else"opacity"===y.type?l.opacity=b:"rotation"===y.type&&"tilt"===y.axis?l.tilt=b:"rotation"===y.type&&"roll"===y.axis?l.roll=b:"rotation"===y.type&&(l.heading=b)}(isFinite(a[0])||isFinite(a[1])||isFinite(a[2]))&&(l.size=a)}}return l}Object.defineProperty(r,"__esModule",{value:!0}),r.getRenderer=t,r.getSymbol=i,r.getRenderingInfo=o});