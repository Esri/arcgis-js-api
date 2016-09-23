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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/MultiOriginJSONSupport","../support/arcgisLayerUrl"],function(e,r,t,i,o,p,u){var n=function(e){function r(){e.apply(this,arguments)}return t(r,e),Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title"))return this._get("title");if(!this.url)return"";var e=u.parse(this.url);return e&&e.title?e.title:void 0},enumerable:!0,configurable:!0}),i([o.property({dependsOn:["url"]})],r.prototype,"title",null),i([o.property()],r.prototype,"url",void 0),r=i([o.subclass("esri.layers.mixins.ArcGISService")],r)}(o.declared(p));return n});