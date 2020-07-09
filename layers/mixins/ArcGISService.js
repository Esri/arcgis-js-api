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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Logger","../../core/accessorSupport/decorators","../support/arcgisLayerUrl"],(function(e,t,r,i,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=o.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",o.sanitizeUrl(e,i.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0}),r.__decorate([n.property({dependsOn:["url"]})],t.prototype,"title",null),r.__decorate([n.property({type:String})],t.prototype,"url",null),t=r.__decorate([n.subclass("esri.layers.mixins.ArcGISService")],t)}(e)}}));