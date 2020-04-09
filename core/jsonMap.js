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

define(["require","exports"],(function(t,o){Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(t,o){void 0===o&&(o={ignoreUnknown:!1});var n=this;this.jsonToAPI=t,this.options=o,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(t),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=function(t){return n.fromJSON(t)},this.write=function(t,o,i){var r=n.toJSON(t);void 0!==r&&(o[i]=r)}}return t.prototype.toJSON=function(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t},t.prototype.fromJSON=function(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t},t.prototype.invertMap=function(t){var o={};for(var n in t)o[t[n]]=n;return o},t.prototype.getKeysSorted=function(t){var o=[];for(var n in t)o.push(n);return o.sort(),o},t}();o.JSONMap=n,o.strict=function(){return function(t){return new n(t,{ignoreUnknown:!0})}},o.default=n}));