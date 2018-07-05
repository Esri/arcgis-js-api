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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","../support/Evented"],function(t,e,i,r,n){function a(t){return t&&"render"in t}function h(t){return t&&!("render"in t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e){var i=t.call(this)||this;return i._height=0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._width=0,i.x=0,i.y=0,i.data=e,i}return i(e,t),e.prototype.release=function(){this.data=null},Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,this._width=this._height=0,t&&(a(t)||(t instanceof HTMLImageElement?(this._width=t.naturalWidth,this._height=t.naturalHeight):t.width>0&&t.height>0&&(this._width=t.width,this._height=t.height)))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return a(this._data)?this._data.height:this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return a(this._data)?this._data.width>0&&this._data.height>0:this._width>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return a(this.data)?this._data.width:this._width},enumerable:!0,configurable:!0}),e.prototype.draw=function(t,e,i,r,n,o,d,u,s){this.ready&&(a(this._data)?this._data.render(t,e,i,r,n,o,d,u,s):h(this._data)&&r&&n&&u&&s&&t.drawImage(this._data,e,i,r,n,o,d,u,s))},e.pool=new r(e,!0),e}(n.default);e.default=o});