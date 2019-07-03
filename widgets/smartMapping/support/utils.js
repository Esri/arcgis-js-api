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

define(["require","exports","../../../core/maybe","../../../intl/date","../../../renderers/support/utils","../../../renderers/visualVariables/SizeVariable"],function(e,t,i,r,n,a){function o(e){return r.formatDate(new Date(e),n.timelineDateFormatOptions)}function u(e,t,r){if(!i.isSome(t)||!i.isSome(e))return[];for(var n=[],a=-1*r;a<=r;a++)0!==a&&n.push(t+a*e);return n}function s(e){var t=e.bottomValue,i=e.bottomWidth,r=e.max,n=e.min,a=e.pathHeight,o=e.pathWidth,u=e.topValue,s=e.topWidth,l=s*o,f=i*o,p=r-n,h=Math.round(a-(t-n)/p*a);return"M"+l+" 0 L"+l+" "+Math.round(a-(u-n)/p*a)+" L"+f+" "+h+" L"+f+" "+a+" L0 "+a+" L0 0 Z"}function l(e){var t=e.maxSize,i=e.minSize;return t instanceof a&&(t=t.stops[0].size),i instanceof a&&(i=i.stops[0].size),[t,i]}function f(e,t,i,r,n){for(var a=n.length-1,o=n[0],u=n[a],s=u-o,l=r-i,f=[],p=1;p<a;p++){var h=(n[p]-o)/s,d=h*l+i;f.push({index:p,value:d})}return f.unshift({index:0,value:i}),f.push({index:a,value:r}),f}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDateLabel=o,t.getDeviationValues=u,t.getPathForSizeStops=s,t.getSizesFromVariable=l,t.getStopChanges=f});