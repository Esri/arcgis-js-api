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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/HandleOwner","../../core/maybe","../../core/accessorSupport/decorators"],(function(e,t,r,i,o,n,u,s){function a(e){return u.isNone(e)?null:JSON.stringify(e)}return function(e){function t(t){var r=e.call(this,t)||this;return r._baselineAttributesJSON=null,r._baselineGeometryJSON=null,r.feature=null,r}return r(t,e),Object.defineProperty(t.prototype,"attributesModified",{get:function(){var e=this._baselineAttributesJSON,t=this.feature;return!(!t||e===a(t.attributes))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometryModified",{get:function(){var e=this._baselineGeometryJSON,t=this.feature;return!(!t||e===a(t.geometry))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"modified",{get:function(){return this.attributesModified||this.geometryModified},enumerable:!0,configurable:!0}),t.prototype.trackChanges=function(){this.feature&&(this._baselineAttributesJSON=a(this.feature.attributes),this._baselineGeometryJSON=a(this.feature.geometry),this.notifyChange("attributesModified"),this.notifyChange("geometryModified"))},t.prototype.updateAttributes=function(e){this.feature.attributes=e,this.notifyChange("attributesModified")},t.prototype.updateGeometry=function(e){this.feature.geometry=e,this.notifyChange("geometryModified")},i([s.property()],t.prototype,"attributesModified",null),i([s.property()],t.prototype,"feature",void 0),i([s.property()],t.prototype,"geometryModified",null),i([s.property({dependsOn:["attributesModified","geometryModified"]})],t.prototype,"modified",null),t=i([s.subclass("esri.widgets.Editor.Edits")],t)}(s.declared(n.HandleOwnerMixin(o)))}));