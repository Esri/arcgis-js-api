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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportsTimestamps=t.getTimestamp=t.startMeasurement=void 0,t.startMeasurement=function(e){var t=e.capabilities.disjointTimerQuery;return t?new i(t):null},t.getTimestamp=function(e,t,i){void 0===i&&(i=50);var r=e.capabilities.disjointTimerQuery;if(!r)return!1;if(r.timestampBits()<=0)return!1;var s=r.createQuery();r.createTimestamp(s);var u=function(){var e=r.resultAvailable(s),n=r.disjoint();if(!e||n)n?t():setTimeout(u,i);else{var a=r.getResult(s);t(a/1e6)}};return u(),!0},t.supportsTimestamps=function(e){var t=e.capabilities.disjointTimerQuery;if(!t)return!1;var i=t.timestampBits();return console.log({bits:i}),i>0};var i=function(){function e(e){this.timer=e,this.query=e.createQuery(),this.timer.beginTimeElapsed(this.query)}return e.prototype.stop=function(e,t){void 0===t&&(t=50),this.cb=e,this.checkInterval=t,this.timer.endTimeElapsed(),this.checkQueryResult()},e.prototype.checkQueryResult=function(){var e=this.timer.resultAvailable(this.query),t=this.timer.disjoint();if(!e||t)t?this.cb():setTimeout(this.checkQueryResult.bind(this),this.checkInterval);else{var i=this.timer.getResult(this.query);this.cb(i/1e6)}},e}()}));