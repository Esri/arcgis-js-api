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

define(["require","exports","../../../core/tsSupport/extendsHelper"],function(e,t,i){var r=0,n=function(){function e(){this.attached=!1,this._opacity=1,this._visible=!0,Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-do-"+r++})}return Object.defineProperty(e.prototype,"opacity",{get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=e,this.requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())},enumerable:!0,configurable:!0}),e.prototype.requestRender=function(){this.parent&&this.parent.requestChildRender(this)},e.prototype.dispose=function(){},e}();return n});