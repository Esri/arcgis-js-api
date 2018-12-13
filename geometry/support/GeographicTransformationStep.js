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

define(["require","exports"],function(e,t){var i=0;return function(){function e(e){void 0===e&&(e=null),this.uid=i++,e?(this._wkt=void 0!==e.wkt?e.wkt:null,this._wkid=void 0!==e.wkid?e.wkid:-1,this._isInverse=void 0!==e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}return e.fromGE=function(t){var i=new e;return i._wkt=t.wkt,i._wkid=t.wkid,i._isInverse=t.isInverse,i},Object.defineProperty(e.prototype,"wkt",{get:function(){return this._wkt},set:function(e){this._wkt=e,this.uid=i++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wkid",{get:function(){return this._wkid},set:function(e){this._wkid=e,this.uid=i++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isInverse",{get:function(){return this._isInverse},set:function(e){this._isInverse=e,this.uid=i++},enumerable:!0,configurable:!0}),e.prototype.getInverse=function(){var t=new e;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t},e}()});