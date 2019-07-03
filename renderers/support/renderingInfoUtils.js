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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/maybe","../visualVariables/support/visualVariableUtils","../../support/arcadeUtils"],function(e,r,i,t,a,o){function l(e,r){if(!e||e.symbol)return null;var i=r.renderer;return e&&i&&i.getObservationRenderer?i.getObservationRenderer(e):i}function n(e,r){if(t.isSome(e.symbol))return e.symbol;var a=l(e,r);return a&&a.getSymbol(e,i({},r,{arcadeUtils:o}))}function s(e,r){var i=l(e,r),t=n(e,r);if(!t)return null;var o={renderer:i,symbol:t};if(!(i&&"visualVariables"in i&&i.visualVariables))return o;for(var s=a.getVisualVariableValues(i,e,r),u=["proportional","proportional","proportional"],p=0,b=s;p<b.length;p++){var y=b[p],d=y.variable,v=y.value;if("color"===d.type)o.color=v.toRgba();else if("size"===d.type)if("outline"===d.target)o.outlineSize=v;else{var f=d.axis,g=d.useSymbolValue?"symbolValue":v;"width"===f?u[0]=g:"depth"===f?u[1]=g:"height"===f?u[2]=g:u[0]=u[1]="width-and-depth"===f?g:u[2]=g}else"opacity"===d.type?o.opacity=v:"rotation"===d.type&&"tilt"===d.axis?o.tilt=v:"rotation"===d.type&&"roll"===d.axis?o.roll=v:"rotation"===d.type&&(o.heading=v)}return(isFinite(u[0])||isFinite(u[1])||isFinite(u[2]))&&(o.size=u),o}Object.defineProperty(r,"__esModule",{value:!0}),r.getRenderer=l,r.getSymbol=n,r.getRenderingInfo=s});