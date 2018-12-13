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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(t,n){function o(t,n){return void 0===n&&(n={}),new i(t,n)}var i=function(){function t(t,n){void 0===n&&(n={ignoreUnknown:!1});var o=this;this.jsonToAPI=t,this.options=n,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(t),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=function(t){return o.fromJSON(t)},this.write=function(t,n,i){var r=o.toJSON(t);void 0!==r&&(n[i]=r)}}return t.prototype.toJSON=function(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t},t.prototype.fromJSON=function(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t},t.prototype.invertMap=function(t){var n={};for(var o in t)n[t[o]]=o;return n},t.prototype.getKeysSorted=function(t){var n=[];for(var o in t)n.push(o);return n.sort(),n},t}();return function(t){function n(){return function(n){return new t.KebabDictionary(n,{ignoreUnknown:!0})}}t.strict=n,t.KebabDictionary=i}(o||(o={})),o});