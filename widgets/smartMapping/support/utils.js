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

define(["require","exports","../../../Color","../../../core/maybe","../../../intl/date","../../../renderers/support/utils","../../../renderers/visualVariables/SizeVariable"],function(e,t,r,n,i,o,a){function s(e){return i.formatDate(new Date(e),o.timelineDateFormatOptions)}function u(e,t,r){if(!n.isSome(t)||!n.isSome(e))return[];for(var i=[],o=-1*r;o<=r;o++)0!==o&&i.push(t+o*e);return i}function l(e){var t=e.bottomValue,r=e.bottomWidth,n=e.max,i=e.min,o=e.pathHeight,a=e.pathWidth,s=e.topValue,u=e.topWidth,l=u*a,f=r*a,m=n-i,p=Math.round(o-(t-i)/m*o);return"M"+l+" 0 L"+l+" "+Math.round(o-(s-i)/m*o)+" L"+f+" "+p+" L"+f+" "+o+" L0 "+o+" L0 0 Z"}function f(e){var t=e.maxSize,r=e.minSize;return t instanceof a&&(t=t.stops[0].size),r instanceof a&&(r=r.stops[0].size),[t,r]}function m(e,t,r){for(var n=r.length-1,i=r[0],o=r[n],a=o-i,s=t-e,u=[],l=1;l<n;l++){var f=(r[l]-i)/a,m=f*s+e;u.push({index:l,value:m})}return u.unshift({index:0,value:e}),u.push({index:n,value:t}),u}function p(e){return e instanceof r?e.toCss(!0):r.fromString(e).toCss(!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDateLabel=s,t.getDeviationValues=u,t.getPathForSizeStops=l,t.getSizesFromVariable=f,t.getStopChanges=m,t.getFillFromColor=p});