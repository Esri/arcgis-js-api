// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool"],function(t,e,i){var r=function(){function t(t){this.coords=[0,0],this._height=0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._width=0,this.data=t}return t.prototype.release=function(){this.data=null},Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,this._width=this._height=0,t&&(t instanceof HTMLImageElement?(this._width=t.naturalWidth,this._height=t.naturalHeight):t.width>0&&t.height>0&&(this._width=t.width,this._height=t.height))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){return this._width>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),t.prototype.draw=function(t,e,i,r,h,n,o,a,u){this.ready&&r&&h&&a&&u&&t.drawImage(this._data,e,i,r,h,n,o,a,u)},t.pool=new i(t,!0),t}();return r});