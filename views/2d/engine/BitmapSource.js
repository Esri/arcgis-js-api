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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool"],function(t,e,i){function h(t){return t&&"render"in t}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t){this._height=0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._width=0,this.x=0,this.y=0,this.data=t}return t.prototype.release=function(){this.data=null},Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,this._width=this._height=0,t&&(h(t)||(t instanceof HTMLImageElement?(this._width=t.naturalWidth,this._height=t.naturalHeight):t.width>0&&t.height>0&&(this._width=t.width,this._height=t.height)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return h(this._data)?this._data.height:this._height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){return h(this._data)?this._data.width>0&&this._data.height>0:this._width>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return h(this.data)?this._data.width:this._width},enumerable:!0,configurable:!0}),t.prototype.draw=function(t,e,i,a,n,r,o,d,s){this.ready&&(h(this._data)?this._data.render(t,e,i,a,n,r,o,d,s):a&&n&&d&&s&&t.drawImage(this._data,e,i,a,n,r,o,d,s))},t.pool=new i(t,!0),t}();e.default=a});