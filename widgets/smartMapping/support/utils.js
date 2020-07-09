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

define(["require","exports","../../../Color","../../../core/maybe","../../../intl/date","../../../renderers/support/utils","../../../renderers/visualVariables/SizeVariable"],(function(e,t,r,n,i,o,a){Object.defineProperty(t,"__esModule",{value:!0}),t.formatDateLabel=function(e){return i.formatDate(new Date(e),o.timelineDateFormatOptions)},t.getDeviationValues=function(e,t,r){if(!n.isSome(t)||!n.isSome(e))return[];for(var i=[],o=-1*r;o<=r;o++)0!==o&&i.push(t+o*e);return i},t.getPathForSizeStops=function(e){var t=e.bottomValue,r=e.bottomWidth,n=e.max,i=e.min,o=e.pathHeight,a=e.pathWidth,s=e.topValue,u=e.topWidth*a,l=r*a,f=n-i,m=Math.round(o-(t-i)/f*o);return"M"+u+" 0 L"+u+" "+Math.round(o-(s-i)/f*o)+" L"+l+" "+m+" L"+l+" "+o+" L0 "+o+" L0 0 Z"},t.getSizesFromVariable=function(e){var t=e.maxSize,r=e.minSize;return t instanceof a&&(t=t.stops[0].size),r instanceof a&&(r=r.stops[0].size),[t,r]},t.getStopChanges=function(e,t,r){for(var n=r.length-1,i=r[0],o=r[n]-i,a=t-e,s=[],u=1;u<n;u++){var l=(r[u]-i)/o*a+e;s.push({index:u,value:l})}return s.unshift({index:0,value:e}),s.push({index:n,value:t}),s},t.getFillFromColor=function(e){return e instanceof r?e.toCss(!0):r.fromString(e).toCss(!0)}}));