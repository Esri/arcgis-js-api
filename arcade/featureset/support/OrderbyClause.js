// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports"],function(t,e){"use strict";function r(t,e){return t===e?0:t<e?-1:1}return function(){function t(t){var e=t.split(",");this._fields=[],this._directions=[];for(var r=0;r<e.length;r++){var i=e[r],s=i.match(/\S+/g);this._fields.push(s[0]),2===s.length?"asc"===s[1].toLowerCase()?this._directions.push(1):this._directions.push(0):this._directions.push(1)}}return t.prototype.constructClause=function(){for(var t="",e=0;e<this._fields.length;e++)0!==e&&(t+=","),t+=this._fields[e],1===this._directions[e]?t+=" ASC":t+=" DESC";return t},t.prototype.order=function(t){var e=this;t.sort(function(t,i){for(var s=0;s<e._fields.length;s++){var n=e.featureValue(t.feature,e._fields[s],s),o=e.featureValue(i.feature,e._fields[s],s),u=0;if(0!==(u=1===e._directions[s]?r(n,o):-1*r(n,o)))return u}return 0})},t.prototype.scanForField=function(t){for(var e=0;e<this._fields.length;e++)if(this._fields[e].toLowerCase().trim()===t.toLowerCase().trim())return!0;return!1},t.prototype.featureValue=function(t,e,r){var i=t.attributes[e];if(void 0!==i)return i;for(var s in t.attributes)if(e.toLowerCase()===s.toLowerCase())return this._fields[r]=s,t.attributes[s];return null},t}()});