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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils","../../support/arcadeUtils"],function(e,t,i,r,o,n,a,l,s){function u(e,t){if(!e||e.symbol)return null;var i=t.renderer;return e&&i&&i.getObservationRenderer?i.getObservationRenderer(e):i}function p(e,t){if(a.isSome(e.symbol))return e.symbol;var r=u(e,t);return r&&r.getSymbol(e,i({},t,{arcadeUtils:s}))}function y(e,t){var i=u(e,t),r=p(e,t);if(!r)return null;var o={renderer:i,symbol:r};if(!(i&&"visualVariables"in i&&i.visualVariables))return o;for(var n=l.getVisualVariableValues(i,e,t),a=["proportional","proportional","proportional"],s=0,y=n;s<y.length;s++){var b=y[s],c=b.variable,d=b.value;if("color"===c.type)o.color=d.toRgba();else if("size"===c.type)if("outline"===c.target)o.outlineSize=d;else{var v=c.axis,f=c.useSymbolValue?"symbolValue":d;"width"===v?a[0]=f:"depth"===v?a[1]=f:"height"===v?a[2]=f:a[0]=a[1]="width-and-depth"===v?f:a[2]=f}else"opacity"===c.type?o.opacity=d:"rotation"===c.type&&"tilt"===c.axis?o.tilt=d:"rotation"===c.type&&"roll"===c.axis?o.roll=d:"rotation"===c.type&&(o.heading=d)}return(isFinite(a[0])||isFinite(a[1])||isFinite(a[2]))&&(o.size=a),o}function b(e,t){return o(this,void 0,void 0,function(){var o;return r(this,function(r){return a.isSome(e.symbol)?[2,e.symbol]:(o=u(e,t),[2,o&&o.getSymbolAsync(e,i({},t,{abortOptions:{signal:t.signal}}))])})})}function c(e,t){return o(this,void 0,void 0,function(){var i,o,a,s,p,y,c,d,v,f,g,h;return r(this,function(r){switch(r.label){case 0:return i=u(e,t),[4,b(e,t)];case 1:if(!(o=r.sent()))return[2,null];if(a={renderer:i,symbol:o},!(i&&"visualVariables"in i&&i.visualVariables))return[2,a];for(s=l.getVisualVariableValues(i,e,t),p=["proportional","proportional","proportional"],y=0,c=s;y<c.length;y++)d=c[y],v=d.variable,f=d.value,"color"===v.type?a.color=n.toUnitRGBA(f):"size"===v.type?"outline"===v.target?a.outlineSize=f:(g=v.axis,h=v.useSymbolValue?"symbolValue":f,"width"===g?p[0]=h:"depth"===g?p[1]=h:"height"===g?p[2]=h:p[0]=p[1]="width-and-depth"===g?h:p[2]=h):"opacity"===v.type?a.opacity=f:"rotation"===v.type&&"tilt"===v.axis?a.tilt=f:"rotation"===v.type&&"roll"===v.axis?a.roll=f:"rotation"===v.type&&(a.heading=f);return(isFinite(p[0])||isFinite(p[1])||isFinite(p[2]))&&(a.size=p),[2,a]}})})}function d(e,t){void 0===t&&(t=0);var i=e[t];return"number"==typeof i&&isFinite(i)?i:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderer=u,t.getSymbol=p,t.getRenderingInfo=y,t.getSymbolAsync=b,t.getRenderingInfoAsync=c,t.getDriverAxisSizeValue=d});