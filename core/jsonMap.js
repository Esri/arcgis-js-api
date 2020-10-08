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

define(["require","exports"],(function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.strict=o.JSONMap=void 0;var i=function(){function t(t,o){var i=this;void 0===o&&(o={ignoreUnknown:!1}),this.jsonToAPI=t,this.options=o,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(t),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=function(t){return i.fromJSON(t)},this.write=function(t,o,n){var r=i.toJSON(t);void 0!==r&&(o[n]=r)},this.write.isJSONMapWriter=!0}return t.prototype.toJSON=function(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t},t.prototype.fromJSON=function(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t},t.prototype.invertMap=function(t){var o={};for(var i in t)o[t[i]]=i;return o},t.prototype.getKeysSorted=function(t){var o=[];for(var i in t)o.push(i);return o.sort(),o},t}();o.JSONMap=i,o.strict=function(){return function(t){return new i(t,{ignoreUnknown:!0})}},o.default=i}));