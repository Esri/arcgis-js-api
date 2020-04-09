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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils"],(function(e,r,t,i,o,a,n,l){function s(e,r){if(!e||e.symbol)return null;var t=r&&r.renderer;return e&&n.isSome(t)&&t.getObservationRenderer?t.getObservationRenderer(e):t}function u(e,r){if(n.isSome(e.symbol))return e.symbol;var t=s(e,r);return n.isSome(t)?t.getSymbol(e,r):null}function p(e,r){return o(this,void 0,void 0,(function(){var o;return i(this,(function(i){return n.isSome(e.symbol)?[2,e.symbol]:(o=s(e,r),[2,n.isSome(o)&&o.getSymbolAsync(e,t({},r,{abortOptions:{signal:r.signal}}))])}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getRenderer=s,r.getSymbol=u,r.getRenderingInfo=function(e,r){var t=s(e,r),i=u(e,r);if(!i)return null;var o={renderer:t,symbol:i};if(n.isNone(t)||!("visualVariables"in t)||!t.visualVariables)return o;for(var a=["proportional","proportional","proportional"],p=0,c=l.getVisualVariableValues(t,e,r);p<c.length;p++){var b=c[p],y=b.variable,v=b.value;switch(y.type){case"color":o.color=v.toRgba();break;case"size":if("outline"===y.target)o.outlineSize=v;else{var d=y.axis,f=y.useSymbolValue?"symbol-value":v;switch(d){case"width":a[0]=f;break;case"depth":a[1]=f;break;case"height":a[2]=f;break;case"width-and-depth":a[0]=a[1]=f;break;default:a[0]=a[1]=a[2]=f}}break;case"opacity":o.opacity=v;break;case"rotation":switch(y.axis){case"tilt":o.tilt=v;break;case"roll":o.roll=v;break;default:o.heading=v}}}return"proportional"===a[0]&&"proportional"===a[1]&&"proportional"===a[2]||(o.size=a),o},r.getSymbolAsync=p,r.getRenderingInfoAsync=function(e,r){return o(this,void 0,void 0,(function(){var t,o,n,u,c,b,y,v,d,f,g,h;return i(this,(function(i){switch(i.label){case 0:return t=s(e,r),[4,p(e,r)];case 1:if(!(o=i.sent()))return[2,null];if(n={renderer:t,symbol:o},!(t&&"visualVariables"in t&&t.visualVariables))return[2,n];for(u=l.getVisualVariableValues(t,e,r),c=["proportional","proportional","proportional"],b=0,y=u;b<y.length;b++)v=y[b],d=v.variable,f=v.value,"color"===d.type?n.color=a.toUnitRGBA(f):"size"===d.type?"outline"===d.target?n.outlineSize=f:(g=d.axis,h=d.useSymbolValue?"symbol-value":f,"width"===g?c[0]=h:"depth"===g?c[1]=h:"height"===g?c[2]=h:c[0]=c[1]="width-and-depth"===g?h:c[2]=h):"opacity"===d.type?n.opacity=f:"rotation"===d.type&&"tilt"===d.axis?n.tilt=f:"rotation"===d.type&&"roll"===d.axis?n.roll=f:"rotation"===d.type&&(n.heading=f);return(isFinite(c[0])||isFinite(c[1])||isFinite(c[2]))&&(n.size=c),[2,n]}}))}))},r.getDriverAxisSizeValue=function(e,r){void 0===r&&(r=0);var t=e[r];return"number"==typeof t&&isFinite(t)?t:null}}));