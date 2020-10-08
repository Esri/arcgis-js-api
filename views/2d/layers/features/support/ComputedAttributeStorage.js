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

define(["require","exports","./displayIdUtils","./StaticBitSet"],(function(t,e,n,i){"use strict";function r(t,e,n){if(!(t.length>e))for(;t.length<=e;)t.push(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.ComputedAttributeStorage=void 0;var s=function(){function t(){this._numerics=[],this._strings=[],this._idGenerator=new n.DisplayIdGenerator,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}return t.prototype.createBitset=function(){var t=this._bitsets.length;return this._bitsets.push(i.StaticBitSet.create(this._allocatedSize,2147483647)),t+1},t.prototype.getBitset=function(t){return this._bitsets[t-1]},t.prototype._expand=function(){this._allocatedSize<<=1;for(var t=0,e=this._bitsets;t<e.length;t++){e[t].resize(this._allocatedSize)}},t.prototype._ensureNumeric=function(t,e){this._numerics[t]||(this._numerics[t]=[]),r(this._numerics[t],e,0)},t.prototype._ensureInstanceId=function(t){r(this._instanceIds,t,0)},t.prototype._ensureString=function(t,e){this._strings[t]||(this._strings[t]=[]),r(this._strings[t],e,null)},t.prototype.createDisplayId=function(t){void 0===t&&(t=!1);var e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),function(t,e){return((e?2147483648:0)|t)>>>0}(e,t)},t.prototype.releaseDisplayId=function(t){for(var e=0,n=this._bitsets;e<n.length;e++){n[e].unset(t)}return this._idGenerator.releaseId(2147483647&t)},t.prototype.getComputedNumeric=function(t,e){return this.getComputedNumericAtIndex(2147483647&t,0)},t.prototype.setComputedNumeric=function(t,e,n){return this.setComputedNumericAtIndex(2147483647&t,n,0)},t.prototype.getComputedString=function(t,e){return this.getComputedStringAtIndex(2147483647&t,0)},t.prototype.setComputedString=function(t,e,n){return this.setComputedStringAtIndex(2147483647&t,0,n)},t.prototype.getComputedNumericAtIndex=function(t,e){var n=2147483647&t;return this._ensureNumeric(e,n),this._numerics[e][n]},t.prototype.setComputedNumericAtIndex=function(t,e,n){var i=2147483647&t;this._ensureNumeric(e,i),this._numerics[e][i]=n},t.prototype.getInstanceId=function(t){var e=2147483647&t;return this._ensureInstanceId(e),this._instanceIds[e]},t.prototype.setInstanceId=function(t,e){var n=2147483647&t;this._ensureInstanceId(n),this._instanceIds[n]=e},t.prototype.getComputedStringAtIndex=function(t,e){var n=2147483647&t;return this._ensureString(e,n),this._strings[e][n]},t.prototype.setComputedStringAtIndex=function(t,e,n){var i=2147483647&t;this._ensureString(e,i),this._strings[e][i]=n},t.prototype.getXMin=function(t){return this._bounds[4*(2147483647&t)]},t.prototype.getYMin=function(t){return this._bounds[4*(2147483647&t)+1]},t.prototype.getXMax=function(t){return this._bounds[4*(2147483647&t)+2]},t.prototype.getYMax=function(t){return this._bounds[4*(2147483647&t)+3]},t.prototype.setBounds=function(t,e){var n=e.readHydratedGeometry();if(!n||!n.coords.length)return!1;var i=1/0,s=1/0,o=-1/0,u=-1/0;n.forEachVertex((function(t,e){i=Math.min(i,t),s=Math.min(s,e),o=Math.max(o,t),u=Math.max(u,e)}));var p=2147483647&t;return r(this._bounds,4*p+4,0),this._bounds[4*p]=i,this._bounds[4*p+1]=s,this._bounds[4*p+2]=o,this._bounds[4*p+3]=u,!0},t}();e.ComputedAttributeStorage=s}));