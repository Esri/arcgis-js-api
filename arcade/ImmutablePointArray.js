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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","./ImmutableArray","../geometry/Point"],function(t,e,i,n,r){return function(t){function e(e,i,n,r,s,h){var a=t.call(this,e)||this;return a._lazyPt=[],a._hasZ=!1,a._hasM=!1,a._spRef=i,a._hasZ=n,a._hasM=r,a._cacheId=s,a._partId=h,a}return i(e,t),e.prototype.get=function(t){if(void 0===this._lazyPt[t]){var e=this._elements[t];if(void 0===e)return;var i=this._hasZ,n=this._hasM,s=null;s=i&&!n?new r(e[0],e[1],e[2],void 0,this._spRef):n&&i?new r(e[0],e[1],void 0,e[2],this._spRef):i&&n?new r(e[0],e[1],e[2],e[3],this._spRef):new r(e[0],e[1],this._spRef),s.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString(),this._lazyPt[t]=s}return this._lazyPt[t]},e.prototype.equalityTest=function(t){return t===this||null!==t&&(t instanceof e!=!1&&t.getUniqueHash()===this.getUniqueHash())},e.prototype.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()},e}(n)});