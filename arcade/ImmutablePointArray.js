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

define(["require","exports","tslib","./ImmutableArray","../geometry/Point"],(function(t,e,i,s,n){"use strict";return function(t){function e(e,i,s,n,r,h){var a=t.call(this,e)||this;return a._lazyPt=[],a._hasZ=!1,a._hasM=!1,a._spRef=i,a._hasZ=s,a._hasM=n,a._cacheId=r,a._partId=h,a}return i.__extends(e,t),e.prototype.get=function(t){if(void 0===this._lazyPt[t]){var e=this._elements[t];if(void 0===e)return;var i=this._hasZ,s=this._hasM,r=null;(r=i&&!s?new n(e[0],e[1],e[2],void 0,this._spRef):s&&i?new n(e[0],e[1],void 0,e[2],this._spRef):i&&s?new n(e[0],e[1],e[2],e[3],this._spRef):new n(e[0],e[1],this._spRef)).cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString(),this._lazyPt[t]=r}return this._lazyPt[t]},e.prototype.equalityTest=function(t){return t===this||null!==t&&(t instanceof e!=!1&&t.getUniqueHash()===this.getUniqueHash())},e.prototype.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()},e}(s)}));