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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils"],(function(e,r,i,t,a,o){function n(e,r){if(!e||e.symbol)return null;var i=r&&r.renderer;return e&&a.isSome(i)&&i.getObservationRenderer?i.getObservationRenderer(e):i}function l(e,r){if(a.isSome(e.symbol))return e.symbol;var i=n(e,r);return a.isSome(i)?i.getSymbol(e,r):null}function s(e,r){return i.__awaiter(this,void 0,void 0,(function(){var t;return i.__generator(this,(function(o){return a.isSome(e.symbol)?[2,e.symbol]:(t=n(e,r),[2,a.isSome(t)&&t.getSymbolAsync(e,i.__assign(i.__assign({},r),{abortOptions:{signal:r.signal}}))])}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getRenderer=n,r.getSymbol=l,r.getRenderingInfo=function(e,r){var i=n(e,r),t=l(e,r);if(!t)return null;var s={renderer:i,symbol:t};if(a.isNone(i)||!("visualVariables"in i)||!i.visualVariables)return s;for(var u=["proportional","proportional","proportional"],b=0,c=o.getVisualVariableValues(i,e,r);b<c.length;b++){var p=c[b],v=p.variable,y=p.value;switch(v.type){case"color":s.color=y.toRgba();break;case"size":if("outline"===v.target)s.outlineSize=y;else{var f=v.axis,d=v.useSymbolValue?"symbol-value":y;switch(f){case"width":u[0]=d;break;case"depth":u[1]=d;break;case"height":u[2]=d;break;case"width-and-depth":u[0]=u[1]=d;break;default:u[0]=u[1]=u[2]=d}}break;case"opacity":s.opacity=y;break;case"rotation":switch(v.axis){case"tilt":s.tilt=y;break;case"roll":s.roll=y;break;default:s.heading=y}}}return"proportional"===u[0]&&"proportional"===u[1]&&"proportional"===u[2]||(s.size=u),s},r.getSymbolAsync=s,r.getRenderingInfoAsync=function(e,r){return i.__awaiter(this,void 0,void 0,(function(){var a,l,u,b,c,p,v,y,f,d,g,h;return i.__generator(this,(function(i){switch(i.label){case 0:return a=n(e,r),[4,s(e,r)];case 1:if(!(l=i.sent()))return[2,null];if(u={renderer:a,symbol:l},!(a&&"visualVariables"in a&&a.visualVariables))return[2,u];for(b=o.getVisualVariableValues(a,e,r),c=["proportional","proportional","proportional"],p=0,v=b;p<v.length;p++)y=v[p],f=y.variable,d=y.value,"color"===f.type?u.color=t.toUnitRGBA(d):"size"===f.type?"outline"===f.target?u.outlineSize=d:(g=f.axis,h=f.useSymbolValue?"symbol-value":d,"width"===g?c[0]=h:"depth"===g?c[1]=h:"height"===g?c[2]=h:c[0]=c[1]="width-and-depth"===g?h:c[2]=h):"opacity"===f.type?u.opacity=d:"rotation"===f.type&&"tilt"===f.axis?u.tilt=d:"rotation"===f.type&&"roll"===f.axis?u.roll=d:"rotation"===f.type&&(u.heading=d);return(isFinite(c[0])||isFinite(c[1])||isFinite(c[2]))&&(u.size=c),[2,u]}}))}))},r.getDriverAxisSizeValue=function(e,r){void 0===r&&(r=0);var i=e[r];return"number"==typeof i&&isFinite(i)?i:null},r.getDriverAxisSizeValueAny=function(e){for(var r=0;r<3;r++){var i=e[r];if("number"==typeof i)return isFinite(i)?i:0}return 0}}));