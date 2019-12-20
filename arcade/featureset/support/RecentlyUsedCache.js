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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports"],function(t,e){"use strict";var s=function(){function t(t){var e=this;e._keys=[],e._values=[],e.length=0,t&&t.forEach(function(t,s){e.set(t[0],t[1])})}return t.prototype.entries=function(){var t=this;return[].slice.call(this.keys().map(function(e){return[e,t.get(e)]}))},t.prototype.keys=function(){return[].slice.call(this._keys)},t.prototype.values=function(){return[].slice.call(this._values)},t.prototype.has=function(t){return this._keys.indexOf(t)>-1},t.prototype.get=function(t){var e=this._keys.indexOf(t);return e>-1?this._values[e]:void 0},t.prototype.deepGet=function(e){if(!e||!e.length)return null;var s=function(e,i){return void 0===e||null===e?null:i.length?s(e instanceof t?e.get(i[0]):e[i[0]],i.slice(1)):e};return s(this.get(e[0]),e.slice(1))},t.prototype.set=function(t,e){var s=this,i=this._keys.indexOf(t);return i>-1?s._values[i]=e:(s._keys.push(t),s._values.push(e),s.length=s._values.length),this},t.prototype.sortedSet=function(t,e,s,i){var n=this,r=this._keys.length,u=s||0,o=void 0!==i?i:r-1;if(0===r)return n._keys.push(t),n._values.push(e),n;if(t===this._keys[u])return this._values.splice(u,0,e),this;if(t===this._keys[o])return this._values.splice(o,0,e),this;if(t>this._keys[o])return this._keys.splice(o+1,0,t),this._values.splice(o+1,0,e),this;if(t<this._keys[u])return this._values.splice(u,0,e),this._keys.splice(u,0,t),this;if(u>=o)return this;var h=u+Math.floor((o-u)/2);return t<this._keys[h]?this.sortedSet(t,e,u,h-1):t>this._keys[h]?this.sortedSet(t,e,h+1,o):this},t.prototype.size=function(){return this.length},t.prototype.clear=function(){var t=this;return t._keys.length=t.length=t._values.length=0,this},t.prototype.delete=function(t){var e=this,s=e._keys.indexOf(t);return s>-1&&(e._keys.splice(s,1),e._values.splice(s,1),e.length=e._keys.length,!0)},t.prototype.forEach=function(t){var e=this;this._keys.forEach(function(s,i){t(e.get(s),s,i)})},t.prototype.map=function(t){var e=this;return this.keys().map(function(s,i){return t(e.get(s),s,i)})},t.prototype.filter=function(t){var e=this;return e._keys.forEach(function(s,i){!1===t(e.get(s),s,i)&&e.delete(s)}),this},t.prototype.clone=function(){return new t(this.entries())},t}(),i=function(){function t(t){void 0===t&&(t=20),this.maxEntries=t,this.values=new s}return t.prototype.delete=function(t){this.values.has(t)&&this.values.delete(t)},t.prototype.get=function(t){var e=this.values.has(t),s=null;return e&&(s=this.values.get(t),this.values.delete(t),this.values.set(t,s)),s},t.prototype.put=function(t,e){if(this.values.size()>=this.maxEntries){var s=this.values.keys()[0];this.values.delete(s)}this.values.set(t,e)},t}();return function(){function t(t){void 0===t&&(t=20),this.maxEntries=t,this._cache=new i(this.maxEntries)}return t.prototype.clear=function(){this._cache=new i(this.maxEntries)},t.prototype.addToCache=function(t,e){this._cache.put(t,e)},t.prototype.removeFromCache=function(t){this._cache.delete(t)},t.prototype.getFromCache=function(t){return this._cache.get(t)},t}()});