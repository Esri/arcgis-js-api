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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils"],(function(e,r,i,t,a,n){"use strict";function o(e,r){if(!e||e.symbol)return null;var i=r&&r.renderer;return e&&a.isSome(i)&&i.getObservationRenderer?i.getObservationRenderer(e):i}function l(e,r){if(a.isSome(e.symbol))return e.symbol;var i=o(e,r);return a.isSome(i)?i.getSymbol(e,r):null}function s(e,r){return i.__awaiter(this,void 0,void 0,(function(){var t;return i.__generator(this,(function(n){return a.isSome(e.symbol)?[2,e.symbol]:(t=o(e,r),[2,a.isSome(t)&&t.getSymbolAsync(e,i.__assign(i.__assign({},r),{abortOptions:{signal:r.signal}}))])}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getDriverAxisSizeValueAny=r.getDriverAxisSizeValue=r.getRenderingInfoAsync=r.getSymbolAsync=r.getRenderingInfo=r.getSymbol=r.getRenderer=void 0,r.getRenderer=o,r.getSymbol=l,r.getRenderingInfo=function(e,r){var i=o(e,r),t=l(e,r);if(!t)return null;var s={renderer:i,symbol:t};if(a.isNone(i)||!("visualVariables"in i)||!i.visualVariables)return s;for(var u=["proportional","proportional","proportional"],b=0,c=n.getVisualVariableValues(i,e,r);b<c.length;b++){var p=c[b],g=p.variable,y=p.value;switch(g.type){case"color":s.color=y.toRgba();break;case"size":if("outline"===g.target)s.outlineSize=y;else{var v=g.axis,d=g.useSymbolValue?"symbol-value":y;switch(v){case"width":u[0]=d;break;case"depth":u[1]=d;break;case"height":u[2]=d;break;case"width-and-depth":u[0]=u[1]=d;break;default:u[0]=u[1]=u[2]=d}}break;case"opacity":s.opacity=y;break;case"rotation":switch(g.axis){case"tilt":s.tilt=y;break;case"roll":s.roll=y;break;default:s.heading=y}}}return"proportional"===u[0]&&"proportional"===u[1]&&"proportional"===u[2]||(s.size=u),s},r.getSymbolAsync=s,r.getRenderingInfoAsync=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var a,l,u,b,c,p,g,y,v,d,f,m;return i.__generator(this,(function(i){switch(i.label){case 0:return a=o(e,r),[4,s(e,r)];case 1:if(!(l=i.sent()))return[2,null];if(u={renderer:a,symbol:l},!(a&&"visualVariables"in a&&a.visualVariables))return[2,u];for(b=n.getVisualVariableValues(a,e,r),c=["proportional","proportional","proportional"],p=0,g=b;p<g.length;p++)y=g[p],v=y.variable,d=y.value,"color"===v.type?u.color=t.toUnitRGBA(d):"size"===v.type?"outline"===v.target?u.outlineSize=d:(f=v.axis,m=v.useSymbolValue?"symbol-value":d,"width"===f?c[0]=m:"depth"===f?c[1]=m:"height"===f?c[2]=m:c[0]=c[1]="width-and-depth"===f?m:c[2]=m):"opacity"===v.type?u.opacity=d:"rotation"===v.type&&"tilt"===v.axis?u.tilt=d:"rotation"===v.type&&"roll"===v.axis?u.roll=d:"rotation"===v.type&&(u.heading=d);return(isFinite(c[0])||isFinite(c[1])||isFinite(c[2]))&&(u.size=c),[2,u]}}))}))},r.getDriverAxisSizeValue=function(e,r){void 0===r&&(r=0);var i=e[r];return"number"==typeof i&&isFinite(i)?i:null},r.getDriverAxisSizeValueAny=function(e){for(var r=0;r<3;r++){var i=e[r];if("number"==typeof i)return isFinite(i)?i:0}return 0}}));