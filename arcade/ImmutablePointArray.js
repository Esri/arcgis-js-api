// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","./ImmutableArray","../geometry/Point","../kernel"],function(t,e,i,s,h,n){var r=0===n.version.indexOf("4."),a=function(t){function e(e,i,s,h,n,r){t.call(this,e),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=i,this._hasZ=s,this._hasM=h,this._cacheId=n,this._partId=r}return i(e,t),e.prototype.get=function(t){if(void 0===this._lazyPt[t]){var e=this._elements[t];if(void 0===e)return;var i=this._hasZ,s=this._hasM,n=null;n=i&&!s?new h(e[0],e[1],e[2],void 0,this._spRef):s&&i?new h(e[0],e[1],void 0,e[2],this._spRef):i&&s?new h(e[0],e[1],e[2],e[3],this._spRef):new h(e[0],e[1],this._spRef),r?n.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString():n.setCacheValue("_arcadeCacheId",this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString()),this._lazyPt[t]=n}return this._lazyPt[t]},e.prototype.equalityTest=function(t){return t===this?!0:null===t?!1:t instanceof e==!1?!1:t.getUniqueHash()===this.getUniqueHash()},e.prototype.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()},e}(s);return a});