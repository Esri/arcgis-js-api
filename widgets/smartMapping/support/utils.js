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

define(["require","exports","../../../Color","../../../core/maybe","../../../intl/date","../../../renderers/support/utils","../../../renderers/visualVariables/SizeVariable"],(function(e,t,o,r,i,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFillFromColor=t.getStopChanges=t.getSizesFromVariable=t.getPathForSizeStops=t.getDeviationValues=t.formatDateLabel=void 0,t.formatDateLabel=function(e){return i.formatDate(new Date(e),a.timelineDateFormatOptions)},t.getDeviationValues=function(e,t,o){if(!r.isSome(t)||!r.isSome(e))return[];for(var i=[],a=-1*o;a<=o;a++)0!==a&&i.push(t+a*e);return i},t.getPathForSizeStops=function(e){var t=e.bottomValue,o=e.bottomWidth,r=e.max,i=e.min,a=e.pathHeight,n=e.pathWidth,s=e.topValue,u=e.topWidth*n,l=o*n,f=r-i,m=Math.round(a-(t-i)/f*a);return"M"+u+" 0 L"+u+" "+Math.round(a-(s-i)/f*a)+" L"+l+" "+m+" L"+l+" "+a+" L0 "+a+" L0 0 Z"},t.getSizesFromVariable=function(e){var t=e.maxSize,o=e.minSize;return t instanceof n&&(t=t.stops[0].size),o instanceof n&&(o=o.stops[0].size),[t,o]},t.getStopChanges=function(e,t,o){for(var r=o.length-1,i=o[0],a=o[r]-i,n=t-e,s=[],u=1;u<r;u++){var l=(o[u]-i)/a*n+e;s.push({index:u,value:l})}return s.unshift({index:0,value:e}),s.push({index:r,value:t}),s},t.getFillFromColor=function(e){return e instanceof o?e.toCss(!0):o.fromString(e).toCss(!0)}}));