// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/extends","./ImmutableArray","../geometry/Point"],(function(t,e,i,s,n){"use strict";return function(t){function e(e,i,s,n,r,a){var h=t.call(this,e)||this;return h._lazyPt=[],h._hasZ=!1,h._hasM=!1,h._spRef=i,h._hasZ=s,h._hasM=n,h._cacheId=r,h._partId=a,h}return i(e,t),e.prototype.get=function(t){if(void 0===this._lazyPt[t]){var e=this._elements[t];if(void 0===e)return;var i=this._hasZ,s=this._hasM,r=null;(r=i&&!s?new n(e[0],e[1],e[2],void 0,this._spRef):s&&!i?new n(e[0],e[1],void 0,e[2],this._spRef):i&&s?new n(e[0],e[1],e[2],e[3],this._spRef):new n(e[0],e[1],this._spRef)).setCacheValue("_arcadeCacheId",this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString()),this._lazyPt[t]=r}return this._lazyPt[t]},e.prototype.equalityTest=function(t){return t===this||null!==t&&(t instanceof e!=!1&&t.getUniqueHash()===this.getUniqueHash())},e.prototype.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()},e}(s)}));