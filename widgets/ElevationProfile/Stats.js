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

define(["require","exports","../../intl","../../core/maybe","../../core/unitFormatUtils","../../core/unitUtils","./support/constants","../support/widget"],(function(e,t,a,s,l,i,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderStats=void 0;var o="esri-elevation-profile-stats",v={base:o,noStats:o+" "+o+"--no-stats",elevationStats:o+"__elevation-stats",slopeStats:o+"__slope-stats",stat:o+"__stat",statValue:o+"__stat-value"};function u(e){var t=e.label,a=e.value;return r.tsx("div",{class:v.stat},r.tsx("label",null,t),r.tsx("div",{class:v.statValue},a))}function m(e,t){var r=t.messagesUnits,o=t.spatialReference,v=t.systemOrUnit;if(s.isNone(o))return a.formatNumber(e,{minimumFractionDigits:n.STATS_FORMAT_PRECISION,maximumFractionDigits:n.STATS_FORMAT_PRECISION});var u=e*i.getMetersPerVerticalUnitForSR(o),m=i.preferredVerticalLengthUnit(u,"meters",v),S=i.convertUnit(u,"meters",m);return l.formatDecimal(r,S,m,n.STATS_FORMAT_PRECISION)}function S(e){return a.formatNumber(e,{style:"percent",maximumFractionDigits:n.STATS_FORMAT_PRECISION})}t.renderStats=function(e){var t=e.line,a=e.messages;if(s.isNone(t))return null;var l=t.stats,i=t.progress<1;if(s.isNone(l)||i)return r.tsx("div",{key:"no-stats-container",class:v.noStats},i?a.generatingStats:a.noStats);var n=a.elevationStats,o=a.slopeStats,c=[{label:n.min,value:m(l.minElevation,e)},{label:n.max,value:m(l.maxElevation,e)},{label:n.avg,value:m(l.avgElevation,e)},{label:n.gain,value:m(l.elevationGain,e)},{label:n.loss,value:m(l.elevationLoss,e)}].map(u),g=[{label:o.maxPositive,value:S(l.maxPositiveSlope)},{label:o.maxNegative,value:S(-l.maxNegativeSlope)},{label:o.avgPositive,value:S(l.avgPositiveSlope)},{label:o.avgNegative,value:S(-l.avgNegativeSlope)}].map(u);return r.tsx("div",{key:"stats-container",class:v.base},r.tsx("div",{class:v.elevationStats},r.tsx("label",null,n.label),c),r.tsx("div",{class:v.slopeStats},r.tsx("label",null,o.label),g))}}));