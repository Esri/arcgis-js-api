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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils"],function(e,i,r,t,a,o,n,l){function s(e,i){if(!e||e.symbol)return null;var r=i&&i.renderer;return e&&n.isSome(r)&&r.getObservationRenderer?r.getObservationRenderer(e):r}function u(e,i){if(n.isSome(e.symbol))return e.symbol;var r=s(e,i);return n.isSome(r)?r.getSymbol(e,i):null}function c(e,i){var r=s(e,i),t=u(e,i);if(!t)return null;var a={renderer:r,symbol:t};if(n.isNone(r)||!("visualVariables"in r)||!r.visualVariables)return a;for(var o=l.getVisualVariableValues(r,e,i),c=["proportional","proportional","proportional"],b=0,p=o;b<p.length;b++){var y=p[b],d=y.variable,v=y.value;switch(d.type){case"color":a.color=v.toRgba();break;case"size":if("outline"===d.target)a.outlineSize=v;else{var f=d.axis,g=d.useSymbolValue?"symbolValue":v;switch(f){case"width":c[0]=g;break;case"depth":c[1]=g;break;case"height":c[2]=g;break;case"width-and-depth":c[0]=c[1]=g;break;default:c[0]=c[1]=c[2]=g}}break;case"opacity":a.opacity=v;break;case"rotation":switch(d.axis){case"tilt":a.tilt=v;break;case"roll":a.roll=v;break;default:a.heading=v}}}return(isFinite(c[0])||isFinite(c[1])||isFinite(c[2]))&&(a.size=c),a}function b(e,i){return a(this,void 0,void 0,function(){var a;return t(this,function(t){return n.isSome(e.symbol)?[2,e.symbol]:(a=s(e,i),[2,n.isSome(a)&&a.getSymbolAsync(e,r({},i,{abortOptions:{signal:i.signal}}))])})})}function p(e,i){return a(this,void 0,void 0,function(){var r,a,n,u,c,p,y,d,v,f,g,h;return t(this,function(t){switch(t.label){case 0:return r=s(e,i),[4,b(e,i)];case 1:if(!(a=t.sent()))return[2,null];if(n={renderer:r,symbol:a},!(r&&"visualVariables"in r&&r.visualVariables))return[2,n];for(u=l.getVisualVariableValues(r,e,i),c=["proportional","proportional","proportional"],p=0,y=u;p<y.length;p++)d=y[p],v=d.variable,f=d.value,"color"===v.type?n.color=o.toUnitRGBA(f):"size"===v.type?"outline"===v.target?n.outlineSize=f:(g=v.axis,h=v.useSymbolValue?"symbolValue":f,"width"===g?c[0]=h:"depth"===g?c[1]=h:"height"===g?c[2]=h:c[0]=c[1]="width-and-depth"===g?h:c[2]=h):"opacity"===v.type?n.opacity=f:"rotation"===v.type&&"tilt"===v.axis?n.tilt=f:"rotation"===v.type&&"roll"===v.axis?n.roll=f:"rotation"===v.type&&(n.heading=f);return(isFinite(c[0])||isFinite(c[1])||isFinite(c[2]))&&(n.size=c),[2,n]}})})}function y(e,i){void 0===i&&(i=0);var r=e[i];return"number"==typeof r&&isFinite(r)?r:null}Object.defineProperty(i,"__esModule",{value:!0}),i.getRenderer=s,i.getSymbol=u,i.getRenderingInfo=c,i.getSymbolAsync=b,i.getRenderingInfoAsync=p,i.getDriverAxisSizeValue=y});