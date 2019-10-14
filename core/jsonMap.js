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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(t,n){function o(){return function(t){return new i(t,{ignoreUnknown:!0})}}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){void 0===n&&(n={ignoreUnknown:!1}),this.jsonToAPI=t,this.options=n,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(t),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=function(t){return this.fromJSON(t)}.bind(this),this.write=function(t,n,o){var i=this.toJSON(t);void 0!==i&&(n[o]=i)}.bind(this)}return t.prototype.toJSON=function(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t},t.prototype.fromJSON=function(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t},t.prototype.invertMap=function(t){var n={};for(var o in t)n[t[o]]=o;return n},t.prototype.getKeysSorted=function(t){var n=[];for(var o in t)n.push(o);return n.sort(),n},t}();n.JSONMap=i,n.strict=o,n.default=i});