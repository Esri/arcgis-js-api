// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function i(e,r){if(!e||e.symbol)return null;var i=r.renderer;return e&&i&&i.getObservationRenderer?i.getObservationRenderer(e):i}function o(e,r){if(e.symbol)return e.symbol;var o=i(e,r);return o&&o.getSymbol(e,r)}function t(e,r){var t=i(e,r),a=o(e,r);if(!a)return null;var l={renderer:t,symbol:a};if(t){if(t.colorInfo&&(l.color=t.getColor(e).toRgba()),t.sizeInfo){var n=t.getSize(e);l.size=[n,n,n]}if(t.visualVariables){for(var u=t.getVisualVariableValues(e,r),n=["proportional","proportional","proportional"],s=0,v=u;s<v.length;s++){var f=v[s],b=f.variable,g=b.type;if("color"===g)l.color=f.value.toRgba();else if("size"===g)if("outline"===b.target)l.outlineSize=f.value;else{var d=f.variable.axis,p=f.variable.useSymbolValue?"symbolValue":f.value;"width"===d?n[0]=p:"depth"===d?n[1]=p:"height"===d?n[2]=p:"width-and-depth"===d?n[0]=n[1]=p:n[0]=n[1]=n[2]=p}else"opacity"===g?l.opacity=f.value:"rotation"===g&&(l.rotationAngle=f.value)}(isFinite(n[0])||isFinite(n[1])||isFinite(n[2]))&&(l.size=n)}}return l}r.getRenderer=i,r.getSymbol=o,r.getRenderingInfo=t});