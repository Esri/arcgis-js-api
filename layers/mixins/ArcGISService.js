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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/MultiOriginJSONSupport","../support/arcgisLayerUrl"],function(t,e,r,i,o,s,l){var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var t=l.parse(this.url);if(t&&t.title)return t.title}return this._get("title")||""},set:function(t){this._set("title",t)},enumerable:!0,configurable:!0}),e}(o.declared(s));return i([o.property({dependsOn:["url"]})],n.prototype,"title",null),i([o.property()],n.prototype,"url",void 0),n=i([o.subclass("esri.layers.mixins.ArcGISService")],n)});